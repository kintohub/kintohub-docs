---
title: Manage Environments
---

## Promote an Environment

Promoting an environment is an easy way of pushing the features of one environment to another environment. An environment can be promoted in just two clicks. 

To promote an environment, follow the steps mentioned below:
1. Open a **Deployment**.

2. Move on to the sidebar in the **Deployment Mange** page.

3. Click on the **Promote** button displayed for an environment. 

4. Click on the Deploy button displayed in Promote pop-up.

{ TODO: Raven Add Gif video of promoting the Dev environment to the Staging }

The environment gets deployed with the latest KintoBlocks available in the parent environment.


## Rollback version

The Rollback feature is used to revert deployments to a previous state or version. This is especially useful when a deployment that was pushed causes instability or makes the existing features dysfunctional.

To rollback a deployment, follow the steps mentioned below:

1. Open a **Deployment**.

2. Click on Expand Deployment History displayed in the **Status & History** section.

3. Click on the **Rollback** button displayed for an existing deployment made.

Now, the deployment will automatically rollback to the previous version.


## Shut Down an Environment

If an environment is no longer in use, it can be shut down. Environments that are shut down can be brought back into service by redeployment.

To shut down an environment, follow the steps mentioned below:

1. Open a **Deployment**.

2. Click on the **Shut Down** button displayed on top right of the page.

3. Click on **Shut Down Anyway** button displayed in the shut down pop up.

The environment shut down progress will get displayed in the Status & History section.