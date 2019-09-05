---
title: Session Memory
---

> _Experimental feature:_  
> Let us know what you like or dislike about this new functionality, so that we can ship it as a standard feature; [we appreciate all feedback!](https://www.kintohub.com/contact-us)
>
> Kindly note that the feature may be incomplete, works unexpectedly, may lack UI, and could be removed in future.

Session Memory is a advanced form of shared memory which traditionally runs on Redis and MemcacheD type of workloads.  Sessions and shared memory are important use cases that a majority of applications require.

## Use Case

As a developer, I wish to create a secure page where specified users may access.

To fulfill this use case, we need to know who is calling the specific page and what sort of access they have. IE: User-Id and Permissions.

## Development History

Originally, we attempted to use dynamic Json Web Tokens (JWT) which are modified and sent back to the client whenever a change is made.  This unfortunately ran into user stories that could not be fulfilled effeciently due to race conditions of generating JWT's across multiple stateless services that are being called asynchronously and updating shared session information in parallel.  This edge case would accidently override session data due to two refresh tokens having incorrect information at the same instance of time. We updated JWT tokens to act strictly as session tokens and created our own shared memory cluster.

## Introducing, Session Memory

Session memory is information that you can *get* and *set* using headers.  On your API response, you can use *{kintoblockname}-user-id* as the response in order to set your data.  If any service within the application environment states within the apidocjs *@apiHeader (Session) {String} {kintoblockname}-user-id*, your API call will receive that information from the session memory.  This feature is heavily dependent on correct @apiDoc information for both getting and setting data, but allows microservices to share information amongst each other such as user id's and permissions!


## How does it work?

![Session memory example](/docs/assets/client-session-memory-example.png)


The above image shows how you can have two microservices work together.  One of the highest use cases of application sessions is the unique identifier.  In this case, we want to authorize to the login service, then get the chats for the authorized user.

1. (Green) Call a Login Service. On the response, you will see the login block returns and sets the `userId` in memory
2. (Orange) Call Chat Service. During the lifetime of the call, KintoHub attaches the `userId` to the call prior to it reaching the Chat Service.

This allows the chat service to use contextual information. The chat service nows about the unique application environment id and the user id to process information and return the correct data to the client.

## Pricing
Pricing for session memory is free today, but an expensive resource.  We'll figure out a fair way to optimize the costs.

## Limitations

** This feature tightly couples dependencies together, but we are exploring ways to share data through pre-defined contracts upon setting up an application.
** Maximum size of the sum of all header responses must be below 8196K.

## What about shared global memory?

We're thinking about this and are writing a proposal on how it can be done in a similar header fashion.  Global shared memory allows an application to share information across stateless service, such as information that was grabbed from a database.  Additionally, we will be introducing traditional services such as managed redis services for the advanced use cases developers require.

## What about dynamic memory?

We have ideas around how to expose search requests for your memory so that key-value or dynamic "contains" searches may be performed. A proposal will be written in the near future.



