export default {
  name: 'landing',
  type: 'document',
  title: 'Landing pages',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      required: true,
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing'
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
