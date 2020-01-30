---
title: Todo List example app
sidebar_label: Todo List App
---

![Todo List app with input box](assets/examples/todo-list/todos.png)

## Quick-start

<div class="iframe-container">
  <iframe width="100%"
  src="https://www.youtube.com/embed/7gzeeIicRwQ" allowfullscreen>
  </iframe>
</div>

## Quick-start tutorial

This tutorial walks you through the process of deploying a _Todo List_ example app on KintoHub.

It shows how to deploy the following 3 services:

 1. __Frontend SPA app__ ([source](https://github.com/kintohub/todolist-spa-example))  
    A Single Page Application frontend built with React. Allows users to enter and complete todos. Based on the popular [TodoMVC](http://todomvc.com) examples.
 2. __Backend API__ ([source](https://github.com/kintohub/todolist-api-example))  
    A RESTful Node.js API, implemented with the [Hapi framework](https://hapijs.com). Processes web requests to create, read, update and delete (CRUD) todo entries.
 3. __MongoDB database__ ([source](https://github.com/kintohub/kinto-catalog/tree/master/mongodb))  
    A mongo database, storing the todos.

> All you need to get started is a free account on KintoHub and a GitHub account. Don't have an acount on KintoHub yet? [Register](https://beta.kintohub.com/sign-up) for free.

## MongoDB database in the catalog

The Todo List app stores all todos in a MongoDB database. It persists the data with a storage volume, so your data are safe, even when the service restarts. To deploy a mongo database, we can use the KintoHub Catalog.

Note: In order to keep this tutorial as simple as possible, the MongoDB deployed will have the basic configuration -> standalone, no authentication and no persistent storage. However you can change the environment variables on the deployment page and make it High Available. Contact us on [Discord](https://discordapp.com/invite/QVgqWuw) if you need help.

## Setup the Backend API

The backend API service that interacts with the database can be created.

 - browse to the [`kintohub/todolist-api-example` repository on GitHub](https://github.com/kintohub/todolist-api-example)
 - use the __Fork__ button to add the repo to your own GitHub account

### Create the KintoBlock

On KintoHub:
 - choose __KintoBlocks__ in the sidebar
 - select __Create New KintoBlock__
 - then select the __Microservice__ flavor

![3 choices of KintoBlocks: Microservice, Website, or Custom Service](assets/examples/todo-list/kintoblock-select-flavor.png)

In the __Choose Repository__ page
 - search and select the forked `todolist-api-example` repository
 - press __Continue__
  
In the __Create Microservice__ page
 - fill out a __KintoBlock name__ (e.g. `todolist-api`)
 - select as __Language__ the value `Node.js` from the list
 - select the __Version__ `latest`
 - type the __Build Command__ `npm install && npm run build`
 - type the __Run Command__ `npm run serve`
 - type the __Port__ `8000`
 - press __Create Microservice__

The build will automatically start on the default branch (`master`), it takes about 1.5 minutes to finish successfully.

![Build output](assets/examples/todo-list/kintoblock-api-built.png)

In the meantime, access the default __Settings__ of your kintoblock on the top left
  - add environment variable `MONGODB_CONNECTION_STRING=mongodb://cs-mongodb/todolist?replicaSet=rs0`
  - press __Save Changes__

Go back to the overview page.

## Setup the Frontend App

The frontend app that calls out to the backend service can be created next.

 - Browse to the [`kintohub/todolist-spa-example` repository on GitHub](https://github.com/kintohub/todolist-spa-example)
 - use the __Fork__ button to add the repo to your own GitHub account.

### Create the KintoBlock

On KintoHub:
 - choose __KintoBlocks__ in the sidebar
 - select __Create New KintoBlock__
 - then select the __Website__ flavor

In the __Choose Repository__ page
 - search and select the forked `todolist-spa-example` repository
 - press __Continue__
  
In the __Create Website__ page
 - fill out a __KintoBlock name__ (e.g. `todolist-spa`)
 - press __Dynamic Web app__
 - select as __Language__ the value `Custom Dockerfile` from the list
 - type the __Port__ `5000`
 - press __Create Microservice__

The build will automatically start on the default branch (`master`), it takes about 2 minutes to finish successfully.

In the meantime, access the default __Settings__ of your kintoblock on the top left,
  - add environment variable `REACT_APP_API_BASE_URL` with no value
  - press __Save Changes__

Go back to the overview page.

## Deploy the KintoBlocks

On KintoHub:
 - choose __Projects__ in the sidebar
 - select __Create New Project__
 - fill out a __Project name__ (e.g. `todolist`)
 - press __Add KintoBlocks__
 - search for `mongodb` and add it
 - search for `todolist-api` and add it (depends of how you named it previously)
 - search for `todolist-spa` and add it (depends of how you named it previously)

![Listing KintoBlocks](assets/examples/todo-list/deployment-kintoblocks.png)

Proceed to deploy the added KintoBlock by
 - pressing the __Create new project__ button.

The deployment is running.
You can press __Expand Project History__ to check in real time the status of your deployment.

The deployment takes about 2 minutes to succeed.

## Configure the blocks

Your deployment is successfull and you can press __Open__ on your _Todo List SPA_ KintoBlock to see your todo list.

However, the _Todo List SPA_ has not been configured yet to send the data to the _Todo List API_.

Go back to your __Projects__ page.
 - use the __gear icon__ on the _Todo List API_ KintoBlock to open the settings page
 - toggle __Public API & Webhook Access__ to `on`, and
 - press __Done Configuring__
 - scroll down to __API Access__ and open it
 - under __Access Your API__, copy the correct URL (similar to `https://[environment].api.beta.kintohub.com/`) and add `todolist-api` at the end (depends of how you name it previously)
 - use the __gear icon__ on the _Todo List SPA_ KintoBlock to open the settings page
 - paste your URL in your __Environment Variable__ `REACT_APP_API_BASE_URL` (similar to `https://[environment].api.beta.kintohub.com/todolist-api`)
 - press __Done Configuring__

Proceed to deploy the new configuration by
 - pressing the __Deploy__ button.

## Visit the Todo List app

Now all services have been deployed and configured we can test the application!

Simply scroll to the _Todo List SPA_ KintoBlock, and
 - press the __Open__ button to view the website in a new browser window.

When you enter, modify, delete or complete Todos in the web app UI, it will send API calls to the backend API, and those actions are persisted in the MongoDB database.

_Well done,_ and congrats on completing this tutorial! 🎉

> If you had any issues during this tutorial, *__we're here to help!__*  
Contact us on [Discord](https://discordapp.com/invite/QVgqWuw).