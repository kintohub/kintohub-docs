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

> Note: While creating a website you can use static files, with an `index.html` file for entry.

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

> Note: Environment Variables can be edited only by the creator of a KintoBlock.

## Deleting a KintoBlock (coming soon)
