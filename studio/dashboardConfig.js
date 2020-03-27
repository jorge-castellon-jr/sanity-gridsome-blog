export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7e105359d451018aed7d0f',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-p3r935tq',
                  apiId: 'cf1a204b-2cd8-4545-89be-08e44627883b'
                },
                {
                  buildHookId: '5e7e1053317e61017a4750e3',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-6vz54bh2',
                  apiId: 'fe12c466-9a95-4ec0-ad95-18e2bf62a8e9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jorge-castellon-jr/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-6vz54bh2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
