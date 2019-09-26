---
title: The KintoHub Workflow
---

KintoHub makes it easy to deploy cloud-native applications by _simplifying the workflow from source to production_.

![The KintoHub workflow; build KintoBlocks, add to Projects, deploy and call APIs](assets/introduction/getting-started/kintohub-workflow.svg)

## Build your source code into KintoBlocks

Your source code is what brings your applications to life. By empowering you to focus on your code, we believe you can innovate faster and build more amazing applications.

[KintoBlocks](kintoblocks/introduction.md) help by wrapping _extra logic and infrastructure plumbing_ around your source code to make the project creation process easier. However, you don't need to adopt any framework, you can just _use your current code as-is_.

 - [Website](kintoblocks/websites.md) KintoBlocks provide a __web endpoint__ (HTTP/HTTPS) by default.
 - [Microservice](kintoblocks/microservices.md) KintoBlocks are __lightweight apps and services__ supporting your backend. They can communicate amongst each other via the _internal network_. Many programming languages and frameworks are supported.
 - [Custom Service](kintoblocks/custom-services.md) KintoBlocks allow __pre-packaged popular open-source projects__ like databases, queues and caches, to be included with your project. Or you can define your own services.

<img src="/docs/assets/introduction/getting-started/workflow-sync.svg" alt="" width=200 style="float: left; padding-right: 1em" />  
Simply [connect KintoHub to your Git repositories](features/building/pulling-source-code.md) (GitHub, Bitbucket, GitLab, or private repos).

Then let KintoHub _compile and build_ the source code into cloud-native packages, using the popular [Docker container format](experimental/dockerfiles.md).

<div style="clear: both"></div>

## Combine KintoBlocks into a Project

Applications tend to be composed of multiple parts or tiers. For example, frontend and backend components, or a Web, API and Database tier.

This is similar to how _KintoBlocks can be combined into a [Project](projects/introduction.md)_. Mix and match KintoBlocks into a Project, and within that environment those KintoBlocks can communicate amongst each other.

Each KintoBlock can be configured with its own specific [environment variables](features/deploying/environment-variables.md). Think of passwords, connection strings, API URLs and other typical configuration settings you don't want to hard-code.

> _Tip:_ Because KintoBlocks allow an application to be split up easily, it supports individual team members to work on different blocks independently. It makes it easy to adopt a microservices architecture, whilst keeping the team aligned with a uniform workflow to deploy these services.

## Deploy projects to the cloud

<img src="/docs/assets/introduction/getting-started/teams-full@2x.png" alt="" width=300 style="float: right; padding-left: 1em; padding-bottom: 1em" />

We have intentionally kept it easy to deploy your applications. Once you've _composed and configured_ a project, simply press the __Deploy__ button to _push everything to the cloud_. We will hook up virtual machines, API endpoints, security constraints, logging, monitoring, etcetera for you.

It's equally easy to spin up [multiple environments](projects/environments.md) (e.i. DEV, TEST & PROD) in your projects. Just provide a name for a new environment, and press the [__Promote__ button](projects/promoting.md) to clone an existing environment into another one. Of course you can [customize the configurations of KintoBlocks per environment](projects/configure-kintoblocks.md).

<div style="clear: both"></div>

## Access your app & APIs immediately

Once your application is deployed, you can access its endpoints immediately.

 - [Websites](kintoblocks/websites.md) are automatically exposed to the internet via HTTP and HTTPS, and support Websockets.
 - [Microservices](kintoblocks/microservices.md) can optionally be accessed through the [API Gateway](features/operating/accessing-endpoints.md) by first authenticating with the KintoHub API. It is also possible to access microservices without authentication if you have enabled the public API support.

To see what is happening in your application, refer to the application [Logs](features/operating/logs.md) and [Metrics](projects/metrics.md) that have been automatically configured.
