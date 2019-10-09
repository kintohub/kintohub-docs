---
title: Introducing KintoBlocks
sidebar_label: Introduction
---

KintoBlocks is our answer to pursue a simplified way to build, deploy and manage cloud-native applications.

## What is a KintoBlock?

With KintoBlocks we __package code and services in an uniform cloud-native way__ so that _they can be composed and deployed to the cloud easily_.

This does not require any frameworks or changes to your code, you can still write your code as usual, or use cloud-native technologies like Dockerfiles and Helm charts.

KintoHub pulls in your source code, service templates, and __builds__ these into KintoBlocks.

KintoBlocks come with __additional logic and infrastructure plumbing__, depending on the _flavor_.

Each KintoBlock is self-contained, containerized, universally compatible, combinable and shareable. This makes it easy to __compose a application out of multiple KintoBlocks__, and scale them as needed.

## KintoBlock flavors

We offer various KintoBlock flavors that add specialized functionality or bring your services to life.

### Websites

Host __static and dynamic websites or web applications__. A HTTP/HTTPS (SSL) endpoint proxies all incoming requests to your web server and handles load balancing. Any web server that has a HTTP endpoint can be exposed to the internet quickly.

These KintoBlocks often act as a gateway to other KintoBlocks over the internal network, where your backend logic resides.

Read more about [Website KintoBlocks](websites.md).

### Microservices

__Lightweight generic purpose services__ that are accessible over the internal network. Many programming languages and SDKs are supported. These KintoBlocks are suitable for handling your backend logic.

If you need to reach these services from the outside, the KintoHub API gateway makes it easy to access them with authentication. You can even expose microservices to the public internet.

Read more about [Microservice KintoBlocks](microservices.md).

### Custom Services

With custom services you can use __cloud-native service technology__ like [Helm charts](https://helm.sh) and Docker. Helm charts are pre-packaged services defined with templates, and makes it possible to quickly add services like databases, caches, and queues to your projects. For instance, if you need MongoDB, PostgreSQL, Redis or RabbitMQ, these can be deployed as a single instance or cluster.

Read more about [Custom Service KintoBlocks](custom-services.md).

### Tasks

Tasks allow you to __run serverless activities, functions and scripts__. These could be triggered as needed, or before and/or after a project. For example, integration tests, sending a notification or updating a database record.

_Coming soon:_ we are currently working on this new KintoBlock flavor.

### Cloud Services

With cloud services you can __provision new or add existing services from public cloud providers__ like Amazon AWS, Microsoft Azure and Google Cloud to your projects.

_Coming soon:_ we are currently working on this new KintoBlock flavor.

## Composing KintoBlocks

The [KintoHub workflow](introduction/kintohub-workflow.md) makes it easy to deploy an application composed out of multiple KintoBlocks. Your KintoBlocks can be added to multiple projects, and it allows you to reuse services across projects. You can either deploy the latest build, or a tagged version of the KintoBlock.

### Configuration

Every KintoBlock flavor has specific configuration options that you set when you create the KintoBlock. This could be build/run commands, ports, template files, etc.

Once the KintoBlock is created, you can [configure default environment variables](projects/configure-kintoblocks.md), and override those when deployed to a specific [environment](projects/environments.md).

### Internal network

KintoBlocks can communicate with each other over the private [internal network](features/operating/accessing-endpoints.md). Every service gets a hostname based on the name of the KintoBlock.

Say you have a frontend Website KintoBlock and a backend Microservice KintoBlock called `backend`. The frontend service could send HTTP calls to the backend with the URL `http://backend/`.

### KintoHub API gateway

Website KintoBlocks are exposed to the public internet. For other KintoBlocks, these are only accessible over the private internal network by default.

If you need to call into a service from the internet, the [KintoHub API gateway](features/operating/accessing-endpoints.md) makes this easy and secure. You'll need to authenticate first, and then pass a token with every request to be authorized to call the internal endpoints. 

## Under the hood

KintoBlocks are an abstraction that implements our opinionated approach on how to configure and deploy cloud-native applications. We do that to simplify how you compose and deploy applications.

We use several open-source cloud-native technologies to make that possible. Under the hood we build code and services into [Docker containers](https://www.docker.com/resources/what-container) and handle the [orchestration with Kubernetes](https://kubernetes.io). Thus we stand on the shoulders of giants. We bring you the same modern cloud technologies that big companies like Google, Amazon and Microsoft use, without a big learning curve and make them readily accessible.

## How to create a KintoBlock 

1. Select __KintoBlocks__ from the sidebar.

2. Press the __Create New KintoBlock__ card or the __+__ icon.

   ![Screenshot](/docs/assets/kb-create-options.png)

   > _Note:_ If you haven't linked your workspace to a _Git source_ like GitHub or Bitbucket yet, you will be prompted to connect first.

3. Choose the KintoBlock flavor that meets your needs.

   ![Screenshot](/docs/assets/select-kb-flavour.png)
