/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: 'img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true
  }
]

const GITHUB_URL = `https://github.com/kintohub/kintohub-docs`;

const siteConfig = {
  title: 'Help Center' /* title for your website */,
  tagline: 'Microservices made simple',
  url: 'https://kintohub.com' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'Kintohub Docs',
  disableHeaderTitle: true,
  headerLinks: [{ doc: 'getting-started', label: 'Docs' }],
  // algolia: {
  //   apiKey: "waiting-for-email",
  //   indexName: "waiting-for-email"
  // },
    // { search: true }
  users,
  headerIcon: 'img/kintohub-title-text.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
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
  onPageNav: 'separate'
}

module.exports = siteConfig
