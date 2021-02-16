export default {
  name: 'pageBuilderBodyText',
  type: 'object',
  title: 'Body Text',
  fields: [
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body'
    }
  ],
  preview: {
    select: {
      title: '_type'
    }
  }
}
