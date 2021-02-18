export default {
  name: 'socialLinks',
  type: 'object',
  title: 'Social Links',
  fields: [
    {
      name: 'facebook',
      type: 'url',
      title: 'Facebook',
      description: 'Add a Facebook URL. For example, https://www.facebook.com/BuxtonThreeTwo'
    },
    {
      name: 'twitter',
      type: 'string',
      title: 'Twitter',
      description: 'Add a Twitter URL. For example, https://twitter.com/BuxtonThreeTwo'
    },
    {
      name: 'instagram',
      type: 'string',
      title: 'Instagram',
      description: 'Add an Instagram URL. For example, https://www.instagram.com/buxtonthreetwo/'
    },
    {
      name: 'linkedIn',
      type: 'url',
      title: 'LinkedIn',
      description: 'Add a LinkedIn URL. For example, https://www.linkedin.com/company/buxtonthreetwo/'
    }
  ]
}
