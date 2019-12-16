---
title: Manage Projects
---

## Setting service hostname

The **Hostname** feature gives the ability to add the same KintoBlock more than once in a single project by changing the hostname. The changes made to the original KintoBlock will be applied to all the KintoBlock with the hostname. Hostnames can only be set before deploying the KintoBlock. If you wish to change a KintoBlock's name, you must undeploy it first then redeploy, or deploy the same block with a different hostname first, and then remove the old one.

To add the same KintoBlock multiple times in a Project, follow the instructions below:

1. Select **Projects** from the sidebar.

2. Click **Create New Project** card or the **+** icon.

3. In the **Basic Info** form, specify details on `Project Name`, `Internal Name` and `Environment Name`.

4. Under the KintoBlocks section, search for the Kintoblock you would like to add. E.g. Microservice Example.

5. Again search for the same KintoBlock and add it to the Project.

6. Click on **Configure KintoBlock** button.
   
   ![Add the same KintoBlock more than once](/docs/assets/add-same-kb.png)
   
   >Note: By modifying the Environment Variables of a KintoBlock, the same KintoBlock can be used for multiple purposes like deployments across multiple environments.
   
7. Enter the unique `Hostname`.

   ![Host name](/docs/assets/host-name.png)
   
8. Click on the **Done Configuration** button.

9. Click on the **Create New Project** button.

Hostname feature can be used while _Creating a new Project_ or after the _Project is created_.

> Note: Once the KintoBlock is deployed, the hostname cannot be changed (hostname is locked). The hostname replaces the internal name of the KintoBlock only in the project but not in the original KintoBlock. 

## Add or Remove KintoBlocks

A Project can consist of one or more KintoBlocks. The KintoBlocks can be added or removed from project as and when the features are augmented. 

To add or remove KintoBlocks, follow the steps mentioned below:

1. Open a **Project**.

2. Under **KintoBlocks** section, click on the **+** icon displayed in the **KintoBlocks search bar**.

3. Search for the required KintoBlocks.

4. Select it from the dropdown to add them to projects.


To delete a KintoBlocks, navigate to the KintoBlock section.

1. Click on the **X** icon displayed at the top left of the KintoBlock to remove it.

2. Click on the **Deploy** button to apply the new changes to the projects.

   ![Screenshot](/docs/assets/delete-kb-deployments.png)
   
## Deploy Project

To publish the changes made to the KintoBlock, the user should run the deploy process. During deployment, the user can compare versions and view recent changes that occurred in the KintoBlock of the project.

The Compare Version screen displays the following types of changes that occurred in the KintoBlock:

1. Newly added KintoBlocks of the project.
   
   ![Newly added KintoBlocks](/docs/assets/add-kintoblock.png)
  
2. Changes or modifications made in KintoBlocks. For e.g. `Environment Variables` or `Port number` changes.
   
   ![Modify KintoBlock](/docs/assets/modify-kintoblock.png)
   
3. KintoBlocks deleted from the Project.
   
   ![Delete KintoBlock](/docs/assets/delete-kintoblock.png)
   
4. Configuration changes in KintoBlock. For e.g. `Security` or `Hardware Configuration` changes.
   
   ![Configuration of KintoBlock](/docs/assets/configuration-kintoblock.png)
   
To view the changes related to the KintoBlock before deployment, follow the steps mentioned below:

1. Open a **Project**.

2. Add a KintoBlock in the Dependencies section.

3. Click on **Deploy** button.

   ![Click on Deploy button](/docs/assets/deploy-button.png)
 
4. Now you will be able to notice the changes made in **Compare Versions** screen.

5. Click on the **Confirm Project** button.
 
## Automatically Deploy your Apps

The **Auto Deployment** feature aids in the automatic deployment of changes made in a KintoBlock version. Once the feature is enabled, successive changes made in a KintoBlock are automatically deployed to the Project. It reduces the hassles of repeated manual deployments.

To enable **Auto Deployment**, follow the instructions cited below:

1. Open an existing **Project**.

2. Scroll down to the **KintoBlocks** section.

3. Now enable **Auto Deployment** toggle.

    ![Enable Auto Deploy button](/docs/assets/enable-auto-deploy-button.png)

4. Click on the **Deploy** button in **Project Manage** page.

5. Click on the **Confirm Deployment** button in **Compare Versions** pop-up.

Going forward, all new commits made to the **KintoBlock** will be automatically deployed to the **Project**.

## Configure KintoBlocks

The Configuration pop-up screen consists of `Public API & Webhook Access`, `Highly Available`, `Environment Variables`, `Hardware Configuration` and `Security` fields that can be populated to customize the created KintoBlock. These values can be edited as and when it is required.

To configure the dependencies, follow the steps mentioned below:

1. Open a **Project**.

2. Under the KintoBlock section, click on **Configure KintoBlock** corresponding to the KintoBlock that needs to be modified.

   ![Configure KintoBlock](/docs/assets/configure-kintoblock.png)

3. Enter a new value or modify existing values as necessary in **Configure KintoBlock** pop-up screen.

4. Click on **Done Configuring** button to apply the changes.

   ![Done Configuring](/docs/assets/done-configuring.png)


## Project Deletion

To delete a Project, follow the steps mentioned below:

1. Click on **Project** displayed in the left navigation bar.

2. Once the **Project List** page is displayed, click on the **Ellipsis icon** of any Project.

3. Click on the **Delete Project** option.

4. Enter **Project name** in the confirmation field to warrant your decision.

5. Click on the **Delete Project** button.

    ![Delete Project](/docs/assets/delete-projects.png)
