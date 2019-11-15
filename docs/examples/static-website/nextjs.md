---
title: NextJs Example
sidebar_label: NextJs
---
## Overview
[Next.js](https://github.com/zeit/next.js/) is a framework that most notably allows you to write server-rendered React apps easily – amongst other cool things.
This particular example rolls around using nextjs with [React](https://reactjs.org/) and [Apollo graphql](https://www.apollographql.com/)

[Live Example](https://next-apollo-example-1d0d2-8caf9.web.master.kintohub.com/)

__About KintoHub:__

KintoHub aligns teams to ship & operate cloud native apps with ease. [Learn More](https://www.kintohub.com)

## Deployment
1. Apply this template to your [Github](https://github.com/kintohub/preact-example/generate)
2. Connect your GithubApp to KintoHub.
3. Create a [Website Block](https://docs.kintohub.com/docs/kintoblocks/websites) on KintoHub and select the Repository you just generated on your account.
4. Select **Dynamic Web App**
5. Set the **name** of your kinto block
6. Choose `Node.js` as the **language** and `13.1-alpine` as the **version**
7. Set the **Build Command** as `npm install && npm run build`
8. Set the **Port** as `3000`

You're now good to go! Click **Create Website** and then on your Master branch click `Build Latest Commit`.

Once complete, Click  Now click `Add To Project`.
And now you're ready to go live Click `Deploy` and once done -> you can view your website by clicking `Open`

## Installation & Local Run

``` bash
# Installs dependencies
npm install
# builds a production server. run it before running npm start
npm run build
# Runs production server
npm start
# Run a development server
npm run dev
```
[Apollo](https://www.apollographql.com/client/) is a GraphQL client that allows you to easily query the exact data you need from a GraphQL server. In addition to fetching and mutating data, Apollo analyzes your queries and their results to construct a client-side cache of your data, which is kept up to date as further queries and mutations are run, fetching more results from the server.

This example relies on [graph.cool](https://www.graph.cool) for its GraphQL backend.

## What's Next?

You can do a lot with KintoHub and your deployed application. Some helpful links for next steps that you may consider with this project.

* [Creating multiple environments](https://docs.kintohub.com/docs/projects/environments)

Happy coding!