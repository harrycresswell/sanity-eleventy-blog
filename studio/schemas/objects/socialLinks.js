export default {
  name: 'socialLinks',
  type: 'object',
  title: 'Social Links',
  fields: [
    {
      name: 'website',
      type: 'url',
      title: 'Website',
      description: 'Add a website URL.'
    },
    {
      name: 'twitter',
      type: 'string',
      title: 'Twitter',
      description: 'Add a Twitter handle e.g. @seedtribe.'
    },
    {
      name: 'instagram',
      type: 'string',
      title: 'Instagram',
      description: 'Add an Instagram handle e.g. @seedtribe.'
    },
    {
      name: 'linkedIn',
      type: 'url',
      title: 'LinkedIn',
      description: 'Add a LinkedIn URL.'
    }
  ]
}
