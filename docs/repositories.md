---
title: Git Repositories
---

## KintoBlocks

One of the main goals when we started working on creating microservices and KintoBlocks in general is to map as much as possible the dev workflow when they work on a GitHub or Bitbucket repository.

### Branches

Branches are basically the GitHub or Bitbucket branches in the user's repository. Whenever he creates a branch in the GitHub or Bitbucket we will sync the GitHub or Bitbucket repository and show that branch there.

### Tags

Tags are very similar to how they work in GitHub or Bitbucket, basically after working on a feature and its ready you tag it with a version, and that KintoBlock is gonna be locked when you check that tag (can't be changed)

### Sample workflow:

* On an existing repository add it to GitHub/Bitbucket
* Create a new branch `dev`
* Create a Microservice KintoBlock and add the repository
* Work on your feature and push the changes
* Open the KintoBlock and check the `dev` branch, make sure the last commit that was pushed was successfully built
* Create a tag on KintoHub

> Note: we are looking on syncing tags between GitHub/Bitbucket and KintoHub.

## Applications

We wanted to have the same mindset for how to deploy applications similar to the one we had for KintoBlocks

The obvious difference is Applications are not linked to a GitHub or Bitbucket repository, an application is a collection of KintoBlocks

### Draft

You can consider Draft as the only branch where you can activiley make changes in Applications, if you want to change/add KintoBlocks you update the Draft

### Tag

In Application every deploy must be associated to a Tag, when the Draft changes looks good you tag and deploy a new version to an environment.

The reason why every deploy has a Tag is flexibility.

For example when you are working on a feature you want to tag and deploy to staging, and when everything is tested and works you wanna deploy the same tag to production
