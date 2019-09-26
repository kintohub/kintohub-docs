---
title: KintoHub plans
sidebar_label: Plans
---

> The [Pricing](https://www.kintohub.com) page on the KintoHub website lists a side-by-side comparison and all differences between the Free, Pro and Enterprise plans.

## Pricing simplified

We like to keep things simple at KintoHub, not only in our products, but also how we charge for them. We hate bill-shock just as much as you do, therefore we have designed our pricing model with simple increments, and only charge based on __simple usage calculations__.

### Memory and storage usage

Our pricing is primarily based on __memory (RAM) and storage (disk) usage__. We do not charge for vCPU's, nor data transfers. Simple!

Your plan has a __base amount__ of memory and storage included, and you can __add on__ to that in simple increments, for memory and storage separately.

This is more __suitable for cloud-native applications__, where your consumption is based on active usage of resources.
It encourages you to keep your services small and nimble. As you need to scale, the consumption calculation is just a simple multiplication of the memory and storage needs per service.

### Serverless memory

Services that use serverless memory are turned on when an API request arrives, and are terminated after 30 seconds of inactivity.

This allows us to increase the density of services on the hardware and avoid idling services, so that you get the cost benefits in return.

### Always-on memory

Services that use always-on memory are never terminated due to inactivity, and kept always running for the best responsiveness. This more traditional approach does also mean that it is more expensive than serverless memory.

## A plan for everyone

Teams and individuals have different needs, therefore the below should guide you what plan is suitable for your situation.

KintoHub has 3 plans on offer; a __Free__ plan, __Pro__ plan and __Enterprise__ plan.

> __Special Beta offer__  
> During the *Beta period*, the Free Plan will have all the features of the Pro Plan included! 🎉
>
> Help us by trying out all features and [let us know what you think](https://www.kintohub.com/contact-us/).

### Free plan

The free plan is great for evaluating how KintoHub works and what the platform can offer for you.

A base amount of 512MB serverless memory and 1GB storage is included with the plan. This is sufficient to run small, hobbyist or development/testing workloads.

You can collaborate with up to 3 people on your projects.

You will have access to most features, so you can explore how KintoHub simplifies your development workflow and verify that your applications can be built and deployed. Multiple environments, promoting projects from environment to environment 

The only significant missing feature is Custom Services with Helm charts. However, for those services it makes more sense to have more memory, thus you could consider [upgrading](upgrading.md) to the Pro plan.

### Pro plan

The pro plan is intended for developers and teams that need to scale their application for larger capacity.

A base amount of 2GB serverless memory and 10GB storage is included with the plan. This is sufficient to run a production workload, with multiple services and a database.

If you need more capacity, you can easily add on more memory and storage in 1GB increments.

The Pro plan supports advanced project scenarios, including Always On Projects and Multi-Zone High Availability. We are working on Multi-Region, Canary, Blue/Green, Shadow and Multi-Cloud Projects.

With [Custom Services and Helm charts](kintoblocks/custom-services.md) you can easily deploy services like replicated databases, caches and queues. (e.g. MongoDB, PostgreSQL, Redis and RabbitMQ)

This plan allows unlimited collaboration with as many team members as needed. We are ready to assist via email and Slack if you need support.

### Enterprise plan

The enterprise plan allows customization of the platform and can be hosted on-premise and on private environments.

This plan is suitable if you need more control over how KintoHub is hosted. You'll have a dedicated cluster, and can also choose to host on-prem or on private multi-cloud.

Your DevOps team has full SSH/Kubernetes access, and has the ability to customize KintoHub scripts to your liking. This allows you to implement special security requirements, or integrate with other services.

We also offer enterprise-grade security and you will have access to additional support options and a 99.9% uptime SLA.

For this plan we will tailor to your needs and suggest you [request a demo or contact sales](https://www.kintohub.com/contact-us/) to discuss further.
