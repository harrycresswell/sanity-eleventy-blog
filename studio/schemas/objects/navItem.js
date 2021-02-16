export default {
  name: 'navItem',
  type: 'object',
  title: 'NavItem',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text'
    },
    {
      name: 'navItemUrl',
      type: 'link',
      title: 'Nav Item URL'
    }
  ],
  preview: {
    select: {
      title: 'text',
      text: 'text'
    }
  }
}
