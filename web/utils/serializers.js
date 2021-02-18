const imageUrl = require('./imageUrl')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')


// Learn more on https://www.sanity.io/guides/introduction-to-portable-text
module.exports = {
  types: {
    authorReference: ({node}) => `[${node.name}](/authors/${node.slug.current})`,
    code: ({node}) =>
      '```' + node.language + '\n' + node.code + '\n```',
    mainImage: ({node}) => `![${node.alt}](${imageUrl(node).width(600).url()})`,
    video: ({node}) => `
      ${node.videoLabel}
      ${node.url}
    `,
    pageBuilderBodyText: ({node}) => `${BlocksToMarkdown(node.body)}`
  }
}
