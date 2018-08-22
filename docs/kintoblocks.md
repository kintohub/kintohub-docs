---
title: KintoBlocks
---

## What is a KintoBlock


KintoBlocks are the new standard format for microservices.
They are self-contained, containerized, universally compatible, language agnostic, combineable and shareable bricks of back-end logic.

We take off your shoulders the hassle of library configuration, deployment, and infrastructure so you can focus on writing exactly the features you need.

## Creating a KintoBlock

Creating your first KintoBlock is super easy.

1. Select **KintoBlocks** from the sidebar

2. Click **Create New KintoBlock**
![Screenshot - Create New KintoBlock](/docs/assets/creating-a-kintoblock-1-2.png)

3. Select the type of KintoBlock : We have three types of KintoBlock in the pipeline but currently you can select either **Microservice** or **Website**
![Screenshot - Create New KintoBlock](/docs/assets/select_kintoblock_type.png)

4. Enter the required information. This form will differ depending on the **type** of KintoBlock.

5. Click **Create New KintoBlock**
![Screenshot - Enter Info](/docs/assets/creating-a-kintoblock-3-4.png)
_That's it! You have created your first KintoBlock!_

6. On GitHub, go to the repository associated with this KintoBlock
![Screenshot - New GitHub Repo](/docs/assets/creating-a-kintoblock-5.png)

### Points to remember about Creating a Website

- You can use static files, with an `index.html` file for entry.

- If the website needs to be built, like a project built in webpack for example, you will have to add a `Dockerfile` to your repo. This can be a custom dockerfile if you are already familiar with Docker, otherwise please refer to this dockerfile example:

```
FROM node:8.4

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build
```

All dockerfile examples can be found [here](/docs/docker-examples)

## Tagging a commit

You cannot add a KintoBlock to an application without having tagged the latest commit. This is a similar concept to tagging in GitHub.
This means that if you tag something in KintoHub this will preserve the state of the KintoBlock at the time of tagging. You can no longer change the dependencies of this KintoBlock.

> You can only create a tag from a branch

The steps to tag a commit are:

1. Open the **KintoBlock** you want to tag
2. Click **Tag Latest Commit**
![Screenshot - Tag Lastest Commit](/docs/assets/tagging-a-commit-1-2.png)
3. Enter a desired tag number and notes, then click Tag Latest Commit
![Screenshot - Enter Info](/docs/assets/tagging-a-commit-3.png)

### Why would I want to tag my KintoBlock?

The main reason to tag a KintoBlock is to add it to an application, think of it as a release, so when you have your KintoBlock finished and want to update it in an application you can tag it and select the tag in the application. This is a way to control the released versions of your KintoBlock.

## Environment Variables

![Screenshot - Environment Variables](/docs/assets/environment_variables.png)

Environment variables are used to control static information that you want to control in the application.. These are often configurations like  `PRIVATE_KEYS` that you do not want to expose in your code. They are static between multiple environments. You cannot change an environment variables between applications and their environments.

In the near future configuration management will be used to configure your application as a per-environment use case.

Inside your KintoBlock you can acess these via `env` variables. 

In a **Node.js** KintoBlock for example these are accessed using this syntax:

```
process.env.WHATEVER_KEY_THE_DEVELOPER_USED.
```

These are accessed during the build process so when updating them you need to add a new commit to that branch (This is due to be updated soon, but currently the only way to update **Environment Variables** is to trigger a new build with a new commit).

### Managing Environment Variables

The section on Environment Variables lives on the **KintoBlock Edit** page, towards the end of the form. They are specific to a **branch** of a KintoBlock, so if you switch branches and want to use that particular branch in a KintoApp you will need to input the **Environment Variables** on that branch too.


### Points to remember about Environment Variables

- These can only be edited by the creator of a KintoBlock.
- If you are building a block that is shared, will be included in multiple applications, and will require information from the end user, it is best to use *Custom Paramaters*.


## Custom Parameters

Custom Parameters are used to pass information to your **KintoBlock Microservice** . These values are editable by the end user in the case of shared KintoBlocks, and also overridable per environment at a KintoApp level for cases where multiple apps are using the same **KintoBlock**. For more insight into KintoHub's structure please refer to [Thinking Kinto].(https://docs.kintohub.com/docs/thinking-kinto). In the case of shared KintoBlocks custom params, custom key/value data can be added to the headers which can give you context as to what and who is calling your block.

When creating KintoBlock you can assign default values to your Custom Parameters and these can be marked required if they are necessary for your KintoBlock to function, for example a Sendgrid API or Secret.

Custom Parameters are accessible inside your code within each call. You must specify when to use them, and whether they are required or optional via API doc headers, in a **Node.js** application adding the header to a call will look like this, values with `[`these brackets`]` are optional:

`@apiHeader (Config) {String} sendgridAPI` - A required value 
`@apiHeader (Config) {String} [sendgridSecret]` - An optional value



This will be injected as a header into this call, and accessible in the usual way you would access headers. In a **Node.js / Express** KintoBlock it would look like this: 

```
  const githubToken = req.get('sendgridAPI')
```

### Points to remember about Custom Parameters 
- Use these to set variables that the customer will need to set or change, like API keys for external APIS.
- Set default values to guide the end user.
- Mark important **Custom Parameters** as required so they are not accidentally left out.

## Deleting a KintoBlock (coming soon)
