export default{
    name:'skills',
    title:'Skills',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string',
        },
        {
            name:'icon',
            title:'Icon',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'proficiency',
            title: 'Proficiency',
            type: 'number',
            options: {
              list: [
                { title: 'Beginner', value: 1 },
                { title: 'Intermediate', value: 2 },
                { title: 'Advanced', value: 3 },
                { title: 'Expert', value: 4 },
              ],
            },
            validation: Rule => Rule.required(),
          },
        
    ],
    description: 'List some of your relevant skills',
    // validation: Rule => Rule.unique().min(1).max(10),
}