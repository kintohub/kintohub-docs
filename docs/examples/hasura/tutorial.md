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

  1. Select **KintoBlocks** from the sidebar.
  2. Click on the **Create New KintoBlock** card.
  3. Select the **Custom Service** KintoBlock flavor.

Once the **Choose Repository** page is displayed, specify the repository details as suggested below:

  4. Enter the name of the repository as `charts` in the **Repository** field.
  5. Set the **Source Folder Path** to `stable/postgresql`.
  6. Click on the **Continue** button.

In the Create Custom Service page, specify the details of the Custom Service KintoBlock by following these steps:

  7. Next, enter the **Name** e.g.`PostgreSQL`, the **Internal Name** will be automatically filled with `postgres`.
  8. Select the `Helm` in **Source Type** drop-down.
  9. Click on the **Create Custom Service** button.

View the KintoBlock newly created for the PostgreSQL database. Note that it points to the `master` branch of the repository by default.

#### Configure Helm arguments

Before the build is started, some arguments should be configured for the Helm template first.

  1. Click on the __Settings__ button displayed in the sidebar to modify the Helm arguments.
  2. Scroll down to the *__Helm Arguments (defaults)__* section, and enter the following arguments:
    1. __Argument__ `postgresqlPassword` with a password for the __Value__, e.g. `SuperS3cr3t`.
    2. __Argument__ `postgresqlDatabase` with a __Value__ of `hasura`.
    3. __Argument__ `persistence.size` with a __Value__ of `1Gi`, to override the default 8GB disk space. You can adjust this as needed.
    4. __Argument__ `fullnameOverride` with a __Value__ of `cs-postgres`, to override the service name to be used in the connection string.
  > _Tip:_ The below mentioned multi-line configuration can also be copied/pasted in the _Enter Helm Argument_ field, and it will set them at once:
  > ```ini
  > postgresqlPassword=SuperS3cr3t
  > postgresqlDatabase=hasura
  > persistence.size=1Gi
  > fullnameOverride=cs-postgres
  > ```
  3. Click the __Save Changes__ to store the Helm Argument.

#### Build the KintoBlock

  4. Select the master branch under __Branches__ tab in the sidebar.
  5. Click on __Build Latest Commit__ button to start the build with the provided Helm arguments.

Once the build is completed, it is ready to be deployed.

### Deploy PostgreSQL

The KintoBlock for a new deployment can be instantly added from the KintoBlock page:

  1. Click on the __Add to Project__ button and the menu with the projects appears.
  2. Click the __New Project__ button.
  3. Enter a name in the __Enter project name__ field, e.g. `hasura` and click on __Create__ button.

This will bring up the *__Create New Project__* page with the _Project Name_ (`hasura`) and _Environment Name_ (`dev`) already been filled out. In the KintoBlocks section, it can also be seen that the __Postgres__ KintoBlock has been added.

  4. Click on the __Create New Project__ to proceed.

Now, note that in the __Project Manage__ page, and the __Status & History__ section, the deployment is in progress.

  5. Wait until the deployment is successful.

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

  1. Select __KintoBlocks__ from the sidebar.
  2. Click on the __Create New KintoBlock__ card.
  3. Select the __Website__ KintoBlock flavor.

The _Website_ flavor is chosen because it will provide an HTTPS endpoint that can be reached via the GraphQL API and Hasura's console.

Once the __Choose Repository__ page is displayed, specify the repository details as suggested below:

  4. Enter the name of the repository as `hasura-block` in the **Repository** field.
  5. Click on the **Continue** button.

In the __Create Website__ page, specify the details of the Website KintoBlock by following these steps:

  6. Next, enter the **Name** e.g.`Hasura`, the **Internal Name** will be automatically filled with `hasura`.
  7. Select the `Helm` in **Source Type** drop-down.
  8. Choose the `Dynamic Web App` in **Choose a Type**.

This will bring up the additional section for the _Dynamic Web App_. Some settings will be irrelevant since the Dockerfile will override these options. However, due to Dockerfiles being an experimental feature, some options are still required to complete, therefore they are set to dummy values:

  9. Set the __Language__ and __Version__ e.g. `Node.js` and `11.7.0-alpine`.

Selecting _Node.js_ has changed the __Port__ value to `80`. Hasura listens on port `8080` instead, thus:

  10. Change __Port__ to `8080`.
  11. Click on the __Create Website__ button.

View the newly created KintoBlock for the Hasura API, and note that it points to the `master` branch of the repository by default.

#### Configure environment variables

Before starting the build, some environment variables associated with the build are required to be specified:

  1. Click on the __Settings__ button displayed in the sidebar to modify the Helm arguments.
  2. Scroll down to the *__Environment Variables (defaults)__* section, and enter the arguments mentioned below:
    1. __Variable__ `HASURA_GRAPHQL_DATABASE_URL` with the connection string to the database. If you followed the tutorial to set up the database, use as the connection string `postgres://postgres:SuperS3cr3t@cs-postgres:5432/postgres` __Value__. This entry can be marked as required with the __Required__ checkbox.
    2. __Variable__ `HASURA_GRAPHQL_ENABLE_CONSOLE` with a __Value__ of `true` to enable the Hasura console.
    3. __Variable__ `HASURA_GRAPHQL_ADMIN_SECRET` with a password value to protect the Console from being accessed publicly, e.g. `dev_secret`. This entry can be marked as required with the This is __Required__ checkbox.
  > _Tip_: The below-mentioned multi-line configuration can also be copied/pasted in the _Enter Variable_ field, and it will set them at once:
  > ```ini
  > HASURA_GRAPHQL_DATABASE_URL=postgres://postgres:SuperS3cr3t@cs-postgres:5432/postgres
  > HASURA_GRAPHQL_ENABLE_CONSOLE=true
  > HASURA_GRAPHQL_ADMIN_SECRET=dev_secret
  > ```
  3. Click the __Save Changes__ to store the Environment Variables.

#### Build the KintoBlock

  4. Select the `master` branch under the __Branches__ tab in the sidebar.
  5. Click on *__Build Latest Commit__* button to start the build with the provided Environment Variables.

Once the build is completed, it is ready to be deployed.

### Deploy Hasura

Depending on whether you already created a project in the PostgreSQL steps, either 
(A) add to that existing one, or 
(B) create a new project.

#### A) Add to existing project

The KintoBlock for an existing deployment can be added instantly from the KintoBlock page.

  1. Click on the __Add to Project__ button and the menu with the projects appears.
  2. Select under the desired project in the environment. (e.g. `dev` under `hasura`)

The existing _Hasura_ project page appears, and in the *__KintoBlocks__* section, it can be seen that the _Hasura_ KintoBlock has been added.

  3. Next, press __Deploy__ to proceed.

The *__Compare Versions__* slide panel is displayed with the added _Hasura_ KintoBlock.

  4. Click on the __Confirm Deployment__ to start the deployment.

In the *__Status & History__* section, we can see that the deployment is in progress.

  5. Wait until the deployment is successful.

#### B) Create new project

The KintoBlock for an existing deployment can be added instantly from the KintoBlock page.

  1. Click on the __Add to Project__ and the menu with the projects appears.
  2. Click the __New Project__ button.
  3. Enter a name in the __Enter project name__ field, e.g. `hasura` and click on the __Create__ button.

This will bring up the *__Create New Project__* page with the _Project Name_ (`hasura`) and _Environment Name_ (`dev`) already filled out.

In the *__KintoBlocks__* section, it can be seen that the _Postgres_ KintoBlock has been added.

  4. Click on the *__Create New Project__* to proceed.

The deployment in progress can be seen in the *__Status & History__* section of the _Hasura_ project page.

  5. Wait until the deployment is successful.

### Accessing the Hasura Console

On the _Hasura_ project page, scroll down to the *__KintoBlocks__* section.

  1. Click on the __Open__ button on the _Hasura_ KintoBlock to open its endpoint in a new browser tab.
  2. Once the Hasura login screen is displayed, enter the _admin secret_ from the configuration, e.g. dev_secret.

![Hasura login screen asking for the admin secret](/docs/assets/examples/hasura/hasura-login.png)

Congratulations, you have Hasura up and running on KintoHub!

Next up, let's create another environment for production use.

## Multiple environments

In the previous steps, the deployments were done in the `dev` environment. This is great for testing development activities. For production workloads, it more likely that a separate production environment called `prod` will be used so that the two don't interfere with each other.

### Create a production environment

In the sidebar of the _Hasura_ project page:

  1. Click on the __Add New Environment__ button.

This brings up a *__Add New Environment__* dialog.

  2. Enter in the __Environment Name__ field the value `prod`.
  3. Click on the __Add New Environment__ button to confirm.

![Add New Environment dialog](/docs/assets/examples/hasura/add-new-environment.png)

This creates a new _PROD_ environment in the sidebar, below the _DEV_ environment.

  4. Use the *__drag & drop handle__* next to the environment name to drag the _PROD_ environment above the _DEV_ environment.

![DEV and PROD environments in the sidebar](/docs/assets/examples/hasura/two-environments-sidebar.png)

Since the environments are in the right order, the KintoBlocks can be promoted from one environment to the other.

  5. Click on the __Promote__ button.

This brings up the *__Promote__* dialog, with a confirmation message to indicate that the _dev_ environment is ready to be promoted as the _prod_ environment.

  6. Click on the __Deploy__ button.
  7. __Compare Version__ slide panel displays the changes made during the promoting.
  8. Click on the __Confirm Deployment__ to start the new deployment into the _prod_ environment.

Note that the first deployment for the **PROD** environment is in progress.

  9. Wait for the deployment to succeed.
  10. Click on the **Open** button on the **Hasura** KintoBlock to see that the Hasura Console can be accessed.

![PROD environment deployment in progress](/docs/assets/examples/hasura/prod-environment-deployment.png)

This deployment to _prod_ has used exactly the same environment variables as it has been defined for the _dev_ environment. However, it is common to change these per environments. Let's do that next.

### Override environment variables

  1. Scroll down to the __KintoBlocks__ section of the _Hasura_ project in the project manage page of the _prod_ environment.
  2. Click on the __gear icon__ in the _Hasura_ KintoBlock.

This brings up the _Prod Configurations_ for the KintoBlock, and in the slide panel, an *__Environment Variables__* section can be seen.

  3. Modify the existing value of the `HASURA_GRAPHQL_ADMIN_SECRET` variable to another password. (e.g. `prod_secret`)
  4. Click on the __Done Configuring__ in the top right corner to confirm the change.
  5. Click on the __Deploy__ button.

  ![Hasura KintoBlock configuration slide panel](/docs/assets/examples/hasura/hasura-config-slide-panel.png)

The *__Compare Versions__* slide panel will show details of the changes that will be applied with this deployment. Here it can be seen that the environment variables of the _Hasura_ KintoBlock will be modified.

  1. Click on the __Confirm Project__ to start the deployment.
  2. Wait for the deployment to complete.
  3. Click on the __Open__ button on the _Hasura_ KintoBlock and log in with the new password to confirm the changes were applied.

![Compare Versions slide panel for the environment variables change](/docs/assets/examples/hasura/confirm-prod-deploy.png)

Congratulations, you have completed this tutorial where you've deployed two separate instances of Hasura in their own respective environments.
