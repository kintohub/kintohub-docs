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

### Let's explore the code

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

The API accepts a path template of `/hello/:name` (e.g. `/hello/World`), and the value of the `:name` parameter is printed in the `message` property of the JSON response. Documentation for the API endpoint has been defined in [apiDoc format](features/building/api-docs.md).

### Running the app on your local machine

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

> If you don't have a KintoHub account yet, [sign up for free](https://beta.kintohub.com/sign-up) to proceed.

1. Navigate to https://beta.kintohub.com.
2. Select **KintoBlocks** from the sidebar.
3. Click on the **Create New KintoBlock** card. 

### Connect your GitHub account

Once the **Connect Your Repository** page is displayed, click on the **Connect Github** button.

![Link Repo Source dialog, with GitHub, Bitbucket and GitLab options](/docs/assets/introduction/try-deploying/link-repo-sources.png)

The page will redirect to the GitHub website. In GitHub, ensure that **necessary permissions are granted to the KintoHub App** as suggested below:

1. Follow the prompts and __give access__ to:
  - either all repositories, or
  - only to the one you created in the beginning of this quick-start.
2. Click the __Save__ button on the GitHub website to go back to KintoHub.

### Select a KintoBlock flavor

In the **Choose KintoBlock Type** page, there is an option to select the type applicable to the project.

1. Select the **Website** KintoBlock flavor.

  ![4 KintoBlock options: Microservice, Website, Custom Service or Job](/docs/assets/introduction/try-deploying/select-kintoblock.png)

### Configure the KintoBlock

Once the **Choose Repository** page is displayed, specify the repository details as suggested below:

1. Enter the name of the repository where the static files are in the root of the repository.
  ![Screen shot of the Repository section](/docs/assets/introduction/try-deploying/nodejs-app/repository-section.png)
2. Click on the **Continue** button.

Next, we're going to configure how the Website KintoBlock should _build and run the Node.js app_.

3. Enter a unique Name, e.g. `My App`. 
4. Enter an Internal Name, e.g. `my-app`.
   > Note: The KintoBlock name must be _lower-case_, and _only include alphanumerical characters or hyphens_. The reason for that is that _the name is used as an identifier_ and may appear in the service logs, URLs and other places where it needs to be uniform.
5. Choose the `Dynamic Web App` in **Choose a Type**.
  ![Screen shot of the Create Website form](/docs/assets/introduction/try-deploying/nodejs-app/my-app.png)

Selecting _Dynamic Web App_ caused an extra *__Options__* section to appear.

6. Set `Node.js` as the __Language__.
7. Select the appropriate __Version__, For e.g. `11.7.0-alpine`.
8. Set the __Build Command__ as `npm install`, so that all required dependencies get installed.
9. Update the __Run__ field to `npm run prod`, since we want to use the script that sets the port to 80.
10. Leave the __Port__ field set to `80`, since that matches our production-ready configuration. 
  ![Screen shot of the Basic Info section](/docs/assets/introduction/try-deploying/nodejs-app/basic-info-section.png)

Now that everything is configured, we are ready to proceed with the creation of the website.

11. Click on **Create Website** button.

### Build the source code

We now see that the KintoBlock has been created, and that _No build was built successfully yet._ Let's change that:

1. Press __Build Latest Commit__, to trigger a new build.
  ![KintoBlock page with the message that: No build was built successfully yet](/docs/assets/introduction/try-deploying/nodejs-app/no-builds-yet.png)

This triggers KintoHub to pull the source code from GitHub and build a cloud-native package out of it.

We can see the build in progress:

![Progress indication that the build is in progress](/docs/assets/introduction/try-deploying/nodejs-app/building.png)

And get the green light when it completes successfully:

![The build was successful as marked in green](/docs/assets/introduction/try-deploying/nodejs-app/built-successfully.png)

Well done! Your KintoBlock is now created and built.

In a typical application you're likely to create multiple KintoBlocks, with each having their own characteristics. For this quick-start, we'll keep it simple and proceed with the project.

## Ready to deploy

Now that you have a KintoBlock and it has been built, the KintoBlock is ready to be deployed to the cloud.

From the KintoBlock page, in the bottom right corner:

1. Press __Add to Project__, this will pop up a dialog.

> _Tip:_ If you have existing projects, this dialog allows you to select one of its existing environments.

Because we do not have any projects yet:

2. Press the __New Project__ button.
3. Enter in the _Enter project name_ field a new project name. (e.g. `myapp`)
4. Press the __Create__ button.

![Add to Project dialog](/docs/assets/introduction/try-deploying/nodejs-app/add-to-deployment.png)

### Create new project

The *__Create New Project__* page, has already been filled out with some of the information you've provided:

1. The __Project Name__ has been set.
2. A `default` __Environment Name__ has been preset, and can be adjusted if necessary.

Scroll down to the *__KintoBlocks__* section, where you can see that your _Node App_ KintoBlock has already been added. It has been preset to use the build from the `master` branch. It is also possible to [select other branches and tags](features/building/branches-and-tags.md).

![The Node App KintoBlock listed in the project page](/docs/assets/introduction/try-deploying/nodejs-app/deployment-node-app.png)

If you have more KintoBlocks that should be part of this project, then you can add those with the _Add KintoBlocks..._ drop-down menu.

For this quick-start however, we are going to deploy only this single KintoBlock.

3. Press __Create New Project__ to start the project.

## Project progress

The first project is as simple as waiting for the process to complete.

You can see that the project is running:

![Project running](/docs/assets/introduction/try-deploying/nodejs-app/deployment-running.png)

And when it is completed:

![Project deployed](/docs/assets/introduction/try-deploying/nodejs-app/deployment-deployed.png)

During the project KintoHub will push your KintoBlock to a cloud server and setup routing for inbound traffic.

### Accessing the Node.js app

To access the deployed Node.js sever, scroll down to the *__KintoBlocks__* section, and:

5. Press the __Open__ button on the Website KintoBlock.

This will open a new tab in your browser pointing to the URL of the website that was deployed, for example:
```plaintext
https://myapp-default-myapp-35uekidash.web.kintohub.com
```

Because our Node.js server only listens to a specific path pattern, you'll see `Cannot GET /` as a result.

However, if you suffix the URL with for instance `/hello/World`, you will see:

```.json
{"message":"Hello World"}
```

## Next steps

Great job on completing this quick-start!

What to read next:

 - Explore all [KintoBlock flavors](kintoblocks/introduction.md) that are available.
 - Read about [advanced Project concepts](projects/introduction.md).
 - Try the [Todo List example app tutorial](examples/todo-list/tutorial.md) showcasing multiple KintoBlocks working together.
