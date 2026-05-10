const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const NOTES_DIR = path.resolve(__dirname, "../site/notes");

const sortTree = (unsorted) => {
  //Sort by folder before file, then by name
  const orderedTree = Object.keys(unsorted)
    .sort((a, b) => {
      let a_pinned = unsorted[a].pinned || false;
      let b_pinned = unsorted[b].pinned || false;
      if (a_pinned != b_pinned) {
        if (a_pinned) {
          return -1;
        } else {
          return 1;
        }
      }

      const a_is_note = a.indexOf(".md") > -1;
      const b_is_note = b.indexOf(".md") > -1;

      if (a_is_note && !b_is_note) {
        return 1;
      }

      if (!a_is_note && b_is_note) {
        return -1;
      }

      const aNum = parseFloat(a.match(/^\d+(\.\d+)?/));
      const bNum = parseFloat(b.match(/^\d+(\.\d+)?/));

      const a_is_num = !isNaN(aNum);
      const b_is_num = !isNaN(bNum);

      if (a_is_num && b_is_num && aNum != bNum) {
        return aNum - bNum; 
      }

      if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
      }

      return -1;
    })
    .reduce((obj, key) => {
      obj[key] = unsorted[key];
      return obj;
    }, {});

  for (const key of Object.keys(orderedTree)) {
    if (orderedTree[key].isFolder) {
      orderedTree[key] = sortTree(orderedTree[key]);
    }
  }

  return orderedTree;
};

/**
 * Recursively find all .md files under a directory.
 */
function walkDir(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    if (fs.statSync(fullPath).isDirectory()) {
      results = results.concat(walkDir(fullPath));
    } else if (entry.endsWith(".md")) {
      results.push(fullPath);
    }
  }
  return results;
}

/**
 * Extract metadata from a note file by reading its front matter directly.
 * No dependency on Eleventy collections or template.read().
 */
function getPermalinkMetaFromFS(filePath) {
  let permalink = "/";
  const relativePath = path.relative(NOTES_DIR, filePath).replace(/\\/g, "/");
  const parts = relativePath.split("/");
  let name = parts[parts.length - 1].replace(/\.md$/, "");
  let noteIcon = process.env.NOTE_ICON_DEFAULT;
  let hide = false;
  let pinned = false;
  let folders = null;

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const frontMatter = matter(fileContent);
    const data = frontMatter.data;

    if (data.permalink) {
      permalink = data.permalink;
    }
    if (data.tags) {
      const tags = Array.isArray(data.tags) ? data.tags : [data.tags];
      if (tags.indexOf("gardenEntry") !== -1) {
        permalink = "/";
      }
    }
    if (data.title) {
      name = data.title;
    }
    if (data.noteIcon) {
      noteIcon = data.noteIcon;
    }
    if (data.hide) {
      hide = data.hide;
    }
    if (data.pinned) {
      pinned = data.pinned;
    }
    if (data["dg-path"]) {
      folders = data["dg-path"].split("/");
    } else {
      folders = relativePath.split("/");
    }
    folders[folders.length - 1] += folders[folders.length - 1].endsWith(".md") ? "" : ".md";
  } catch {
    //ignore
  }

  return [{ permalink, name, noteIcon, hide, pinned }, folders];
}

function assignNested(obj, keyPath, value) {
  let lastKeyIndex = keyPath.length - 1;
  for (var i = 0; i < lastKeyIndex; ++i) {
    let key = keyPath[i];
    if (!(key in obj)) {
      obj[key] = { isFolder: true };
    }
    obj = obj[key];
  }
  obj[keyPath[lastKeyIndex]] = value;
}

/**
 * Build the file tree by scanning the filesystem directly.
 * Runs once per build via addGlobalData — no collections dependency.
 */
function buildFileTree() {
  const tree = {};
  const noteFiles = walkDir(NOTES_DIR);

  for (const filePath of noteFiles) {
    const [meta, folders] = getPermalinkMetaFromFS(filePath);
    if (folders) {
      assignNested(tree, folders, { isNote: true, ...meta });
    }
  }

  return sortTree(tree);
}

exports.buildFileTree = buildFileTree;
