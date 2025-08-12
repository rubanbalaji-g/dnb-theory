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


function transformImage(src, cls, alt, sizes, widths = ["500", "700", "auto"]) {
  let options = {
    widths: widths,
    formats: ["webp", "jpeg"],
    outputDir: "./dist/img/optimized",
    urlPath: "/img/optimized",
  };
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

  eleventyConfig.addPlugin(faviconsPlugin, {});
  eleventyConfig.addPlugin(tocPlugin, {
    tags: ["h2", "h3", "h4"],
    wrapper: "div",
  });
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy("./src/site/styles/style.css");
  eleventyConfig.addPassthroughCopy("./src/site/img");
  eleventyConfig.addPassthroughCopy("./src/site/js");
  eleventyConfig.addPassthroughCopy("./src/site/admin");

  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {
      return htmlMinifier.minify(content, {
        removeComments: true,
        collapseWhitespace: true,
        useShortDoctype: true,
      });
    }
    return content;
  });

  eleventyConfig.addFilter("slugify", (str) => {
    return slugify(str);
  });
  eleventyConfig.addFilter("headerToId", (str) => {
    return headerToId(str);
  });
  eleventyConfig.addFilter("getPostImage", (post) => {
    if (post.data.cover) {
      const images = transformImage(
        `./src/site/${post.data.cover}`,
        "cover",
        post.data.title,
        "(max-width: 500px) 100vw, 500px",
        [500, 700]
      );
      return images;
    }
    return false;
  });

  eleventyConfig.addCollection("posts", (collection) => {
    return collection.getFilteredByGlob("./src/site/notes/**/*.md");
  });
  eleventyConfig.addCollection("garden", (collection) => {
    return collection
      .getFilteredByGlob("./src/site/notes/**/*.md")
      .filter((item) => {
        return item.data.tags && item.data.tags.indexOf("gardenEntry") != -1;
      });
  });

  eleventyConfig.addShortcode(
    "image",
    function (src, cls, alt, sizes, widths) {
      const metadata = transformImage(src, cls, alt, sizes, widths);
      let imageAttributes = {
        class: cls,
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
      };
      return Image.generateHTML(metadata, imageAttributes);
    }
  );

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
    .use(require("markdown-it-plantuml"))
    .use(namedHeadingsFilter)
    // ==================================================================
    //  THE FINAL, CORRECTED MERMAID RULE
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
            // This regex finds text inside [], (), {}, or ""
            const labelRegex = /(\[|\(|\{|").*?(\]|\)|\}|")/g;
            
            // Use .replace() with a replacer function, which is the correct way to handle this.
            return line.replace(labelRegex, (fullLabel) => {
              // `fullLabel` is now guaranteed to be a string, e.g., "[Some long text]"
              const innerText = fullLabel.substring(1, fullLabel.length - 1);
              const wrappedText = autoWrapText(innerText);
              return `${fullLabel[0]}${wrappedText}${fullLabel[fullLabel.length - 1]}`;
            });
          });

          code = processedLines.join('\n');
          return `<pre class="mermaid">${code}</pre>`;
        }

        if (token.info === "transclusion") {
          const code = token.content.trim();
          const { innerHTML } = getAnchorAttributes(code);
          if (innerHTML === code) {
            const { attributes } = getAnchorAttributes(code, "");
            return `<div class="transclusion internal-link" ${Object.keys(
              attributes
            )
              .map((key) => `${key}="${attributes[key]}"`)
              .join(" ")}></div>`;
          }
          let content = parse(innerHTML).innerHTML;
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

  eleventyConfig.setLibrary("md", markdownLib);
  userEleventySetup(eleventyConfig);

  return {
    dir: {
      input: "src/site",
      output: "dist",
    },
    passthroughFileCopy: true,
  };
};
