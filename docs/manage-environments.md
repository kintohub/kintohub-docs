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

    ![Screenshot](/docs/assets/promote-env.png)

The environment gets deployed with the latest KintoBlocks available in the parent environment.


## Rollback version

The Rollback feature is used to revert deployments to a previous state or version. This is especially useful when a deployment that was pushed causes instability or makes the existing features dysfunctional.

To rollback a deployment, follow the steps mentioned below:

1. Open a **Deployment**.

2. Click on Expand Deployment History displayed in the **Status & History** section.

3. Click on the **Rollback** button displayed for an existing deployment made.

   ![Screenshot](/docs/assets/roll-back-env.png)

Now, the deployment will automatically rollback to the previous version.


## Shut Down an Environment

If an environment is no longer in use, it can be shut down. Environments that are shut down can be brought back into service by redeployment.

To shut down an environment, follow the steps mentioned below:

1. Open a **Deployment**.

2. Click on the **Shut Down** button displayed on top right of the page.

3. Click on **Shut Down Anyway** button displayed in the shut down pop up.

    ![Screenshot](/docs/assets/shutdown-deployment.png)

The environment shut down progress will get displayed in the Status & History section.


## Environment Deletion

To delete an environment, follow the steps mentioned below:

1. Open a **Deployment**.

2. Select the environment from sidebar displayed in the **Deployment Manage** page.

3. Click on the **Delete Environment** link dispalyed on the environment card and move on to **Permanent Deletion** section.

4. Click on **Delete Environment** button.

5. Enter **DELETE** in the confirm field.

6. Click on **Delete Environment** button.

    ![Screenshot](/docs/assets/delete-environment.png)

    > Note: Environment will get deleted permanently. So any active deployments in this environment will be shutdown.
