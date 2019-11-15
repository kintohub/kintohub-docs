---
title: React Example
sidebar_label: React
---
## Overview
React is a JavaScript **library** for building user interfaces. It is the view layer for web applications.

[Live Example](https://react-example-1d0d2-8caf9.web.master.kintohub.com/)

__About KintoHub:__

KintoHub aligns teams to ship & operate cloud native apps with ease. [Learn More](https://www.kintohub.com)

## Deployment
1. Apply this template to your [Github](https://github.com/kintohub/react-example/generate)
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
# install dependencies
npm install

# run dev server with hot reload at localhost:3000
npm start

# build for production with minification
npm run build
```

For a detailed explanation on how things work, check out the [guide](https://reactjs.org/).

## Test

```bash
# run all tests
npm test
```

## What's Next?

You can do a lot with KintoHub and your deployed application. Some helpful links for next steps that you may consider with this project.

* [Creating multiple environments](https://docs.kintohub.com/docs/projects/environments)

Happy coding!