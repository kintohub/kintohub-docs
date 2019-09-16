---
title: Multi-environment Hasura
sidebar_label: Multi-env Hasura
---

The [open-source project Hasura](https://hasura.io) makes it incredibly easy to setup a [GraphQL API](https://graphql.org) that has async processing patterns built-in.

Hasura does this by leveraging [PostgreSQL](https://www.postgresql.org) as a backing store. On top of that Hasura adds queuing and a subscription mechanism.

This tutorial shows how you can setup Hasura easily with KintoHub, and do that for multiple environments.

Prefer a video instead? See Hasura in action on KintoHub in this [recording of our talk at OSCON](https://www.youtube.com/watch?v=UTmCPEtxALk).

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/UTmCPEtxALk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prepare a PostgreSQL database

Since Hasura depends on PostgreSQL, we'll first need to prepare a database.

> Already got an existing PostgreSQL database? Skip to the [next section](#deploy-hasura).

### Fork Helm charts

With [Custom Service KintoBlocks](kintoblocks/custom-services.md) it is easy to deploy ready-made cloud-native packages using [Helm charts](https://helm.sh). PostgreSQL is available as a Helm chart from the [Helm Hub](https://hub.helm.sh/charts/stable/postgresql).

To proceed deploying a new PostgreSQL database,
 - browse to the [`helm/charts` repository on GitHub](https://github.com/helm/charts), and
 - use the __Fork__ button to add the repo to your own GitHub account.

![Fork button on GitHub](https://github-images.s3.amazonaws.com/help/bootcamp/Bootcamp-Fork.png)

Now there is a forked _charts_ repository under your own GitHub account, KintoHub can refer to it.

### Create a PostgreSQL KintoBlock

In KintoHub:

 - Select __KintoBlocks__ from the sidebar.
 - Press __Create New KintoBlock__.
 - Select the __Custom Service__ KintoBlock flavor.

On the *__Create KintoBlocks__* page:

 - Enter a __KintoBlock Name__ e.g. `postgres`.
 - Set a __Display Name__ e.g. `PostgreSQL DB`.
 - Fill out a __Description__ e.g. `PostgreSQL database server`.
 - Next, as __Service Project Format__ choose `Helm`.
 - Set the __Helm Chart Source Folder__ to `stable/postgresql`.
 - Next, under the *__Repository__* section, type in the __Repository__ field `charts`. A drop-down list appears and your forked `charts` repository should be in it, select the repository from the list.
 - Finally, press __Create New KintoBlock__.

You'll see in a new page the KintoBlock for the PostgreSQL database, and it points to the `master` branch of the repository by default.
Before we can start the build, we'll specify some arguments for the build process first.

 - Scroll down to the *__Helm Arguments__* section, and enter the below 4 arguments:
   1. __Argument__ `postgresqlPassword` with a password for the __Value__, e.g. `SuperS3cr3t`.
   2. __Argument__ `postgresqlDatabase` with a __Value__ of `hasura`.
   3. __Argument__ `persistence.size` with a __Value__ of `1Gi`, to override the defailt 8GB disk space. You can adjust this as needed.
   4. __Argument__ `fullnameOverride` with a __Value__ of `cs-postgres`, to override the service name to be used in the connection string.
   > _Tip:_ You can also copy/paste the below multi-line configuration in the _Enter Helm Argument_ field, and it will set them at once:
   > ```ini
   > postgresqlPassword=SuperS3cr3t
   > postgresqlDatabase=hasura
   > persistence.size=1Gi
   > fullnameOverride=cs-postgres
   > ```
 - Press the __Save Changes__ to store the arguments.
 - Next, scroll up to the *__Builds & Repository__* section and press __Build Latest Commit__ to start the build with the provided Helm arguments.

Once the build is completed, it is ready to be deployed.

### Deploy PostgreSQL

From the KintoBlock page, we can immediately add this KintoBlock to a new deployment.

 - Press __Add to Deployment__, and press the __New Deployment__ button.
 - Enter a name in the _Enter deployment name_ field, e.g. `hasura`.
 - Press the __Create__ button.

This will bring up the *__Create New Deployment__* page. The _Deployment Name_ and _Environment Name_ have already been filled out.

Because we want to handle multiple environments later:

 - Change __Environment Name__ to `dev` instead, to represent a development environment.
 - Next, press __Create New Deployment__ to proceed.

Now we see the deployment page, and in the *__Status & History__* section the deployment is in progress.

 - Wait until the deployment succeeds.

## Setup Hasura

With an existing PostgreSQL database ready, we can setup the Hasura API endpoint.

### Fork Hasura Dockerfile

We are going to use an _experimental feature_ in KintoHub that uses a _Dockerfile_ to determine the contents of the KintoBlock.

 - Browse to the [`kintohub/hasura-block` repository on GitHub](https://github.com/kintohub/hasura-block).
 - Use the __Fork__ button to add the repo to your own GitHub account.

Now there is a forked _hasura-block_ repository under your own GitHub account, KintoHub can refer to it.

The repository contains only a `LICENSE` and `Dockerfile` file. The Dockerfile is very simple, it refers to the latest `hasura/graphql-engine` [Docker image from Hasura](https://hub.docker.com/r/hasura/graphql-engine) only:

```
FROM hasura/graphql-engine:latest
```

> _Note:_ We are working on adding Dockerfile and docker image support to Custom Services in future, so you can skip this intermediate step to fork the repository.

### Create a Hasura KintoBlock

In KintoHub:

 - Select __KintoBlocks__ from the sidebar.
 - Press __Create New KintoBlock__.
 - Select the __Website__ KintoBlock flavor.

We choose a _Website_ flavor because it will provide a HTTPS endpoint for us so that we can reach the GraphQL API and Hasura's console.

On the *__Create KintoBlocks__* page:

 - Enter a __KintoBlock Name__ e.g. `hasura`.
 - Set a __Display Name__ e.g. `Hasura`.
 - Fill out a __Description__ e.g. `Hasura API`.
 - Next, as __Website Type__ choose `Dynamic Web App`.

This will bring up the *__Advanced Options__* section for the _Dynamic Web App_. Some settings will be irrelevant, since the Dockerfile will override these options. However, due to Dockerfiles being an experimental feature, some options are still required to complete, therefore we set them to dummy values:

 - Set __Language__ and __Version__ to the first values in the drop-lists, e.g. `Node.js` and `11.7.0`.

Selecting _Node.js_ has changed the __Port__ value to `80`. This is the same port number to which Hasura listens.

 - Finally, press __Create New KintoBlock__.

You'll see in a new page the KintoBlock for the Hasura API, and it points to the `master` branch of the repository by default.
Before we can start the build, we'll first specify some default environment arguments that are associated with the build.


//// TODO: Build Arguments vs Default Environment Variables.

 - Scroll down to the *__Helm Arguments__* section, and enter the below 4 arguments:
   1. __Argument__ `postgresqlPassword` with a password for the __Value__, e.g. `SuperS3cr3t`.
   2. __Argument__ `postgresqlDatabase` with a __Value__ of `hasura`.
   3. __Argument__ `persistence.size` with a __Value__ of `1Gi`, to override the defailt 8GB disk space. You can adjust this as needed.
   4. __Argument__ `fullnameOverride` with a __Value__ of `cs-postgres`, to override the service name to be used in the connection string.
   > _Tip:_ You can also copy/paste the below multi-line configuration in the _Enter Helm Argument_ field, and it will set them at once:
   > ```ini
   > postgresqlPassword=SuperS3cr3t
   > postgresqlDatabase=hasura
   > persistence.size=1Gi
   > fullnameOverride=cs-postgres
   > ```
 - Press the __Save Changes__ to store the arguments.
 - Next, scroll up to the *__Builds & Repository__* section and press __Build Latest Commit__ to start the build with the provided Helm arguments.

Once the build is completed, it is ready to be deployed.


hasura-block
https://github.com/kintohub/hasura-block

```
HASURA_GRAPHQL_DATABASE_URL=postgres://postgres:SuperS3cr3t@cs-postgres:5432/postgres
HASURA_GRAPHQL_ENABLE_CONSOLE=true
```

### Deploy Hasura

Docker image: https://hub.docker.com/r/hasura/graphql-engine

### Accessing the Hasura console

calling into Hasura 

- microservcie?
- website

## Multiple environments


### Create a production environment

based on the development environment


https://github.com/kintohub/patroni