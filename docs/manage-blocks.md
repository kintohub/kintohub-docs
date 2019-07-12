---
title: Manage KintoBlocks
---

## Editing KintoBlocks

The KintoBlock properties like `Description`, `Display Name`, `Port`, `Build command`, `Run` and `Doc format` specified during the creation can be edited and modified with new values.

To edit a KintoBlock follow the steps mentioned below:

1. Open a KintoBlock.

2. Click on the **pencil icon** displayed beside the title to modify the Description and Display Name of the KintoBlock.

3. Scroll down to **Builds & Repository** section.

4. Expand **Advanced Options** to view the `Port`, `Build command`, `Run`, and `Doc` fields

5. Specify new values wherever necessary.

6. Click on the **Save Changes** button to apply changes.


## Add to Deployments

KintoBlocks can be added straight away to any deployments in your workspace.

To add KintoBlocks to Deployments.

1. Open the KintoBlock.

2. Click on **Add To Deployments** button displayed on the bottom right of the **KintoBlock Manage** page.

3. In the pop-up dialog displaying the deployments in the workspace, select the environment.

4. Once the environment is selected, the **Deployment Manage** page is displayed and the KintoBlock is added to the deployment.

    ![Screenshot](/docs/assets/kb-add-deployments.png)

5. Click on **Deploy** at the bottom right of the page to push the new changes to your deployments.


## View Endpoints

Endpoint references pass the information needed to access a web service endpoint. This information is essential to access a service in KintoBlock. 

To view endpoint documentation:

1. Open any KintoBlock.

2. Click the **View Endpoints** button on the top right of the **KintoBlock Manage** page.

3. The **Endpoints Documentation** page consists of two sections:

   a. **Search Endpoints section** - The left pane contains a Search field to query and find relevant endpoint information.
       
   b. **Details section** - The details of the queried endpoints (E.g. URL parameters, Response code, and Response parameters) are displayed in the right pane.


## Delete KintoBlock

To delete a KintoBlock, follow the steps mentioned below:

1. Click on **KintoBlocks** displayed on the left navigation bar.

2. You will be redirected to **KintoBlocks List** page.

3. Click on the **Ellipsis icon** of KintoBlock you wish to delete.

4. Click on **Delete KintoBlock** option.

    ![Screenshot](/docs/assets/Delete_KB.png)

5. Type **DELETE** in the displayed field.

6. Click on the **Delete KintoBlock** button to confirm your decision.

Before deleting a KintoBlock, ensure that the KintoBlock is not currently deployed in any of the **Deployments**.

>Note: **Public** KintoBlocks will not be available for deletion.
