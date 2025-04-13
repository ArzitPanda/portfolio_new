export default {
    name: 'work',
    title: 'Work Experience',
    type: 'document',
    fields: [
      {
        name: 'company_name',
        title: 'Company Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'title',
        title: 'Title / Role',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'startdate',
        title: 'Start Date',
        type: 'string', // You can also use 'date' if you want ISO date support
        validation: Rule => Rule.required()
      },
      {
        name: 'enddate',
        title: 'End Date',
        type: 'string', // Same here, use 'date' if needed
        validation: Rule => Rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 5,
        validation: Rule => Rule.required()
      }
    ]
  }
  