---
title: SDK-Less Framework
---

KintoHub had a dream, that all programming languages can be equal!

When we began our journey in 2017, we set out to build a standard framework that would connection functionality once and for all.  After we ran into the task of supporting multiple languages, we realized the limitations through updates, bugs and keeping all languages compatible and in sync with the massive amount of changes that occurred within our company.

To be compatible with KintoHub, yo do *not* have to use a framework! Only comment.

Introducing APIDOC.js, our first approach of many to come to describing your API.  Swagger/OpenAPI is by far more popular, but much more complex to write and does not support multiple protocols easily.  Aside from all languages being equal, KintoHub also wanted to ensure you can *speak* to HTTP and gRPC with a single protocol. Other protocols like GraphQL, websockets, TCP and UDP are not forgotten and will be integrated over time.

Aside from APIDOC, you must have your server listening to port `80`

### How it works?

Microservices are black boxes. All that matters is that we know what goes in and what comes out over which protocol. Using apidocjs, we have forked and made minor modifications to support translation amongst protocols.

### What's in it for the future?

* gRPC is in Alpha
* GraphQL is around the corner
* Others can be suggested on our [Github Backlog](https://github.com/kintohub/backlog)

### Future ways to be compatible

* Swagger/OpenAPI support
* Feel free to suggest others on our [Github Backlog](https://github.com/kintohub/backlog)
