---
title: Instant Deployments
---

KintoHub is made up of serverless microservices which make deployments occur in an instant.  Traditionally, you would have to wait until the resources are allocated for your services to come online, but with KintoHub, we download and start services upon the API call.

Traditional serverless setups have frameworks, [we do not](sdk-less-framework.md). We can be more compared to Heroku, where we are turning on your services in real time. Although, our average time to load is much lower today.  We use a pool of machines that are always on and waiting for your calls to ensure the fastest load time, aside from storing your code on locally cached SSDs.

Although this sounds awesome, there are some limitations that we are aware of and plan to create traditional deployments for mission critical services.

## Future Mission Critical Service Use Cases

There are several things under the hood that we're developing to ensure the following use cases are resolved

### High Traffic
As a *high traffic application*, I wish to upgrade my deployed version without experiencing any downtime or slow API calls.

### Pre-release
As a *mission critical application*, I wish to release a pre-release alongside my production environment to test and ensure the services pass all of our requirements before promoting to production.

### A/B Testing
As a *agile business*, I wish to test multiple versions of my services in real time to understand my product better.
