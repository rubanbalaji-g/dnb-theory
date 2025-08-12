// All your existing require() statements at the top
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


// The helper function to automatically wrap text
function autoWrapText(text, maxWidth = 30) {
  if (!text) return text;
  if (text.length <= maxWidth) return text;

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

// Your existing helper functions (transformImage, getAnchorLink, etc.) remain here...
function transformImage(src, cls, alt, sizes, widths = ["500", "700", "auto"]) { /*...*/ }
function getAnchorLink(filePath, linkTitle) { /*...*/ }
function getAnchorAttributes(filePath, linkTitle) { /*...*/ }

module.exports = function (eleventyConfig) {
  // All your existing eleventyConfig settings...
  eleventyConfig.setLiquidOptions({ dynamicPartials: true });

  let markdownLib = markdownIt({
    breaks: true,
    html: true,
    linkify: true,
  })
    // All your other .use() plugins...
    .use(require("markdown-it-anchor"), { slugify: headerToId })
    .use(require("markdown-it-mark"))
    .use(require("markdown-it-footnote"))
    .use(function (md) { /* hashtag rule */ })
    .use(require("markdown-it-mathjax3"), { /* mathjax config */ })
    .use(require("markdown-it-attrs"))
    .use(require("markdown-it-task-checkbox"), { /* checkbox config */ })
    .use(require("markdown-it-plantuml"), { /* plantuml config */ })
    .use(namedHeadingsFilter)
    // ==================================================================
    //  THE NEW, CORRECTED MERMAID RULE
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
          let code = token.content.trim();
          const lines = code.split('\n');

          const processedLines = lines.map(line => {
            // This is a more robust regex that finds text inside [], (), {}, or ""
            const labelRegex = /(\[|\(|\{|").*?(\]|\)|\}|")/g;
            const match = line.match(labelRegex);

            if (match) {
              // Extract the full label, e.g., "[Some very long text]"
              const fullLabel = match[0];
              // Get just the text inside, e.g., "Some very long text"
              const innerText = fullLabel.substring(1, fullLabel.length - 1);
              // Wrap the inner text
              const wrappedText = autoWrapText(innerText);

              // Rebuild the full label with the wrapped text
              const newLabel = `${fullLabel[0]}${wrappedText}${fullLabel[fullLabel.length - 1]}`;
              // Replace the old label with the new one in the original line
              return line.replace(fullLabel, newLabel);
            }
            return line;
          });

          code = processedLines.join('\n');
          return `<pre class="mermaid">${code}</pre>`;
        }

        // Your original transclusion logic is preserved
        if (token.info === "transclusion") {
          // ... your existing transclusion code here ...
        }

        return origFenceRule(tokens, idx, options, env, slf);
      };
    });

  eleventyConfig.setLibrary("md", markdownLib);

  // The rest of your Eleventy config file...
};
