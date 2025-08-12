const slugify = require("@sindresorhus/slugify");
const markdownIt = require("markdown-it");
const fs = require("fs");
const matter = require("gray-matter");
const faviconsPlugin = require("eleventy-plugin-gen-favicons");
const tocPlugin = require("eleventy-plugin-nesting-toc");
const { parse } = require("node-html-parser");
const htmlMinifier = require("html-minifier-terser");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const { headerToId, namedHeadingsFilter } = require("./src/helpers/utils");
const {
  userMarkdownSetup,
  userEleventySetup,
} = require("./src/helpers/userSetup");
const Image = require("@11ty/eleventy-img");


// ==================================================================
//  1. NEW HELPER FUNCTION TO AUTOMATICALLY WRAP TEXT
// ==================================================================
/**
 * Wraps long text with <br> tags for Mermaid.js.
 * @param {string} text The text to wrap.
 * @param {number} maxWidth The maximum number of characters per line. You can change this value.
 * @returns {string} The wrapped text.
 */
function autoWrapText(text, maxWidth = 30) {
  if (!text) {
    return text;
  }
  if (text.length <= maxWidth) {
    return text;
  }
  const words = text.split(' ');
  let currentLine = '';
  const lines = [];

  for (const word of words) {
    if ((currentLine + ' ' + word).trim().length > maxWidth) {
      lines.push(currentLine.trim());
      currentLine = word;
    } else {
      currentLine = (currentLine + ' ' + word).trim();
    }
  }
  if (currentLine) {
    lines.push(currentLine.trim());
  }
  return lines.join('<br>');
}


function transformImage(src, cls, alt, sizes, widths = ["500", "700", "auto"]) {
  let options = {
    widths: widths,
    formats: ["webp", "jpeg"],
    outputDir: "./dist/img/optimized",
    urlPath: "/img/optimized",
  };
  // generate images, while this is async we don’t wait
  Image(src, options);
  let metadata = Image.statsSync(src, options);
  return metadata;
}

function getAnchorLink(filePath, linkTitle) {
  const { attributes, innerHTML } = getAnchorAttributes(filePath, linkTitle);
  return `<a ${Object.keys(attributes)
    .map((key) => `${key}="${attributes[key]}"`)
    .join(" ")}>${innerHTML}</a>`;
}

function getAnchorAttributes(filePath, linkTitle) {
  let fileName = filePath.replaceAll("&", "&");
  let header = "";
  let headerLinkPath = "";

  if (filePath.includes("#")) {
    [fileName, header] = filePath.split("#");
    headerLinkPath = `#${headerToId(header)}`;
  }

  let noteIcon = process.env.NOTE_ICON_DEFAULT;
  const title = linkTitle ? linkTitle : fileName;
  let permalink = `/notes/${slugify(filePath)}`;
  let deadLink = false;

  try {
    const startPath = "./src/site/notes/";
    const fullPath = fileName.endsWith(".md")
      ? `${startPath}${fileName}`
      : `${startPath}${fileName}.md`;

    const file = fs.readFileSync(fullPath, "utf8");
    const frontMatter = matter(file);
    if (frontMatter.data.permalink) {
      permalink = frontMatter.data.permalink;
    }
    if (
      frontMatter.data.tags &&
      frontMatter.data.tags.indexOf("gardenEntry") != -1
    ) {
      permalink = "/";
    }
    if (frontMatter.data.noteIcon) {
      noteIcon = frontMatter.data.noteIcon;
    }
  } catch {
    deadLink = true;
  }

  if (deadLink) {
    return {
      attributes: {
        class: "internal-link is-unresolved",
        href: "/404",
        target: "",
      },
      innerHTML: title,
    };
  }

  return {
    attributes: {
      class: "internal-link",
      target: "",
      "data-note-icon": noteIcon,
      href: `${permalink}${headerLinkPath}`,
    },
    innerHTML: title,
  };
}

const tagRegex = /(^|\s|>)(#[^\s!@#$%^&*()=+,.[{\]};:'"?><]+)(?!([^<]*>))/g;

module.exports = function (eleventyConfig) {
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
  });

  let markdownLib = markdownIt({
    breaks: true,
    html: true,
    linkify: true,
  })
    .use(require("markdown-it-anchor"), {
      slugify: headerToId,
    })
    .use(require("markdown-it-mark"))
    .use(require("markdown-it-footnote"))
    .use(function (md) {
      md.renderer.rules.hashtag_open = function (tokens, idx) {
        return '<a class="tag" href="/tags/{{ token.content | slugify }}">#{{ token.content }}</a>';
      };
    })
    .use(require("markdown-it-mathjax3"), {
      tex: {
        inlineMath: [["$", "$"]],
      },
      options: {
        skipHtmlTags: { "[-]": ["pre"] },
      },
    })
    .use(require("markdown-it-attrs"))
    .use(require("markdown-it-task-checkbox"), {
      disabled: true,
      divWrap: false,
      divClass: "checkbox",
      idPrefix: "cbx_",
      ulClass: "task-list",
      liClass: "task-list-item",
    })
    .use(require("markdown-it-plantuml"), {
      openMarker: "```
      closeMarker: "```",
    })
    .use(namedHeadingsFilter)
    // ==================================================================
    //  2. UPDATED MERMAID RULE WITH AUTO-WRAPPING LOGIC
    // ==================================================================
    .use(function (md) {
      const origFenceRule =
        md.renderer.rules.fence ||
        function (tokens, idx, options, env, self) {
          return self.renderToken(tokens, idx, options, env, self);
        };
      md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
        const token = tokens[idx];
        if (token.info === "mermaid") {
          // --- START: Auto-wrapping logic ---
          let code = token.content.trim();
          const lines = code.split('\n');
          const processedLines = lines.map(line => {
            // Regex to find text inside quotes, brackets, or braces
            const match = line.match(/(?<=("|\{|\[|\()).*(?=("|\}|\]|\)))/);
            if (match && match[0]) {
              const originalText = match[0];
              // Use the helper function to wrap the text
              const wrappedText = autoWrapText(originalText);
              return line.replace(originalText, wrappedText);
            }
            return line;
          });
          code = processedLines.join('\n');
          // --- END: Auto-wrapping logic ---
          return `<pre class="mermaid">${code}</pre>`;
        }

        // --- PRESERVING YOUR ORIGINAL TRANSLUSION LOGIC ---
        if (token.info === "transclusion") {
          const code = token.content.trim();
          const { innerHTML } = getAnchorAttributes(code);
          /*This is a hack because the plugin I am using does not support transclusion that are empty.
          But I need the empty ones to get the data-note-icon attribute.
          So I check if the returned value is an empty link, and if it is, I return an empty div with the data attribute*/
          if (innerHTML === code) {
            const { attributes } = getAnchorAttributes(code, "");
            return `<div class="transclusion internal-link" ${Object.keys(
              attributes
            )
              .map((key) => `${key}="${attributes[key]}"`)
              .join(" ")}></div>`;
          }

          let content = parse(innerHTML).innerHTML;

          /*This is a hack for the same reason. If the transcluded file has only a frontmatter and no content, I get a link to an empty page.
          I am removing the link, and keeping the div with the data attributes.
          This is to get the data-note-icon attribute */
          if (content === "\n<p><a class=\"internal-link\"></a></p>\n") {
            content = "";
          }
          let contentDiv = content ? `<div class="transclusion-content">${content}</div>` : "";
          return `<div class="transclusion internal-link"><a class="transclusion-link" href="${getAnchorAttributes(code).attributes.href
            }">${code}</a>${contentDiv}</div>`;
        }
        return origFenceRule(tokens, idx, options, env, slf);
      };
    });

  // This is the line that actually tells Eleventy to use the markdown-it instance we configured above
  eleventyConfig.setLibrary("md", markdownLib);

  // ... (the rest of your original configuration continues here) ...
};
