import {MdSubject} from 'react-icons/md'

export default {
  name: 'pageBuilderBodyText',
  type: 'object',
  title: 'Body Text',
  icon: MdSubject,
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
