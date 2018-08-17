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

4. Enter the required info. This form will differ depending on the **type** of KintoBlock.

5. Click **Create New KintoBlock**
![Screenshot - Enter Info](/docs/assets/creating-a-kintoblock-3-4.png)
_That's it! You have created your first KintoBlock!_

6. On GitHub, go to the repository associated with this KintoBlock
![Screenshot - New GitHub Repo](/docs/assets/creating-a-kintoblock-5.png)

### Points to remember about Creating a Website

- You can use static files, with an `index.html` file for entry.
- If you have a website that needs to be built, like a project built in NPM, you will have to add a `Dockerfile` to your repo. An example dockerfile for this can be found [here](/docs/docker-examples)

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

## Custom Parameters (Coming Soon)
## Environment Parameters (Coming Soon)
## Deleting a KintoBlock (coming soon)
