---
title: Manage KintoBlocks
---

## Editing KintoBlocks

The KintoBlock properties like `KintoBlock Name`, `Language`, `Version`, `Description`, `Environment Variables` and `Hardware Configuration` specified during the creation can be edited and modified with new values.

>Note: **Environment Variables** are not specified during the creation of KintoBlock.

To edit a **Static Website** KintoBlock when `Build Required` toggle is `On` follow the steps mentioned below:

1. Open a Static Website KintoBlock.

      ![Settings Button](/docs/assets/kintoblock-settings.png)

2. Click on **Settings** button displayed in sidebar to modify the information.

3. Edit Basic Info of the KintoBlock like `KintoBlock Name`, `Language`, `Version`, and `Description`.

      ![Editing Information of KintoBlock](/docs/assets/kintoblock-basic-info.png)

4. Click on the **Save Changes** button.

To edit a **Static Website** KintoBlock when `Build Required` toggle is `Off` follow the steps mentioned below:

1. Open a Static Website KintoBlock.

2. Click on **Settings** button displayed in the sidebar to modify the information.

3. Edit Basic Info of the KintoBlock like `KintoBlock Name` and `Description`.

   ![Editing Information of KintoBlock](/docs/assets/kintoblock-edit-info.png)
   
4. Click on the **Save Changes** button.

To edit a **Dynamic Website** KintoBlock, follow the steps mentioned below:

1. Open a Dynamic Website KintoBlock.

2. Click on **Settings** button displayed in the sidebar to modify the information.

3. Edit Basic Info of the KintoBlock like `KintoBlock Name`, `Language`, `Version`, and `Description`.

4. Click on the **Save Changes** button.

To edit hardware configuration for website, follow the steps mentioned below:

1. Open a Website KintoBlock.

2. Click on **Settings** button displayed in the sidebar to modify the Hardware Configuration.

3. Edit the default memory limit.

      ![Hardware Configuration](/docs/assets/kb-hardware-configuration.png)

4. Click on the **Save Changes** button.

[Click Here](/docs/features/deploying/environment-variables) to Know more about **Environment Variables**.

>Note: Above mentioned steps can be followed for **Microservice** and **Custom Service** for editing the properties like `KintoBlock Name`, `Language`, `Version`, `Description`, `Environment Variables` and `Hardware Configuration`.

## Advanced Options for KintoBlock

Advanced Options is used to modify the KintoBlock with properties like `Protocol`, `Port`, `Build command` and `Start command` format are auto-filled based on the chosen language. These values are editable and can be changed if required.

>Note: For **Microservice KintoBlock** properties like `Protocol`, `Port`, `Build command` and `Start command` are availabe. 

To edit Advanced Option, follow the steps mentioned below:

1. Open a KintoBlock.

2. Scroll down to **Builds & Repository** section.

3. Expand **Advanced Options** to view the `Protocol`, `Port`, `Build command` and `Start command` fields.

    ![Advanced Options](/docs/assets/kintoBlock-advanced-option.png)

5. Specify new values wherever necessary.

6. Click on the **Save Changes** button to apply changes.

7. For **Dynamic Website**, properties like `Port`, `Build command`, `Start command` are available.
   
    ![Advanced Option for Dynamic Website](/docs/assets/advance-option-dynamic-website.png)

8. For **Static Website**, properties like `Build command` and `Build folder` are available.
    
    ![Advanced Option for Static Website](/docs/assets/advanced-option-static-website.png)

9. For **Custom Service**, properties like `Helm chart source folder` is available.
    
    ![Advanced Option for Static Website](/docs/assets/advanced-option-custom-service.png)

## Add to Projects

KintoBlocks can be added straight away to any projects in your workspace.

To add KintoBlocks to Projects.

1. Open the KintoBlock.

2. Click on **Add To Projects** button displayed on the bottom right of the **KintoBlock Manage** page.

3. In the pop-up dialog displaying the projects in the workspace, select the environment.

4. Once the environment is selected, the **Project Manage** page is displayed and the KintoBlock is added to the project.

    ![Screenshot](/docs/assets/kb-add-deployments.png)

5. Click on **Deploy** at the bottom right of the page to push the new changes to your projects.


## View Endpoints

Endpoint references pass the information needed to access a web service endpoint. This information is essential to access a service in KintoBlock. 

To view endpoint documentation:

1. Open any KintoBlock.

2. Click the **View Endpoints** button on the top right of the **KintoBlock Manage** page.

3. The **Endpoints Documentation** page consists of two sections:

   a. **Search Endpoints section** - The left pane contains a Search field to query and find relevant endpoint information.
       
   b. **Details section** - The details of the queried endpoints (E.g. URL parameters, Response code, and Response parameters) are displayed in the right pane.

## Unlink Branch

KintoBlocks can consist of one or more branches. The users can remove a branch by making use of the Unlink Branch feature. However, if the KintoBlock has only one branch, it cannot be unlinked.

To unlink a branch from KintoBlock, follow the directions given below:

1. Open a **KintoBlock** in your account.

2. Scroll down to **Danger Zone** section displayed at the bottom of the **KintoBlock Manage** page.

    ![Unlink Branch](/docs/assets/unlink-branch.png)

3. Click on the **Unlink Branch** button in **Danger Zone**.

4. Click on the **Unlink Branch** button in the Pop-up.

    ![Unlink Branch Pop-up](/docs/assets/unlink-branch-pop-up.png)

Once the confirmation is submitted, the selected branch will be unlinked in the application.

>Note: The unlinked branch will be removed from the application but will continue to remain in the GitHub account. If an unlinked branch has to be readded, please contact the KintoHub team.

## Delete KintoBlock

To delete a KintoBlock, follow the steps mentioned below:

1. Click on **KintoBlocks** displayed on the left navigation bar.

2. You will be redirected to **KintoBlocks List** page.

3. Click on the **Ellipsis icon** of KintoBlock you wish to delete.

4. Click on **Delete KintoBlock** option.

    ![Screenshot](/docs/assets/Delete_KB.png)

5. Type **DELETE** in the displayed field.

6. Click on the **Delete KintoBlock** button to confirm your decision.

Before deleting a KintoBlock, ensure that the KintoBlock is not currently deployed in any of the **Projects**.

>Note: **Public** KintoBlocks will not be available for deletion.
