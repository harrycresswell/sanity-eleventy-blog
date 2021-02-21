export default {
  name: 'home',
  type: 'document',
  title: 'Homepage',
  fields: [
    {
      name: 'headline',
      type: 'string',
      title: 'Headline',
      description: 'The headline should be catchy, descriptive, and not too long'
    },
    {
      name: 'sections',
      type: 'array',
      title: 'Sections',
      of: [
        {type: 'pageBuilderBodyText'},
        {type: 'video'},
        {type: 'mainImage'},
        {type: 'teamGrid'},
        {type: 'quote'},
        {type: 'posts'},
        {type: 'gallery'}
      ]
    }
  ]
}
