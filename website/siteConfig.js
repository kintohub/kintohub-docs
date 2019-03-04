const GITHUB_URL = `https://github.com/kintohub/kintohub-docs`

const siteConfig = {
  title: 'KintoHub Docs',
  tagline: 'Microservices made simple',
  url: 'https://kintohub.com' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'KintoHub Docs',
  disableHeaderTitle: true,
  headerLinks: [],
  algolia: {
    apiKey: process.env.ALGOLIA_API_KEY,
    indexName: process.env.ALGOLIA_INDEX
  },
  headerIcon: 'img/kintohub-title-text.svg',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#22424b',
    secondaryColor: '#205C3B'
  },
  editUrl: `${GITHUB_URL}/edit/master/docs/`,
  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' KintoHub. All rights reserved',
  organizationName: 'kintohub',
  projectName: 'kintohub-docs',
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default'
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/kintohub/kintohub-docs',
  /* On page navigation for the current documentation page */
  onPageNav: 'separate',
  cname: 'docs.kintohub.com',
  docsSideNavCollapsible: true,
  cleanUrl: true
}

module.exports = siteConfig
