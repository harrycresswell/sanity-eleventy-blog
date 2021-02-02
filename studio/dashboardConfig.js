export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60197196709efe00c16d6345',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-4o1bad9i',
                  apiId: '9422785c-e9e7-44d6-8294-803fcb8b3fdc'
                },
                {
                  buildHookId: '6019719680f3ee008bbf175a',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-fkjou8vw',
                  apiId: '2b042c7e-4825-45a3-8c74-8cd1bfe00a27'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/harrycresswell/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-fkjou8vw.netlify.app', category: 'apps'}
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
