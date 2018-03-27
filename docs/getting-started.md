This guide will show you from start to finish how to create a microservice from scratch and get it up and running on Kintohub

## How can my code work on Kintohub

1. your code must be on GitHub
2. your code must have `Dockerfile`
    - the command used to run the production version must be exposed in `Dockerfile` using `EXPOSE`
3. the app must be listening to port `80` for production
4. your code must be documented with our version of [apidoc](apidoc.md)


> if you must specify a hostname for the framework/library that you are using, you must use `0.0.0.0`. `localhost` and `127.0.0.1` won't work


## Creating our first Kintohub (NodeJs)

> at this moment we only support node version  8.9.4

Let us try and create a simple hello world app locally and see how we would move that to a Kintohub

### Initialize git and npm

We will start by initializing our `package.json` and install `express` *(v4.16.3)*
```bash
node -v # must be 8.9.4
npm init -y
npm install express
```

initialize as a git repo by running `git init`

> don't forget to create `.gitignore` and add `node_modules`

Finally, create a new repository in GitHub, there are steps on how to connect to an existing repository in Github after you create one


### Create a simple hello world app

> You can check the source code for that app [here](http://github/kintohub/node-example)

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


This is a really simple app that listens to `/sample/:message` and returns dummy result

let us update our scripts to include two commands for running it on local and production

next is modifying `package.json` and add two scripts for running the app on local and prod

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

### Document the code

you can read more about documenting your code to work with kintohub [here](apidoc.md)

In order for the app to work with Kintohub, you need to document your code in a way that follows apidoc standard

here is the updated `index.js` after documenting it

```javascript
const express = require('express')
const app = express()
const PORT = process.env.PORT || '8000'

/**
 * @api {get} /sample/{id} hello world sample request
 * @apiName GetSample
 * @apiParam (Url) {String} message the message to return
 * @apiSuccess (Success_200) {String} data the hello world data
 * @apiSuccess (Success_200) {String} output what the user entered in the url
 */
app.get('/sample/:message', (req, res) =>
  res.send({
    data: 'Hello World',
    output: req.params.message
  })
)

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
```

The last step is creating a `Dockerfile` that Kintohub needs to understand how to compile and run your app

> you don't need to use docker locally for this

You can read more about `Dockerfile` samples [here](docker-samples.md)

create `Dockerfile` with the following
```
FROM node:8.9.4

RUN mkdir -p app

WORKDIR /app

COPY . /app

RUN npm install

ENV PORT=80

EXPOSE 80

ENTRYPOINT ["npm","run","start"]
```


The interesting part is the last line, you need to update the entry point depending on the project you are using

the only rule that endpoint must
- expose the app on port `80`
- if the hostname is required by the framework/lib then it has to be set to `0.0.0.0`

For our example `npm run prod` is running `PORT=80 node index.js` which satisfies these two requirements


## Create a Kintohub

By this point, you should already have a GitHub repository that is compatible with Kintohub

Next step is connecting your workspace to your GitHub account. Go to edit workspace and click on connect GitHub button.

Now go to create Kintoblock page. Add a Kintoblock name *(name must be unique across all accounts)*, choose an existing repository and select the repository you just created. Set protocol to `HTTP` and language to `Node.js`

> For the rest of the guide we are going to assume the name is *`nodeexample`*

> endpoints are going to be in the following format **http://{microservicename}.api.staging.kintohub.com**

> Kintoblocks can't be accessed directly, it must be through Kintoapps, if you tried to go to `http://nodeexample.api.staging.kintohub.com/sample/hello` you will get an error.

### Tag Latest Commit

After creating that Kintoblock, when you are in the Kintoblock manage page, navigate to the branch that you added your code to. And go to the **Commits** section.

Make sure that the last commit you had is in recent commits and wait until it successfully builds. *(you have to refresh the page to get the latest build status update)*

After it successfully builds click `Tag Latest Commit` this allows you to add a tag to that commit *(similar to how git works)* so you can select that tag in a Kintoapp


## Create a Kintoapp

We need to finally create a Kintoapp that includes `nodeexample`

> Kintoapps can't live by themselves you must add kintoblocks for them to work

Go to create Kintoapp page. Add a name and description. in the dependencies section search and select `nodeexample`. update the selector on the right to be the latest tag we just created.

Click `Save Changes`

### Tag and Deploy

after hitting `Save Changes` it should change to `Tag and Deploy`. tagging and deploying will bring our app online, let's click it and select the default `master` environment and add a version for the app *(Kintoapp version is not related to kintoblock version)*. After clicking Create now we have a live version that we can access

## Accessing the endpoints

All endpoints are private by default. After deploying to the `master` environment go to the edit page to that environment.

you will find `CLIENT ID` and `SECRET KEY` these are unique to each environment. you will need to auth first with them and get a token, that token will allow you to call the microservices inside that app

The endpoint for authenticating the env is
```
POST http://api.staging.kintohub.com/auth
```

> We are using [HTTPie](https://httpie.org/) here (similar to CRUD) the samples below should work if you have it installed

calling `/auth` and passing it the client and secret should return a token
```bash
http -v POST http://api.staging.kintohub.com/auth clientId=<clientId> clientSecret=<clientSecret>
```

returns
```
{"data":{"token": "<token>"}}
```

if we used that token and pass it as an Authorization header when we call any Kintoblock inside that Kintoapp it should work *(need to add 'Bearer' before the actual token)*


Finally, the following should work

```bash
http -v GET http://nodeexample.api.staging.kintohub.com/sample/hello Authorization:"Bearer <token>"
```

Should return
```
{"data":"Hello World","output":"hello"}
```
