export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Product Name'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Product Description'
    },
    {
      name: 'image',
      title: 'Product Image',
      type: 'figure'
    }
  ]
}
