---
title: Hasura
sidebar_label: Hasura
---

The [open-source project Hasura](https://hasura.io) makes it incredibly easy to setup a [GraphQL API](https://graphql.org) that has async processing patterns built-in.

Hasura does this by leveraging [PostgreSQL](https://www.postgresql.org) as a backing store. On top of that Hasura adds queuing and a subscription mechanism.

This tutorial shows how you can setup Hasura easily with KintoHub, and do that for multiple environments.

Prefer a video instead? See Hasura in action on KintoHub in this [recording of our talk at OSCON](https://www.youtube.com/watch?v=UTmCPEtxALk).

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/UTmCPEtxALk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prepare a PostgreSQL database

Since Hasura depends on PostgreSQL, we'll first need to prepare a database.

> Already got an existing PostgreSQL database? Skip to the [next section](#setup-hasura).

### Fork Helm charts

With [Custom Service KintoBlocks](kintoblocks/custom-services.md) it is easy to deploy ready-made cloud-native packages using [Helm charts](https://helm.sh). PostgreSQL is available as a Helm chart from the [Helm Hub](https://hub.helm.sh/charts/stable/postgresql).

To proceed deploying a new PostgreSQL database:
 - Browse to the [`helm/charts` repository on GitHub](https://github.com/helm/charts).
 - Use the __Fork__ button to add the repo to your own GitHub account.

![Fork button on GitHub](https://github-images.s3.amazonaws.com/help/bootcamp/Bootcamp-Fork.png)

Now there is a forked _charts_ repository under your own GitHub account, KintoHub can refer to it.

### Create a PostgreSQL KintoBlock

In KintoHub:

 - Select __KintoBlocks__ from the sidebar.
 - Press __Create New KintoBlock__.
 - Select the __Custom Service__ KintoBlock flavor.

On the *__Create KintoBlocks__* page:

 - Enter a __KintoBlock Name__ e.g. `Postgres`, the __Internal Name__ will be automatically filled with `postgres`.
 - Fill out a __Description__ e.g. `PostgreSQL database server`.
 - Next, as __Service Project Format__ choose `Helm`.
 - Set the __Helm Chart Source Folder__ to `stable/postgresql`.
 - Next, under the *__Repository__* section, type in the __Repository__ field `charts`. A drop-down list appears and your forked `charts` repository should be in it, select the repository from the list.
 - Finally, press __Create New KintoBlock__.

You'll see in a new page the KintoBlock for the PostgreSQL database, and it points to the `master` branch of the repository by default.

#### Configure Helm arguments

Before we can start the build, we'll specify some arguments for the Helm template first.

 - Select __Settings__ in the top left of the screen.
 - Scroll down to the *__Helm Arguments (defaults)__* section, and enter the below 4 arguments:
   1. __Argument__ `postgresqlPassword` with a password for the __Value__, e.g. `SuperS3cr3t`.
   2. __Argument__ `postgresqlDatabase` with a __Value__ of `hasura`.
   3. __Argument__ `persistence.size` with a __Value__ of `1Gi`, to override the default 8GB disk space. You can adjust this as needed.
   4. __Argument__ `fullnameOverride` with a __Value__ of `cs-postgres`, to override the service name to be used in the connection string.
   > _Tip:_ You can also copy/paste the below multi-line configuration in the _Enter Helm Argument_ field, and it will set them at once:
   > ```ini
   > postgresqlPassword=SuperS3cr3t
   > postgresqlDatabase=hasura
   > persistence.size=1Gi
   > fullnameOverride=cs-postgres
   > ```
 - Press the __Save Changes__ to store the arguments.

#### Build the KintoBlock

 - Select the `master` branch under __Branches__ tab in the sidebar on the left.
 - In the *__Builds & Repository__* section press the __Build Latest Commit__ button to start the build with the provided Helm arguments.

Once the build is completed, it is ready to be deployed.

### Deploy PostgreSQL

From the KintoBlock page, we can immediately add this KintoBlock to a new deployment.

 - Press __Add to Project__, and press the __New Project__ button.
 - Enter a name in the _Enter project name_ field, e.g. `hasura`.
 - Press the __Create__ button.

This will bring up the *__Create New Project__* page. The _Project Name_ (`hasura`) and _Environment Name_ (`dev`) have already been filled out.

In the *__KintoBlocks__* section, you can see that the _Postgres_ KintoBlock has been added.

 - Next, press __Create New Project__ to proceed.

Now we see the _Hasura_ project page, and in the *__Status & History__* section we can see that a deployment is in progress.

 - Wait until the deployment succeeds.

## Setup Hasura

With an existing PostgreSQL database ready, we can setup the Hasura API endpoint.

### Fork Hasura Dockerfile

We are going to use an _experimental feature_ in KintoHub that uses a _Dockerfile_ to determine the contents of the KintoBlock.

 - Browse to the [`kintohub/hasura-block` repository on GitHub](https://github.com/kintohub/hasura-block).
 - Use the __Fork__ button to add the repo to your own GitHub account.

Now there is a forked _hasura-block_ repository under your own GitHub account, KintoHub can refer to it.

The repository contains a `LICENSE` and `Dockerfile` file only. The Dockerfile is very simple, it refers to the latest `hasura/graphql-engine` [Docker image from Hasura](https://hub.docker.com/r/hasura/graphql-engine) only:

```
FROM hasura/graphql-engine:latest
```

> _Note:_ We are working on adding Dockerfile and docker image support to Custom Services. In future you should be able to skip this intermediate step to fork the repository.

### Create a Hasura KintoBlock

In KintoHub:

 - Select __KintoBlocks__ from the sidebar.
 - Press __Create New KintoBlock__.
 - Select the __Website__ KintoBlock flavor.

We choose a _Website_ flavor because it will provide a HTTPS endpoint for us so that we can reach the GraphQL API and Hasura's console.

On the *__Create KintoBlocks__* page:

 - Enter a __KintoBlock Name__ e.g. `Hasura`, and this fills out the __Internal Name__ as `hasura` automatically.
 - Fill out a __Description__ e.g. `Hasura GraphQL API`.
 - Next, as __Website Type__ choose `Dynamic Web App`.

This will bring up the *__Advanced Options__* section for the _Dynamic Web App_. Some settings will be irrelevant, since the Dockerfile will override these options. However, due to Dockerfiles being an experimental feature, some options are still required to complete, therefore we set them to dummy values:

 - Set __Language__ and __Version__ to the first values in the drop-lists, e.g. `Node.js` and `11.7.0`.

Selecting _Node.js_ has changed the __Port__ value to `80`. Hasura listens on port `8080` instead, thus:

 - Change __Port__ to `8080`.
 - Finally, press __Create New KintoBlock__.

You'll see in a new page the KintoBlock for the Hasura API, and it points to the `master` branch of the repository by default.

#### Configure environment variables

Before we can start the build, we'll need to specify some environment arguments that are associated with the build.

 - Select __Settings__ in the top left of the screen.
 - Scroll down to the *__Environment Variables (defaults)__* section, and enter the below 4 arguments:
   1. __Variable__ `HASURA_GRAPHQL_DATABASE_URL` with the connection string to the database, If you followed the tutorial to setup the database, use as __Value__ the connection string `postgres://postgres:SuperS3cr3t@cs-postgres:5432/postgres`. This entry can be marked as required with the __This is required__ toggle.
   2. __Variable__ `HASURA_GRAPHQL_ENABLE_CONSOLE` with a __Value__ of `true` to enable the Hasura console.
   3. __Variable__ `HASURA_GRAPHQL_ADMIN_SECRET` with a password value to protect the Console from being accessed publicly, e.g. `dev_secret`. This entry can be marked as required with the __This is required__ toggle.
   > _Tip:_ You can also copy/paste the below multi-line configuration in the _Enter Variable_ field, and it will set them at once:
   > ```ini
   > HASURA_GRAPHQL_DATABASE_URL=postgres://postgres:SuperS3cr3t@cs-postgres:5432/postgres
   > HASURA_GRAPHQL_ENABLE_CONSOLE=true
   > HASURA_GRAPHQL_ADMIN_SECRET=dev_secret
   > ```
 - Press the __Save Changes__ to store the arguments.

#### Build the KintoBlock

 - Select the `master` branch under __Branches__ tab in the sidebar on the left.
 - In the *__Builds & Repository__* section press the __Build Latest Commit__ button to start the build with the provided Helm arguments.

Once the build is completed, it is ready to be deployed.

### Deploy Hasura

Depending on whether you already created a project in the PostgreSQL steps, either A) add to that existing one, or B) create a new project.

#### A) Add to existing project

From the KintoBlock page, we can immediately add this KintoBlock to an existing deployment.

 - Press the __Add to Project__ button.
 - Select under the desired project the environment. (e.g. `dev` under `hasura`)

Now we see the existing _Hasura_ project page, and in the *__KintoBlocks__* section, you can see that the _Hasura_ KintoBlock has been added.

 - Next, press __Deploy__ to proceed.

This brings up the *__Compare Versions__* slide panel. In it you can see the added _Hasura_ block.

 - Press __Confirm Deployment__ to start the deployment.

In the *__Status & History__* section we can see that a deployment is in progress.

 - Wait until the deployment succeeds.

#### B) Create new project

From the KintoBlock page, we can immediately add this KintoBlock to a new deployment.

 - Press __Add to Project__, and press the __New Project__ button.
 - Enter a name in the _Enter project name_ field, e.g. `hasura`.
 - Press the __Create__ button.

This will bring up the *__Create New Project__* page. The _Project Name_ (`hasura`) and _Environment Name_ (`dev`) have already been filled out.

In the *__KintoBlocks__* section, you can see that the _Postgres_ KintoBlock has been added.

 - Next, press __Create New Project__ to proceed.

Now we see the _Hasura_ project page, and in the *__Status & History__* section we can see that a deployment is in progress.

 - Wait until the deployment succeeds.

### Accessing the Hasura Console

On the _Hasura_ project page, scroll down to the *__KintoBlocks__* section.

 - Press __Open__ on the _Hasura_ KintoBlock to open it's endpoint in a new browser tab.

You'll get prompted with Hasura's login screen.

 - Enter the _admin secret_ from the configuration, e.g. `dev_secret`.

![Hasura login screen asking for the admin secret](assets/examples/hasura/hasura-login.png)

Congratulations, you have Hasura up and running on KintoHub!

Next up, let's create another environment for production use.

## Multiple environments

In the previous steps we have deployed into the _dev_ environment. This is great for testing development activities. For production workloads we would likely use a separate production environment called `prod`, so that the two don't interfere with each other.

### Create a production environment

In the sidebar of the _Hasura_ project page:

 - Press the __Add New Environment__ button.

This brings up a *__Add New Environment__* dialog.

 - Enter in the __Enviroment Name__ field the value `prod`.
 - Press the __Add New Environment__ button to confirm.

![Add New Environment dialog](assets/examples/hasura/add-new-environment.png)

This creates a new _PROD_ environment in the sidebar, below the _DEV_ environment.

 - Use the __drag & drop handle__ next to the environment name to drag the _PROD_ environment above the _DEV_ environment.

![DEV and PROD environments in the sidebar](assets/examples/hasura/two-environments-sidebar.png)

Now the environments are in the right order, you can promote KintoBlocks from one environment to the other.

 - Press the __Promote__ button.

This brings up the *__Promote__* dialog, with a confirmation message to indicate that you're about to promote the _dev_ environment to the _prod_ environment.

 - Press the __Deploy__ button to start the new deployment into the _prod_ environment.

You'll see that the first deployment for the _PROD_ environment is in progress.

 - Wait for the deployment to succeed.
 - Press the __Open__ button on the _Hasura_ KintoBlock to see that the Hasura Console can be accessed.

![PROD environment deployment in progress](assets/examples/hasura/prod-environment-deployment.png)

This deployment to _prod_ has used exactly the same environment variables as we have defined for the _dev_ environment. However, it is common to change these per environment. Let's do that next.

### Override environment variables

 - Scroll down to the *__KintoBlocks__* section of the _Hasura_ project page in the _prod_ environment.
 - Press the __gear icon__ in the _Hasura_ KintoBlock.

This brings up the _Prod Configurations_ for the KintoBlock, and in the slide panel you can see a *__Environment Variables__* section.

 - Update the value of the `HASURA_GRAPHQL_ADMIN_SECRET` variable to another password. (e.g. `prod_secret`)
 - Press __Done Configuring__ in the top right corner to confirm the change.
 - Finally, press the __Deploy__ button in the bottom right corner to start the deployment of the change.

![Hasura KintoBlock configuration slide panel](assets/examples/hasura/hasura-config-slide-panel.png)

You'll get prompted with the *__Compare Versions__* slide panel that shows into detail the changes that will be applied with this deployment. Here we can see that the environment variables of the _Hasura_ KintoBlock will be modified.

 - Press __Confirm Project__ to start the deployment.
 - Wait for the deployment to complete.
 - Press the __Open__ button on the _Hasura_ KintoBlock and log in with the new password to confirm the changes were applied.

![Compare Versions slide panel for the environment variables change](assets/examples/hasura/confirm-prod-deploy.png)

Congratulations, you have completed this tutorial where you've deployed two separate instances of Hasura in their own respective environments.
