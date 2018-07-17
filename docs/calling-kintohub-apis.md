---
title: Calling KintoHub Apis
---

Authenticating to KintoHub is the first step to gaining access to KintoHub API endpoints that you or others create.

Every KintoApp has an Environment with a specific `clientId` and `clientSecret`.  Utilize these credentials, you can create a unique client session `token` to a specific versionized environment. This token has information that allows KintoHub to know which KintoBlocks you are interested in speaking to.

## How it works?

![Screenshot - Authorize to kintohub](/docs/assets/kintohub-api-authorization-flow.png)

Authorization Tokens act as first class citizens for the entire journey of calling KintoBlocks.  We utilize this token to do many things such as shared memory and dependency management.

## Public APIs

If you wish to call a public API without being authorized, you will lose some session feature benefits.

`public.api.kintohub.com/<clientId>/<microservice>/<path>` will allow you to call a specific API within an application environment.