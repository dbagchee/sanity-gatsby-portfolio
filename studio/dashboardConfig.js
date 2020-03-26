export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e7ccce986e15d02244f2cc4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-bmrans87',
                  apiId: 'aa96388f-92a9-4cd6-bf2a-c31d6c4cc5f4'
                },
                {
                  buildHookId: '5e7ccce9fb20fd01edcfb439',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-kay6arib',
                  apiId: 'ee89a6e7-37db-44bc-8484-845f8a54907f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dbagchee/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-kay6arib.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
