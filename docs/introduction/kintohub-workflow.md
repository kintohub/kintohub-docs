---
title: The KintoHub Workflow
---

KintoHub makes it easy to deploy cloud-native applications by _simplifying the workflow from source to production_.

![The KintoHub workflow; build KintoBlocks, add to Projects, deploy and call APIs](assets/introduction/getting-started/kintohub-workflow.svg)

## Step 1 - Build your source code into KintoBlocks

Your source code is what brings your applications to life. By empowering you to focus on your code, we believe you can innovate faster and build more amazing applications.

<img src="/docs/assets/introduction/getting-started/workflow-sync.svg" alt="" width=200 style="float: left; padding-right: 1em" />  
Simply [connect KintoHub to your Git repositories](features/building/pulling-source-code.md) (GitHub, Bitbucket, GitLab, or private repos).

Then let KintoHub _compile and build_ the source code into cloud-native packages, using a __Build__ and __Start__ command or the popular [Docker container format](www.docker.com).

<br><br>

[KintoBlocks](kintoblocks/introduction.md) help by wrapping _extra logic and infrastructure plumbing_ around your source code to make the deployment, updating and debugging process easier. However, you don't need to adopt any framework, you can just _use your current code as-is_.

 - [Website](kintoblocks/websites.md) KintoBlocks provide a __web endpoint__ (HTTP/HTTPS) by default and optionally allow you to password protect.
 - [Microservice](kintoblocks/microservices.md) KintoBlocks are traditionally known as __APIs, Apps or Services__ supporting your backend. You can expose them to the public or protect them for internal service to service communication only. 
 - [Custom Service](kintoblocks/custom-services.md) KintoBlocks are stateful, data driven __Databases (MongoDb), Message Queues (Kafka) or Shared Memory (Redis)__ services into the cloud. You can deploy your own Dockerfile otherwise use a [Helm Chart](https://helm.sh) to define a production grade service. [There are hundreds ready made helm charts available](https://github.com/helm/charts).
 - [Jobs](kintoblocks/jobs.md) KintoBlocks are __Pre-Deployment, Post-Deployment or Time Based (Cron Job)__ triggered code. Jobs can be anything from a __Database Backup__ to a successful build __Slack Bot Message__ notification.


<div style="clear: both"></div>

## Step 2 -Combine KintoBlocks into a Project

Web, Mobile, AI or Game products tend to be composed of multiple parts. Our [TodoList Example](examples/todo-list/tutorial.md) contains:

* __Frontend (Website) -__ Serving the user interface
* __Backend API (Microservice) -__ Creating, Update and Deleting logic for the Todo List
* __Database (Custom Service) -__ MongoDb data storage for saving the todo list items forever

KintoBlocks should be considered to be _lego-like bricks_ of your entire product or app broken down into individual parts that are combined into a single [Project](projects/introduction.md).
 
Each KintoBlock can be configured with its own specific [environment variables](features/deploying/environment-variables.md) __per environment__. Think API keys/secrets, connection strings, feature flags and other typical configuration settings you don't want to hard-code.

> _Tip:_ Because KintoBlocks allow an application to be split up easily, it supports individual team members to work on different blocks independently. It makes it easy to adopt a microservices architecture, whilst keeping the team aligned with a uniform workflow to deploy these services.

## Step 3 - Deploy projects to the cloud

<img src="/docs/assets/introduction/getting-started/teams-full@2x.png" alt="" width=300 style="float: right; padding-left: 1em; padding-bottom: 1em" />

Once you've _composed and configured_ one or many __KintoBlocks__ into a __Project__, simply press the __Deploy__ button to _push everything to the cloud_. We will hook up virtual machines, API endpoints, security constraints, logging, monitoring, etcetera for you.

It's also easy to create and clone [multiple environments](projects/environments.md) __(DEV, TEST & PROD)__ depending on your team's workflow. We also have a [__Promote__ button](projects/promoting.md) making it easy to clone or deploy your next best features or hotfixes to your customers or QA team.
<div style="clear: both"></div>

## 4 - Access your Websites & APIs

Once your **Project** is deployed, you can access its endpoints immediately.

 - [Websites](kintoblocks/websites.md) are automatically exposed to the internet via HTTP and HTTPS, and support Websockets.
 - [Microservices](kintoblocks/microservices.md) Microservices can be configured and accessed through a secured __API Gateway__, an unsecured public endpoint _(great for webhooks)_ or internally for server to service communication only. 
 - [Custom Services](kintoblocks/custom-services.md) only support an internal endpoint for your __Microservices__ or __Websites__ to access securely.
 
To see what is happening in your application, refer to the application [Logs](features/operating/logs.md) and [Metrics](projects/metrics.md) that have been automatically configured.