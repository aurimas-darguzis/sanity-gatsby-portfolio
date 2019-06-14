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
                  buildHookId: '5d036b74e2e036a986bc2a01',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-v34r4iso',
                  apiId: '0d11a450-20cf-492e-b690-8e8ae46f1351'
                },
                {
                  buildHookId: '5d036b7483c1f8808389060b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-f7hu6dcv',
                  apiId: 'bafb7ec9-ac31-4903-9f0a-bacdcf364df5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aurimas-darguzis/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-f7hu6dcv.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
