---
title: Serverless
---

KintoHub has launched as a serverless first hosting provider.  Due to the complexities of ensuring all microservices are compatible with each other and ensuring functionality is awoken after being called upon; serverless allows all of this to happen at a much affordable and effective solution.

We built our own serverless technology which pools a common docker image which the Kinto Community shares. For example, node-9.1 based on alpine-3.7.  This allows a community of developers to not only share resources, but wake up language agnostic functionality in real time.

Using your Kinto `token`, we understand what kintoblock versions you wish to speak to and in parallel to translating or preparing your API call, we fire a load request to your desired service if it is currently not awake.

## How it works?

TODO: Diagram

## Improvements

As of June 8th, 2018, we have many more optimizations to make in order to reach 1.0.

** Faster service discovery upon activating a service
** Optimized build sizes and more efficient compression algorithms
** Faster active and inactive state management changes

Boot time consists of:

1) Receiving the API call: Multi-region goal ~20ms 
2) Receive and process API call and fire load request: goal 2ms
3) Attach session memory and configuration context to the API call: goal 1ms
4) (First call only) Load and launch build into warm container: Goal 100ms for 1mb build.
5) Startup time for service. Goal: up to the developer and the language of choice!

To resolve issues around health checks and keeping tradition serverless functions always on, we will provide an “Always on” and/or “dedicated” feature in the future.

### Related Articles

* [Creating an application](creating-an-application.md)
* [Talking to an application](talking-to-applications.md)
* [Tagging & deploying an application](tagging-and-deploying.md)
* [Adding dependencies to an application](adding-a-dependency-application.md
