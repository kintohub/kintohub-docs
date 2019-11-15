---
title: Preact Example
sidebar_label: Preact PWA
---
## Overview
Preact is a fast 3kB alternative to React with the same modern API.

[Live Example](https://preact-example-1d0d2-8caf9.web.master.kintohub.com/)

__About KintoHub:__

KintoHub aligns teams to ship & operate cloud native apps with ease. [Learn More](https://www.kintohub.com)

## Deployment
1. Apply this template to your [Github](https://github.com/kintohub/preact-example/generate)
2. Connect your GithubApp to KintoHub.
3. Create a [Static Website from Build](https://docs.kintohub.com/docs/kintoblocks/websites) on KintoHub and select the Repository you just generated on your account.
4. Set the **name** of your kinto block
5. Choose `Node.js` as the **language** and `13.1-alpine` as the **version**
6. Set the **Build Command** as `npm install && npm run build`
7. Set the **Build Folder** as `/build`

You're now good to go! Click **Create Website** and then on your Master branch click `Build Latest Commit`.

Once complete, Click  Now click `Add To Project`.
And now you're ready to go live Click `Deploy` and once done -> you can view your website by clicking `Open`

## Installation & Local Run

``` bash
# Installs dependencies
npm install
# Runs `serve` or `dev`, depending on `NODE_ENV` value. Defaults to `dev server`
npm run start
# Run a development, HMR server
npm run dev
# Run a production-like server
npm run serve
# Production-ready build
npm run build
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

## Test

```bash
# Pass TypeScript files using TSLint
npm run lint
# Run Jest and [`preact-render-spy`](https://github.com/mzgoddard/preact-render-spy) for your tests
npm run test
```

## What's Next?

You can do a lot with KintoHub and your deployed application. Some helpful links for next steps that you may consider with this project.

* [Creating multiple environments](https://docs.kintohub.com/docs/projects/environments)

Happy coding!