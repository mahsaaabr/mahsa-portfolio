// schema.js

export default {
    name: 'workExperience',
    title: 'Work Experience',
    type: 'document',
    fields: [
      {
        name: 'startDate',
        title: 'Start Date',
        type: 'date',
      },
      {
        name: 'endDate',
        title: 'End Date',
        type: 'date',
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
          name: 'company',
          title: 'Company',
          type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
    ],
  };
  