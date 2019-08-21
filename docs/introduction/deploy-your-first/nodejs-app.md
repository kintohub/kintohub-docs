---
title: Deploy your first Node.js app
sidebar_label: Node.js
---

This quick-start tutorial shows how to deploy a [Node.js](https://nodejs.org) app written in [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) with KintoHub.

It should take you less than 15 minutes, have fun!

## Example code on GitHub

> This example uses code published on GitHub. If you don't have a GitHub account yet, please [create a free GitHub account](https://github.com/join) before proceeding.

KintoHub works by [pulling your source code](features/building/pulling-source-code.md) (GitHub, Bitbucket, GitLab, etc.) and building it into a [KintoBlock](kintoblocks/introduction.md).

 - Navigate to https://github.com/kintohub/node-examples.
 - Log in with your account, if you haven't done so yet.
 - Press the __Use this template__ button. (only visible whilst logged in)
 - Enter a __Repository name__ of your choosing (e.g. `node-app`), and optionally set the repo to private.
 - Finally, press the __Create repository from template__ button.

## Let's explore the code

Like a typical Node.js v8 app, the repo has a `package.json` file, with the following scripts:

```.json
  "scripts": {
    "start": "node index.js",
    "prod": "PORT=80 node index.js"
  },
```

The app code lives in the `index.js` file, and we have two ways to start the app:

- `npm start` for development mode, and
- `npm run prod` to use the production-ready script that sets a `PORT` environment variable to port 80.

&nbsp;  
The `index.js` file defines a very basic [Express](https://expressjs.com) based API:

```.js
const express = require('express')
const app = express()
const PORT = process.env.PORT || '8000'

/**
 * @api {get} /hello/{name} Prints "Hello {name}"
 * @apiName HelloWorld
 * @apiParam (Url) {String} name the name to print
 * @apiSuccess (200) {String} message the hello {name} message
 */
app.get('/hello/:name', (req, res) => {
  console.log('Log request: ', req.params.name)
  return res.send({
    message: `Hello ${req.params.name}`
  })
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
```

Notice that the app will start on port 8000 by default. The `prod` script overrides this to port 80 with the `PORT` environment variable.

The API accepts a path template of `/hello/:name` (e.g. `/hello/World`), and the value of the `:name` parameter is printed in the `message` property of the JSON response. Documentation has been defined in [apiDoc format](features/building/api-docs.md).

## Running the app on your local machine

 - Clone the repository to your machine, and open a terminal at the directory.
 - Run `npm install`.
 - Run `npm start`:
   ```sh
   > node-example@0.1.0 start /Users/kinto/repos/node-app
   > node index.js
   
   App listening on port 8000!
   ```
 - Call the API with `curl localhost:8000/hello/World`:
   ```.json
   {"message":"Hello World"}
   ```

## Selecting a suitable KintoBlock for your app

What makes KintoBlocks easy to use, is that _you don't need to adopt any framework or additional code_, in order to package your app for the cloud. [KintoBlocks](kintoblocks/introduction.md) provide extra infrastructure plumbing to make your code cloud-ready.

For instance, the [Website KintoBlock](kintoblocks/websites.md) is perfectly suitable for hosting your code on the internet, since it provides a _HTTP & HTTPS endpoint_ that forwards all requests to your Node.js server. The only thing we need to do, is to configure the KintoBlock based on the behavior we already know.

To keep this example simple, we will deploy it as a website only. Of course in typical applications and more complex situations you may have many more KintoBlocks. For example, this Node.js server could also run as a [Microservice](kintoblocks/microservices.md) instead. Then its API would be accessible from the internal network only, and other services can call it. For a more complex example like that, refer to the [Todo List App tutorial](examples/todo-list/tutorial.md).

## Creating the KintoBlock on KintoHub

> If you don't have a KintoHub account yet, [sign up for free](https://app.kintohub.com/sign-up) to proceed.

 - Navigate to https://app.kintohub.com.
 - If it is the first time, you can __Skip Tutorial__.
 - In the sidebar, select __KintoBlocks__.
 - Press __Create New KintoBlock__.

This prompts you with the below dialog to link to a Git repository source.

 - Press the __Link__ button of the __GitHub__ option.

![Link Repo Source dialog, with GitHub, Bitbucket and GitLab options](assets/introduction/deploy-your-first/link-repo-sources.png)

You'll be redirected to the GitHub website, where you have to __grant permissions for the KintoHub App to access your repositories__.

 - Follow the prompts and __give access__ to:
   - either all repositories, or
   - only to the one you created in the beginning of this quick-start.
 - Press __Save__ on the GitHub website to be redirected back to KintoHub.

This will bring you back to the dialog, and you should see that GitHub is now connected successfully.

 - Press __I'm Done__ to proceed to the *__Create New KintoBlock__* page.

You'll get the option to choose what type of KintoBlock you would like to create.

 - Select the __Website__ KintoBlock flavor.

![3 KintoBlock options: Microservice, Website, or Custom Service](assets/introduction/deploy-your-first/select-kintoblock.png)

This is where we get to configure the KintoBlock.

First, refer to the *__Repository__* section, where __Repository Source__ is already `GitHub` and __Repository Type__ is `Existing Repositories`.

 - Type in the __Repository__ field the name you used previously. (e.g. `node-app`)
 - __Select the repository__ from the list that appears.
   > _Tip:_ Other repositories with similar names may show up in the list, if you have opted to grant access to all repositories in your GitHub account. If that is undesirable, you can always [restrict access to only specific repositories](https://help.github.com/en/articles/reviewing-your-organizations-installed-integrations) under your GitHub account from the GitHub website.

![Screen shot of the Repository section](assets/introduction/deploy-your-first/nodejs-app/repository-section.png)

Next, we're going to configure how the Website KintoBlock should _build and run the Node.js app_.

Refer to the *__Basic Info__* section, and:

 - Enter a __KintoBlock Name__, e.g. `myapp`.
   > _Note:_ The KintoBlock name must be _lower-case_, and _only include alphanumerical characters or hyphens_. The reason for that is that _the name is used as an identifier_ and may appear in the service logs, URLs and other places where it needs to be uniform.
 - Enter a __Display Name__, e.g. `My App`.
 - Add a __Description__, e.g. `My first Node.js app on KintoHub!`.
 - For the __Website Type__ select `Dynamic Web App`.

Selecting _Dynamic Web App_ caused an extra *__Advanced Options__* section to appear.

 - Leave the __Port__ field set to `80`, since that matches our production-ready configuration.
 - Keep the __Build Command__ set as `npm install`, so that all required dependencies get installed.
 - Update the __Run__ field to `npm run prod`, since we want to use the script that sets the port to 80.

![Screen shot of the Basic Info section](assets/introduction/deploy-your-first/nodejs-app/basic-info-section.png)

Now that everything is configured, we are ready to proceed:

 - Press the __Create New KintoBlock__ button in the bottom-right corner.

We now see that the KintoBlock has been created, and that _No build was built successfully yet._ Let's change that:

 - Press __Build Latest Commit__, to trigger a new build.

![KintoBlock page with the message that: No build was built successfully yet](assets/introduction/deploy-your-first/nodejs-app/no-builds-yet.png)

Triggers KintoHub to _pull the source code from GitHub_ and _build a cloud-native package_ out of it.

We can see the build in progress:

![Progress indication that the build is in progress](assets/introduction/deploy-your-first/nodejs-app/building.png)

And get the green light when it completes successfully:

![The build was successful as marked in green](assets/introduction/deploy-your-first/nodejs-app/built-successfully.png)

## Ready to deploy

TODO

&nbsp;  

---

&nbsp;  

---

&nbsp;  

---

&nbsp;  

---

&nbsp;  

---



## Create a Kintoblock on KintoHub from the service we just created

_For more details and screenshots about creating KintoBlocks read more [here](kintoblocks.md#creating-a-kintoblock)_

By this point, you should already have a GitHub or Bitbucket repository that is compatible with KintoHub

Next step is connecting your workspace to your GitHub or Bitbucket account. Go to edit workspace and click on the Link GitHub or Link Bitbucket button.

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

if we used that token and pass it as a Kinto-Authorization header when we call any Kintoblock inside that Application it should work _(need to add 'Bearer' before the actual token)_

Finally, the following should work

```bash
curl -H "Kinto-Authorization: Bearer <token>" https://api.kintohub.com/nodeexample/sample/hello
```

Should return

```
{
    "data": "Hello World",
    "output": "hello"
}
```


