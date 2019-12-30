---
title: Hasura Example
sidebar_label: Hasura
---

## Overview
Hasura is a graphql engine which makes it easy to create CRUD graphql on top of postgres aside from stitching together APIs providing and eventing queue!

## Deployment

1. Apply this template to your [Github](https://github.com/kintohub/hasura-template/generate)
2. Create a [Website Block](https://beta.kintohub.com) on KintoHub:
3. Set the name of your block
4. Select `Dynamic Web App`
5. For `language` select `Custom Dockerfile`
6. Set the port to 8080
7. Hit the `Create` button
8. You're now good to build! Click `Build Latest Commit`. Once complete, Click  Now click `Add To Project` and Create a new Project.
9. Scroll to "KintoBlocks" section and in the Search Box type "Postgres" and select it to add a Postgres Database.
10. Click `Create New Project` at bottom right

The deployment can take up to 3 minutes. Once successful, click `Open URL` on the Hasura Block under "KintoBlocks" section.

## Usage

Click `Open URL` and start playing with hasura. We recommend using the advance migration functionality for multiple environments such as `dev` and `staging`.

## What's Next?

* [Password protect your hasura instance](https://docs.kintohub.com/docs/kintoblocks/websites#basic-auth-for-websites)
* [Setup `dev` and `staging` environments](https://docs.kintohub.com/docs/projects/environments)
* [Read KintoHub's block series on Hasura](https://blog.kintohub.com/from-idea-to-scale-with-hasura-kintohub-part-1-7-bbc97532424a)
