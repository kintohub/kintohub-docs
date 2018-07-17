---
title: Thinking Kinto
---

KintoHub believes that microservices are poised to rule the world, but as developers, we're missing piece to the puzzle on the how. In our perspective, microservices must follow these principles:

1) Microservices functionality and data are bounded contexts with a *single* responsibility made up of one or more functional API endpoints.
2) A single microservice instance should be able to support and scale an unlimited amount of applications through contextual API endpoints.

We know good things come in 3's but that's all we follow as of June 8th, 2018.  As a society of developers, let's start seeing microservices as the last time we write common functionality.  Microservices expose languages through APIs which empower developers to utilize business logic within any language to solve our problems at hand.

How this works is that every API endpoint needs contexts to the source of who is calling.  This may be a public webhook for Application `X` in environment `Y`, or it may be a call from a mobile client with Session `1337` in Application `N` in environment `M`. At the end of the day, businesses are duplicating logic.

**Thinking Kinto** begins with understanding that every API call comes with information about *who* is calling your service through *what* application environment.  Every API call is tracked with a required `Kinto-App-Id` and optional "Session Memory" information which allows you to perform logic that `User-Id: 9000` is logging in to Application `KintoHub` in environment `Production`.

### How does it work?

![Screenshot - Authorize to kintohub](/docs/assets/client-multi-app-services.png)

The magic here is that we no longer need to dedicate a single service per app/environment.  What are the benefits? Shared costs in hosting for everyone, and shared logic.

### Wait, what if I want custom functionality?

We're going to be introducing interesting ways to override and modify functionality based on your application.  We're looking forward to sharing more once we get there!

### What about security?

All of our services are black boxed.  You cannot send data out nor get data into the service.  Rest assured, we're working hard to ensure everything processed on KintoHub is safe and secure.