---
title: Todo List example app
sidebar_label: Todo List App
---

![Todo List app with input box](/docs/assets/examples/todo-list/todos.png)

## Quick-start tutorial

This tutorial walks you through the process of deploying a _Todo List_ example app on KintoHub.

It shows how to deploy the following 3 services:

 1. __Frontend SPA app__ ([source](https://github.com/kintohub/todolist-spa-example))  
    A Single Page Application frontend built with React. Allows users to enter and complete todos. Based on the popular [TodoMVC](http://todomvc.com) examples.
 2. __Backend API__ ([source](https://github.com/kintohub/todolist-api-example))  
    A RESTful Node.js API, implemented with the [Hapi framework](https://hapijs.com). Processes web requests to create, read, update and delete (CRUD) todo entries.
 3. __MongoDB database__ ([source](https://github.com/helm/charts/tree/master/stable/mongodb-replicaset))  
    A mongo database spread over a cluster of 3 replica sets, storing the todos.

> All you need to get started is a free account on KintoHub and a GitHub account. Don't have an acount on KintoHub yet? [Register](https://app.kintohub.com/sign-up) for free.

## Setup a MongoDB database with a Helm chart

The Todo List app stores all todos in a MongoDB database. It persists that data with a storage volume, so your data is safe, even when the service restarts. To deploy a mongo database, we can use Helm charts to make that process easy.

> [_Helm charts_](https://helm.sh/) are templates of ready-to-deploy application packages on [Kubernetes.](https://kubernetes.io) KintoHub supports all charts, and you can find over 750 amazing open-source projects in [Helm's GitHub repository](https://github.com/helm/charts/) or [Helm Hub](https://hub.helm.sh/), including projects like [MongoDB](https://github.com/helm/charts/tree/master/stable/mongodb-replicaset), [Redis](https://hub.helm.sh/charts/stable/redis), and even [Minecraft](https://hub.helm.sh/charts/stable/minecraft) servers!

First,
 - browse to the [`helm/charts` repository on GitHub](https://github.com/helm/charts/), and
 - use the __Fork__ button to add the repo to your own GitHub account.

![Fork button on GitHub](https://github-images.s3.amazonaws.com/help/bootcamp/Bootcamp-Fork.png)

Now there is a forked _charts_ repository under your own GitHub account, it can be referred to from KintoHub. Let's do that next.

### Create the KintoBlock

On KintoHub:
 - choose __KintoBlocks__ in the sidebar,
 - select __Create New KintoBlock__, and
 - then select the __Custom Service__ flavor.

![3 choices of KintoBlocks: Microservice, Website, or Custom Service](/docs/assets/examples/todo-list/kintoblock-select-flavor.png)

For your new KintoBlock, fill out:
 - a __KintoBlock name__ (e.g. `mongodb`),
 - __display name__ (e.g. `MongoDB`), and
 - __description__ (e.g. `MongoDB database service with a replica set of 3`).

Then choose:
 - `Helm` as the __Service Project Format__ and
 - set the __Helm chart source folder__ to `stable/mongodb-replicaset`.

In the *__Repository__* section and the __Repository__ field:
 - type in `charts` – the drop-down list will show the forked charts repository,
 - select `{your_username}/charts` from the list to confirm the selection.

Finally,
 - press the __Create New KintoBlock__ button.

### Configure the KintoBlock

Scroll down to the *__Helm Arguments__* section. Here we can fill out key-value pairs to set variables in the template of the Helm chart.

According to the [documentation of the Helm chart](https://github.com/helm/charts/tree/master/stable/mongodb-replicaset), it is possible to state the size of the storage volume for the data, and and other options. By default it asks for a 8 GB storage volume. For our small example app, we can make do with a much smaller volume, thus it can be set to 1 GB instead.

 - Enter for __Argument__ `persistentVolume.size` the __Value__ `1Gi`, and
 - then press the __plus (+)__ button to confirm the pair.

By default, this Helm chart will use version 3.6 of MongoDB. We can change that to version 4.0 by changing the tag of the underlying Docker image.

 - Enter for __Argument__ `image.tag` the __Value__ `4.0`, and
 - then press the __plus (+)__ button to confirm the pair.


> _Tip:_ paste the below text into any of the argument fields to quickly add multiple arguments.
>
> ```ini
> persistentVolume.size=1Gi
> image.tag=4.0
> ```

Finally,
 - press __Save Changes__ to store the arguments.

### Build the KintoBlock

Now that the arguments are configured, we can build the KintoBlock with these arguments.

Scroll up to the *__Builds & Repository__* section and
 - press __Build Latest Commit__.

![Build Latest Commit button in the Builds & Repository section, with no builds completed yet](/docs/assets/examples/todo-list/kintoblock-no-builds.png)

Wait for the build to complete, the result should look like this:

![A chain of build steps with a success indicator.](/docs/assets/examples/todo-list/kintoblock-helm-chart-built.png)

### Add to Project

Now the MongoDB KintoBlock has been built successfully, it can be deployed.

 - Press the __Add to Project__ button, and
 - in the popup window press __New Project__.
 - Enter a __project name__ (e.g. `todolist`. _Note:_ lower-case), and
 - press __Create__.

Notice that in the *__Create New Project__* page the KintoBlock has already been added to the project. Also, by default it selects the most recent build from the `master` branch.

- Press __Create New Project__ to start the project.

You'll be navigated to the *__Project__* page and can see the progress of the project. Once complete, it should look like this:

![Status and History section showing a 100% Complete project.](/docs/assets/examples/todo-list/deployment-successful.png)

## Setup the Backend API

Now the database has been deployed, the backend API service that interacts with the database can be deployed next.

 - Browse to the [`kintohub/todolist-api-example` repository on GitHub](https://github.com/kintohub/todolist-api-example), and
 - use the __Fork__ button to add the repo to your own GitHub account.

As with the _charts_ repo that we forked previously, once the _todolist-api-example_ repo is forked under your GitHub account, we can refer to it on KintoHub.

### Create the KintoBlock

Return to the main menu by
 - navigating with __← Back to Main Menu__.
 - Then select __KintoBlocks__ from the sidebar, and
 - select __Create New KintoBlock__.

Since this is a backend service,
 - select the __Microservice__ flavor this time.

For the backend KintoBlock, fill out:
 - a __KintoBlock name__ (e.g. `todolist-api`),
 - __display name__ (e.g. `Todo List API`), and
 - __description__ (e.g. `API Backend for the Todo List app`).

The backend is written in Node.js, therefore:
 - select as __Language__ the value `Node.js` from the list, and
 - select the latest __Version__ (e.g. `11.7.0`).

In the __Repository__ field,
 - choose the forked `todolist-api-example` repository.

Next, we have to specify some *__Advanced Options__* so that the application builds correctly and runs on the right port number. This is determined by the code of the application. The API has been documented with the ApiDoc format, and therefore this can be enabled.

Configure as follows:
 - the __Port__ is `8000`,
 - __Build Command__ is `npm install && npm run build`,
 - __Run Command__ is `npm run serve`, and
 - the __Doc Format__ is `ApiDoc`.

Now all is ready,
 - press the __Create New KintoBlock__ button.

### Configure the KintoBlock

When the backend service starts, it expects to connect to a MongoDB database. This is done with a connection string, which needs to be set as an environment variable, so that the service can load it during startup.

Scroll down to the *__Environment Variables__* section, and set the following variable:

 - enter __Variable__ `MONGODB_CONNECTION_STRING` with __Value__ `mongodb://cs-mongodb-mongodb-replicaset-0.cs-mongodb-mongodb-replicaset,cs-mongodb-mongodb-replicaset-1.cs-mongodb-mongodb-replicaset,cs-mongodb-mongodb-replicaset-2.cs-mongodb-mongodb-replicaset/todolist?replicaSet=rs0`, and
 - then press the __plus (+)__ button to confirm the pair.

> _Tip:_ paste the below text into any of the variable fields to quickly add the variable.
> ```ini
> MONGODB_CONNECTION_STRING=mongodb://cs-mongodb-mongodb-replicaset-0.cs-mongodb-mongodb-replicaset,cs-mongodb-mongodb-replicaset-1.cs-mongodb-mongodb-replicaset,cs-mongodb-mongodb-replicaset-2.cs-mongodb-mongodb-replicaset/todolist?replicaSet=rs0
> ```

> _Why this connection string?_  
> The Helm chart is configured by default to create a cluster, or ‘replica set’ of 3 replicas.  
> The replica set is named as follows:
> - every custom service is prefixed with `cs-` in its service name by KintoHub;
> - the KintoBlock was named `mongodb` in a previous step; and
> - the Helm chart uses `-mongodb-replicaset` as default name suffix.
> 
> Thus, the replica set is named `cs-mongodb-mongodb-replicaset` in full.
>
> Some MongoDB clients support pointing to this replica set endpoint only, but since the code uses the [_mongoose library_](https://mongoosejs.com/docs/connections.html#replicaset_connections), its documentation states that it is necessary to explicitly specify every replica of the set in the connection string.
>
> The hostnames of the replicas are created as subdomains of the replica set. All replica subdomains start with the same name as the replica set, and are suffixed with `-0`, `-1`, and `-2` respectively. Thus, the first replica hostname is `cs-mongodb-mongodb-replicaset-0.cs-mongodb-mongodb-replicaset` in full. 
>
> To specify multiple replica hostnames in a connection string, separate every hostname with a comma in the connection string. It is not required to specify the port, since the default MongoDB port `27017` will be used.
>
> After the last hostname, the database name can be appended as a path name; `/todolist`. The database will be created if it doesn't exist already.
>
> Because we are pointing to a replica set, it is required to specify the name of the replica set. The Helm chart uses `rs0` by default, and this can be set as a query string argument with `?replicaSet=rs0`.

After filling in the environment variables, it should look like this:

![Environment Variables section with the Variable and Value fields set](/docs/assets/examples/todo-list/kintoblock-api-env-vars.png)

Finally,
 - press the __Save Changes__ button to store the environment variables.

### Build and deploy the KintoBlock

Now that the environment variables are configured, we can build the KintoBlock with these variables.

Scroll up to the *__Builds & Repository__* section,
 - press __Build Latest Commit__, and
 - wait for the build to complete.

During the build it will generate the API documentation (ApiDoc); it is shown as the _Generate Doc_ step during the build.

![Build output with 4 steps: Git Init, Generate Doc, Building, and Success](/docs/assets/examples/todo-list/kintoblock-api-built.png)

Now the build is ready, the Todo List API KintoBlock can be added to our existing project:
 - press the __Add to Project__ button,
 - select under _todolist_ the _default_ environment.

You will be redirected to the __Project__ page, where the _Todo List API_ KintoBlock has been added to the list of KintoBlocks.

![Listing of MongoDB and Todo List API KintoBlocks](/docs/assets/examples/todo-list/deployment-mongodb-and-api-kintoblocks.png)

Proceed to deploy the added KintoBlock by
 - pressing the __Deploy__ button.

When you press __Expand Project History__ you can see the new project in progress:

![Project #2 in progress](/docs/assets/examples/todo-list/deployment-2-in-progress.png)

And when the project completes, all project steps are listed out:

![Project #2 complete, with succesful Project, Route and Results steps](/docs/assets/examples/todo-list/deployment-2-complete.png)

Since the API has been documented with ApiDoc, its generated documentation can be viewed when you
 - press __View Endpoints__ on the _Todo List API_ KintoBlock.

![Endpoint Documentation page with 6 REST endpoints listed out, and for the first selected endpoint the parameter information is displayed](/docs/assets/examples/todo-list/api-docs.png)

### Expose the Todo List API microservice to the internet

Because the frontend will need to call this backend API, it needs to be exposed to the internet. By default all microservices KintoBlocks are only accessible over the private network.

To expose the _Todo List API_ KintoBlock to the internet:
 - use the __gear icon__ on the _Todo List API_ KintoBlock to open the settings page.
 - Toggle __Is this API open to internet__ to `on`, and
 - __Save Changes__.
 - Use the __todolist__ link in the top navigation bar to return to the project.

![Todo List API KintoBlock with a gear icon in the bottom right corner](/docs/assets/examples/todo-list/deployment-todo-list-api-kintoblock.png)

![Settings page for the KintoBlock with 'Is this API open to internet' toggled on](/docs/assets/examples/todo-list/settings-todo-list-api.png)

### Accessing the API from the internet

Now the _Todo List API_ microservice KintoBlock has been exposed to the internet, let's see how to call to it from the web.

Scroll down on the _todolist_ *__Projects__* page to the *__API Access__* section.

- Select the __Public & Webhook Access__ tab.

An example URL is shown that leverages the KintoHub public API gateway to call the manually exposed KintoBlock.

> _Notice:_ The path in the URL starts with your specific _Client ID_. The Client ID is unique per _Environment_ in every _Project_. The path is then followed by the name of the KintoBlock.

In this tutorial, the _Todo List API_ KintoBlock was named `todolist-api`.

Therefore, the URL could look like: `https://public.api.kintohub.com/61772163d72143719aebacaa4bb29985/todolist-api`.  
Remember though, your Client ID will be different.

The URL will be used in the Frontend App, take a note of it for now.

## Setup the Frontend App

Now the backend API and database have been deployed, the frontend app that calls out to the backend service can be deployed next.

 - Browse to the [`kintohub/todolist-spa-example` repository on GitHub](https://github.com/kintohub/todolist-spa-example), and
 - use the __Fork__ button to add the repo to your own GitHub account.

As with the _charts_ and _todolist-api-example_ repos that we forked previously, once the _todolist-spa-example_ repo is forked under your GitHub account, we can refer to it on KintoHub.

### Create the KintoBlock

Return to the main menu by
 - navigating with __← Back to Main Menu__.
 - Then select __KintoBlocks__ from the sidebar, and
 - select __Create New KintoBlock__.

Since the frontend is a SPA web app that needs to be exposed to the internet by default,
 - select the __Website__ flavor this time.

![3 choices of KintoBlocks: Microservice, Website, or Custom Service](/docs/assets/examples/todo-list/kintoblock-select-flavor.png)

For the frontend KintoBlock, fill out:
 - a __KintoBlock name__ (e.g. `todolist-spa`),
 - __display name__ (e.g. `Todo List SPA`),
 - __description__ (e.g. `Single Page Application (SPA) frontend for the Todo List app`), and
 - select a __Website Type__ of `Dynamic Web App`.

Next, we have to specify some *__Advanced Options__* so that the application builds correctly and runs on the right port number. This is determined by the code of the application. The `npx serve` command runs on port `5000` by default.

Configure the *__Advanced Options__* as follows:
 - the __Port__ is `5000`,
 - __Build Command__ is `npm install && npm run build`, and
 - the __Run Command__ is `npx serve build`.

In the *__Repository__* section and __Repository__ field,
 - choose the forked `todolist-spa-example` repository.

Now all is ready,
 - press the __Create New KintoBlock__ button.

### Configure the KintoBlock

When the frontend web app is being built, it expects a URL to the backend API set in the `REACT_APP_API_BASE_URL` environment variable, since the URL is baked into the static website.

Scroll down to the *__Environment Variables__* section, and

 - enter __Variable__ `REACT_APP_API_BASE_URL` with as __Value__ the public URL of the __Todo List API__ KintoBlock as noted in a previous step. (e.g. `https://public.api.kintohub.com/61772163d72143719aebacaa4bb29985/todolist-api`), and
 - then press the __plus (+)__ button to confirm the pair.

Finally,
 - press the __Save Changes__ button to store the environment variables.

### Build and deploy the KintoBlock

Now that the environment variables are configured, we can build the KintoBlock with these variables.

Scroll up to the *__Builds & Repository__* section,
 - press __Build Latest Commit__, and
 - wait for the build to complete.

Now the build is ready, the Todo List API KintoBlock can be added to our existing project:
 - press the __Add to Project__ button,
 - select under _todolist_ the _default_ environment.

You will be redirected to the __Project__ page, where the _Todo List SPA_ KintoBlock has been added to the list of KintoBlocks.

![Listing of MongoDB, Todo List API, and Todo List SPA KintoBlocks](/docs/assets/examples/todo-list/deployment-all-kintoblocks.png)

Proceed to deploy the added KintoBlock by
 - pressing the __Deploy__ button.

When the project completes, all project steps are listed out, including the external routing setup steps:

![Project #3 complete, with succesful Project, External Routing, Route, Undeploy and Results steps](/docs/assets/examples/todo-list/deployment-3-complete.png)

## Visit the Todo List app

Now all services have been deployed, we can test the application!

Simply scroll to the _Todo List SPA_ KintoBlock, and
 - press the __Open__ button to view the website in a new browser window.

When you enter, modify, delete or complete Todos in the web app UI, it will send API calls to the backend API, and those actions are persisted in the MongoDB database.

_Well done,_ and congrats on completing this tutorial! 🎉

> If you had any issues during this tutorial, *__we're here to help!__*  
Reach out to us on [Slack](https://join.slack.com/t/kintohub/shared_invite/enQtMzIxNDU2OTE4NTYyLWJmNWM1ZTQ3YTFlMzJkYWUzMWE2ZTlmZjk3ZGQ1NWFlMDRkYzhhODNmNDZlMDZmNjhlMzBhNWRiYWIxMTVjMmU), [Twitter](https://twitter.com/kintohub), or [send us an email](https://www.kintohub.com/contact-us).
