---
title: Manage Deployments
---

## Add or Remove KintoBlocks

A Deployment can consist of one or more KintoBlocks. The KintoBlocks can be added or removed from deployment as and when the features are augmented. 

To add or remove KintoBlocks, follow the steps mentioned below:

1. Open a **Deployment**.

2. Under **KintoBlocks** section, click on the **+** icon displayed in the **KintoBlocks search bar**.

3. Search for the required KintoBlocks.

4. Select it from the dropdown to add them to deployments.


To delete a KintoBlocks, navigate to the KintoBlock section.

1. Click on the **X** icon displayed at the top left of the KintoBlock to remove it.

2. Click on the **Deploy** button to apply the new changes to the deployments.

   ![Screenshot](/docs/assets/delete-kb-deployments.png)
   
## Automatically Deploy your Apps

**Auto Deployment** toggle is used to automatically deploy and test light changes made in your successive builds of a KintoBlock version, without going through the hassle of manual deployment for each.

To enable `Auto Deployment`, follow the steps mentioned below:

1. Open an existing Deployment.

2. Scroll down to the KintoBlocks section.

3. Now enable Auto Deployment toggle.

4. Currently, to save the changes made, we need to rebuild and deploy the KintoBlock or edit environment variables.

   ![Screenshot](/docs/assets/Auto-Deployment.png)

## High Availability

This toggle gives the ability to enable high availability on a service. When `High Availability` toggle is turned on, your instances will spread across multiple servers and availability zones, thus helping you with better performance and reliable service.

This toggle can be easily configured and can be configured per environment. You may want to have high availability disabled for test environments, but staging and production may want this to be enabled.

To enable High Availability, follow the steps mentioned below:
1. Open an existing or new **Deployment**.

2. Scroll down to the **KintoBlocks** section.

3. Now enable **High Availability** toggle.

4. Currently, to save the changes made, we need to either re-build the blocks or make changes to the environment variables.

   ![Screenshot](/docs/assets/High-Availability.png)

## Configure KintoBlocks

KintoBlocks consists of **environment variables** which are used to set the configuration. Environment variable values can be edited and updated whenever it is required.

To configure the dependencies, follow the steps mentioned below:

1. Open a **Deployment**.

2. Under KintoBlocks section, click on **Configure KintoBlocks** button.

3. The list of KintoBlocks in the environment will be displayed on the left pane of the **Edit Dependencies** page.

4. **Environment variables** of the KintoBlocks are displayed on the right pane of the page.

5. Select the KintoBlock for which environment variable value needs to be updated.

6. Enter the new value for the environment variable.

7. Click on the **Save Changes** button to apply the changes.

   ![Screenshot](/docs/assets/edit-dependencies-page.png)

    > Note: Only **environment variable values** can be edited in Edit Dependencies page.


## Deployment Deletion

To delete a Deployment, follow the steps mentioned below:

1. Click on **Deployments** displayed on left navigation bar.

2. You will be navigated **Deployments List** page.

3. Click on the **Ellipsis icon** of any Deployment.

4. Click on **Delete Deployment** option.

5. Enter **DELETE** in the confirm field to confirm your decision.

6. Click on **Delete Deployment** button.

    ![Screenshot](/docs/assets/delete-deployments.png)
