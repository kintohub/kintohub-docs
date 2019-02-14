---
title: Getting Started
---

## Hi there - welcome to KintoHub!

This start-to-finish guide will walk you through creating a first microservice from scratch and getting it up and running on KintoHub. It should take you about 15-30min. Have fun!


## Hello World

Getting  your app working with KintoHub is minimal. Here is a sample compatible node app
```javascript
/**
 * @api {get} /hello hello world sample request
 * @apiName Sample
 */
app.get('/hello', (req, res) =>
  res.send({
    message: 'Hello World'
  })
)
```
## Getting your code ready for KintoHub - overview

Preparing your code to have it effortlessly work on KintoHub is very straightforward - here is a high-level of what it entails:

1. Your code must be on GitHub
2. Your code must have `Dockerfile`
   * the command used to run the production version must be exposed in `Dockerfile` using `EXPOSE`
3. The service must be listening to port `80` for production

> if you have to specify a hostname for the framework/library that you are using, please use 0.0.0.0. localhost and note that 127.0.0.1 won't work

Now, let's get to the nitty-gritty of it by creating your first KintoBlock.

## Build your first Microservice (NodeJs) on Github - detailed

_You can find the source code [here](http://github.com/kintohub/node-examples)_

> Please note that at this moment we only support node version 8.9.4

Let us create a simple hello world microservice locally and see how we would move that to a KintoHub to deploy and host it.

### Initialize git and npm

We will start by initializing our `package.json` and install `express` _(v4.16.3)_ by doing the following

```bash
node -v # must be 8.9.4
npm init -y
npm install express
```

initialize as a git repo by running `git init`

> don't forget to create `.gitignore` and add `node_modules`

Finally, create a new repository in GitHub, there are steps on how to connect to an existing repository in Github after you create one.

### Create a simple hello world service

create `index.js` and add the following

```javascript
const express = require('express')
const app = express()
const PORT = process.env.PORT || '8000'

app.get('/sample/:message', (req, res) =>
  res.send({
    data: 'Hello World',
    output: req.params.message
  })
)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
```

This is a really simple app that listens to `/sample/:message` and returns dummy result.

next is modifying `package.json` and add two scripts for running the service on local and prod

```
{
  ...
  "scripts": {
    "start": "node index.js",
    "prod": "PORT=80 node index.js"
  }
}
```

the difference is `npm start` now will run the app on port `8000` but `npm run prod` will run it on port `80`

## Create a Kintoblock on KintoHub from the service we just created

_For more details and screenshots about creating KintoBlocks read more [here](kintoblocks.md#creating-a-kintoblock)_

By this point, you should already have a GitHub repository that is compatible with KintoHub

Next step is connecting your workspace to your GitHub account. Go to edit workspace and click on connect GitHub button.

Now go to create Kintoblock page. Add a Kintoblock name _(name must be unique across all accounts)_, choose an existing repository and select the repository you just created. Set protocol to `HTTP` and language to `Node.js`.

> For the rest of the guide we are going to assume the name is _`nodeexample`_

> endpoints are going to be in the following format **https://api.kintohub.com/{microservicename}**

> Kintoblocks can't be accessed directly. To access them we will need to deploy them through Applications. Therefore, if you tried to go to `https://api.kintohub.com/nodeexample/sample/hello` you will get an error.

### Tag Latest Commit

_For more details and screenshots about tagging latest commit read more [here](kintoblocks.md#tagging-a-commit)_

After creating the Kintoblock, when you are in the Kintoblock manage page, navigate to the branch that you added your code to. And go to the **Commits** section.

Make sure that the last commit you had is in recent commits and wait until it successfully builds. _(Clicking the "Refresh Latest" button will grab an updated commit list)_.

After it successfully builds click `Tag Latest Commit` this allows you to add a tag to that commit _(similar to how git works)_ so you can select that particular tag when you are building an Application (before deploying it).

## Create an Application

_For more details and screenshots about creating an Application read more [here](creating-an-application.md)_

We need to finally create a Application that includes `nodeexample`

> Applications can't live by themselves you must add kintoblocks for them to work

Go to create Application page. Add a name and description. in the dependencies section search and select `nodeexample`. update the selector on the right to be the latest tag we just created.

Click `Save Changes`

### Tag and Deploy

_For more details and screenshots about tagging and deploying Applications read more [here](tagging-and-deploying.md)_

after hitting `Save Changes` it should change to `Tag and Deploy`. tagging and deploying will bring our app online, let's click it and select the default `master` environment and add a version for the app _(Application version is not related to kintoblock version)_. After clicking Create now we have a live version that we can access

## Accessing the endpoints

All endpoints are private by default. After deploying to the `master` environment go to the edit page to that environment.

you will find `CLIENT ID` and `SECRET KEY` these are unique to each environment. you will need to auth first with them and get a token, that token will allow you to call the microservices inside that app

The endpoint for authenticating the env is

```
POST https://api.kintohub.com/authorize
```

> We are going to use cURL for testing the endpoints

calling `/auth` and passing it the client and secret should return a token

```bash
curl -H "Content-Type: application/json" -X POST -d '{"clientId":"<clientId>","clientSecret":"<clientSecret>"}' https://api.kintohub.com/authorize
```

**returns**

```
{
    "data": {
        "token": "<token>"
    }
}
```

if we used that token and pass it as an Authorization header when we call any Kintoblock inside that Application it should work _(need to add 'Bearer' before the actual token)_

Finally, the following should work

```bash
curl -H "Authorization: Bearer <token>" https://api.kintohub.com/nodeexample/sample/hello
```

Should return

```
{
    "data": "Hello World",
    "output": "hello"
}
```

### Related Articles

* [FAQ](https://www.kintohub.com/faqs/)
