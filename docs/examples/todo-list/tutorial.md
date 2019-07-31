---
title: Todo List example app
sidebar_label: Todo List App
---

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
 - browse to the [`helm/charts` repository on GitHub](https://github.com/helm/charts/) and
 - click the __Fork__ button to add the repo to your own GitHub account.

![Fork button on GitHub](https://github-images.s3.amazonaws.com/help/bootcamp/Bootcamp-Fork.png)

Now there is a forked _charts_ repository under your own GitHub account, it can be referred to from KintoHub. Let's do that next.

### Create the KintoBlock

On KintoHub:
 - choose __KintoBlocks__ in the sidebar,
 - select __Create New KintoBlock__, and
 - then select the __Custom Service__ flavor.

![3 choices of KintoBlocks: Microservice, Website, or Custom Service](assets/examples/todo-list/kintoblock-select-flavor.png)

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
 - click the __Create New KintoBlock__ button.

### Configure the KintoBlock

Scroll down to the *__Helm Arguments__* section. Here we can fill out key-value pairs to set variables in the template of the Helm chart.

According to the [documentation of the Helm chart](https://github.com/helm/charts/tree/master/stable/mongodb-replicaset), it is possible to state the size of the storage volume for the data, and and other options. By default it asks for a 8 GB storage volume. For our small example app, we can make do with a much smaller volume, thus it can be set to 1 GB instead.

 - Enter for __Argument__ `persistentVolume.size` the __Value__ `1Gi`,
 - then click the __plus (+)__ button to confirm the pair. 

By default, this Helm chart will use version 3.6 of MongoDB. We can change that to version 4.0 by changing the tag of the underlying Docker image.

 - Enter for __Argument__ `image.tag` the __Value__ `4.0`,
 - then click the __plus (+)__ button to confirm the pair. 


> _Tip:_ paste the below text into any of the argument fields to quickly add multiple arguments.
>
> ```ini
> persistentVolume.size=1Gi
> image.tag=4.0
> ```

Finally,
 - click __Save Changes__ to store the arguments.

### Build the KintoBlock

Now that the arguments are configured, we can build the KintoBlock with these arguments.

Scroll up to the *__Builds & Repository__* section and
 - click __Build Latest Commit__.

Wait for the build to complete, the result should look like this:

![A chain of build steps with a success indicator.](assets/examples/todo-list/kintoblock-helm-chart-built.png)

### Add to Deployment

Now we have built successfully the MongoDB KintoBlock, it can be deployed.

 - Click the __Add to Deployment__ button, and
 - in the popup window click __New Deployment__.
 - Enter a __deployment name__ (e.g. `todolist`. _Note:_ lower-case), and
 - click __Create__.

Notice that in the *__Create New Deployment__* page the KintoBlock has already been added to the deployment. Also, by default it selects the most recent build from the `master` branch.

- Click __Create New Deployment__ to start the deployment.

You'll be navigated to the *__Deployment__* page and can see the progress of the deployment. Once complete, it should look like this:

![Status and History section showing a 100% Complete deployment.](assets/examples/todo-list/deployment-successful.png)

## Setup the Backend API

Now we have the database deployed, we can now deploy the backend API service that interacts with the database.

 - Browse to the [`kintohub/todolist-api-example` repository on GitHub](https://github.com/kintohub/todolist-api-example) and
 - click the __Fork__ button to add the repo to your own GitHub account.

As with the charts repo that we forked previously, once the _todolist-api-example_ repo is forked under your GitHub account, we can refer to it on KintoHub.

### Create the KintoBlock

Return to the main menu by
 - clicking __← Back to Main Menu__.
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
 - the __Doc Format__ is `ApiDoc`

Now all is ready,
 - click __Create New Block__.

### Configure the KintoBlock

When the backend service starts, it expects to connect to a MongoDB database. This is done with a connection string, which needs to be set as an environment variable, so that the service can load it during startup.

Scroll down to the *__Environment Variables__* section and set the following variable:

 - `MONGODB_CONNECTION_STRING` __Variable__ with __Value__ `mongodb://cs-mongodb-mongodb-replicaset:27017/todolist?replicaSet=rs0`.

> _Why this connection string?_ Every custom service is prefixed with `cs-` in its service name by KintoHub. We named the KintoBlock `mongodb` in the previous steps. The Helm chart uses `-mongodb-replicaset` as default name suffix. MongoDB runs by default on port `27017`. As database name, which will be created if it doesn't already exist, the value `todolist` is used. Because there are multiple instances in the replica set, we need to specify the name of the replica set as defined by default in the Helm chart, and that is `rs0`.

> _Tip:_ paste the below text into any of the variable fields to quickly add the variable.
> ```ini
> MONGODB_CONNECTION_STRING=mongodb://cs-mongodb-mongodb-replicaset:27017/todolist?replicaSet=rs0
> ```
