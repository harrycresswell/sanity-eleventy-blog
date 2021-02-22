import {MdComment} from 'react-icons/md'

export default {
  name: 'quote',
  type: 'object',
  title: 'Quote',
  icon: MdComment,
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Quote text'
    },
    {
      name: 'citation',
      type: 'string',
      title: 'Quote citation',
      description: 'Add an optional citation'
    }
  ]
}
