const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const NOTES_DIR = path.resolve(__dirname, "../site/notes");

const wikiLinkRegex = /\[\[(.*?\|.*?)\]\]/g;
const internalLinkRegex = /href="\/(.*?)"/g;

function extractLinks(content) {
  return [
    ...(content.match(wikiLinkRegex) || []).map(
      (link) =>
        link
          .slice(2, -2)
          .split("|")[0]
          .replace(/.(md|markdown)\s?$/i, "")
          .replace("\\", "")
          .trim()
          .split("#")[0]
    ),
    ...(content.match(internalLinkRegex) || []).map(
      (link) =>
        link
          .slice(6, -1)
          .split("|")[0]
          .replace(/.(md|markdown)\s?$/i, "")
          .replace("\\", "")
          .trim()
          .split("#")[0]
    ),
  ];
}

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
 * Build the graph by scanning the filesystem directly.
 * Runs once per build via addGlobalData — no collections dependency.
 */
function buildGraph() {
  let nodes = {};
  let links = [];
  let stemURLs = {};
  let homeAlias = "/";

  const noteFiles = walkDir(NOTES_DIR);

  for (let idx = 0; idx < noteFiles.length; idx++) {
    const filePath = noteFiles[idx];
    const relativePath = path.relative(NOTES_DIR, filePath).replace(/\\/g, "/");
    // fpath mirrors what the collection-based code did: v.filePathStem.replace("/notes/", "")
    const fpath = relativePath.replace(/\.md$/, "");
    const parts = fpath.split("/");
    let group = "none";
    if (parts.length >= 3) {
      group = parts[parts.length - 2];
    }
    const fileSlug = parts[parts.length - 1];

    let fileContent;
    try {
      fileContent = fs.readFileSync(filePath, "utf8");
    } catch {
      continue;
    }

    const frontMatter = matter(fileContent);
    const data = frontMatter.data;
    const content = frontMatter.content || "";

    const tags = data.tags
      ? (Array.isArray(data.tags) ? data.tags : [data.tags])
      : [];
    const isGardenEntry = tags.indexOf("gardenEntry") > -1;
    const isHome = data["dg-home"] || isGardenEntry || false;

    // Compute URL: use permalink from front matter, or Eleventy default
    let url;
    if (isGardenEntry) {
      url = "/";
    } else if (data.permalink) {
      url = data.permalink;
    } else {
      // Eleventy default: /<path relative to input dir>/
      url = `/notes/${fpath}/`;
    }

    nodes[url] = {
      id: idx,
      title: data.title || fileSlug,
      url: url,
      group,
      home: isHome,
      outBound: extractLinks(content),
      neighbors: new Set(),
      backLinks: new Set(),
      noteIcon: data.noteIcon || process.env.NOTE_ICON_DEFAULT,
      hide: data.hideInGraph || false,
    };
    stemURLs[fpath] = url;
    if (isHome) {
      homeAlias = url;
    }
  }

  // Resolve links between nodes
  Object.values(nodes).forEach((node) => {
    let outBound = new Set();
    node.outBound.forEach((olink) => {
      let link = (stemURLs[olink] || olink).split("#")[0];
      outBound.add(link);
    });
    node.outBound = Array.from(outBound);
    node.outBound.forEach((link) => {
      let n = nodes[link];
      if (n) {
        n.neighbors.add(node.url);
        n.backLinks.add(node.url);
        node.neighbors.add(n.url);
        links.push({ source: node.id, target: n.id });
      }
    });
  });

  // Convert Sets to Arrays
  Object.keys(nodes).map((k) => {
    nodes[k].neighbors = Array.from(nodes[k].neighbors);
    nodes[k].backLinks = Array.from(nodes[k].backLinks);
    nodes[k].size = nodes[k].neighbors.length;
  });

  return {
    homeAlias,
    nodes,
    links,
    lookup: stemURLs, // Map of fpath (relative path without .md) to URL
  };
}

exports.wikiLinkRegex = wikiLinkRegex;
exports.internalLinkRegex = internalLinkRegex;
exports.extractLinks = extractLinks;
exports.buildGraph = buildGraph;
