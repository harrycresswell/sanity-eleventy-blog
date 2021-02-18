const { DateTime } = require("luxon");
const util = require('util')
const CleanCSS = require("clean-css");
const urlFor = require('./utils/imageUrl');
const BlocksToHtml = require('@sanity/block-content-to-html')
const client = require('./utils/sanityClient.js')

module.exports = function(eleventyConfig) {

  // https://www.sanity.io/guides/how-to-add-promotional-images-to-the-11ty-blog-starter
  eleventyConfig.addShortcode('imageUrlFor', (image, width="400") => {
    return urlFor(image)
      .width(width)
      .auto('format')
  })

  eleventyConfig.addShortcode('croppedUrlFor', (image,width,height) => {
    return urlFor(image)
      .width(width)
      .height(height)
      .auto('format')
  })

  // Turn block to HTML from inside templates (only way I could make it work)
  // https://github.com/sanity-io/block-content-to-html
  eleventyConfig.addShortcode('blockToHtml', (block) => {
    const h = BlocksToHtml.h

    const serializers = {
      types: {
        code: props => (
          h('pre', {className: props.node.language},
            h('code', props.node.code)
          )
        )
      }
    }

    return BlocksToHtml({ 
      blocks: block, 
      serializers: serializers, 
      ...client.config() 
    })
  })

  // Make Liquid capable of rendering "partials"
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true,
  });

  // https://www.11ty.io/docs/quicktips/inline-css/
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter("debug", function(value) {
    return util.inspect(value, {compact: false})
   });

   eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toDateString()
  });

  // Log data to the terminal, like {{ article | log }} see: https://www.seanmcp.com/articles/logging-with-eleventy-and-nunjucks/
  eleventyConfig.addFilter('log', value => {
      console.log(value)
  })

  // Prints JSON to the page. Useful inside templates
  eleventyConfig.addShortcode(
    'debug',
    (value) =>
      `<div style="display: block;">
        <pre style="padding: 100px 0; font-size: 14px; font-family: monospace;">
        ${JSON.stringify(value, null, 2,)}
        </pre>
      </div>`,
  )

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  let markdownIt = require("markdown-it");
  let markdownItAnchor = require("markdown-it-anchor");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let opts = {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#"
  };

  eleventyConfig.setLibrary("md", markdownIt(options)
    .use(markdownItAnchor, opts)
  );

  eleventyConfig.addFilter("markdownify", function(value) {
    const md = new markdownIt(options)
    return md.render(value)
  })
  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid"
    ],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
}
