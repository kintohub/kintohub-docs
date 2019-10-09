---
title: Manage Projects
---

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
   
## Configure KintoBlocks

KintoBlocks consists of **environment variables** which are used to set the configuration. Environment variable values can be edited and updated whenever it is required.

To configure the dependencies, follow the steps mentioned below:

1. Open a **Project**.

2. Under KintoBlocks section, click on **Configure KintoBlocks** button.

3. The list of KintoBlocks in the environment will be displayed on the left pane of the **Edit Dependencies** page.

4. **Environment variables** of the KintoBlocks are displayed on the right pane of the page.

5. Select the KintoBlock for which environment variable value needs to be updated.

6. Enter the new value for the environment variable.

7. Click on the **Save Changes** button to apply the changes.

   ![Screenshot](/docs/assets/edit-dependencies-page.png)

    > Note: Only **environment variable values** can be edited in Edit Dependencies page.


## Project Deletion

To delete a Project, follow the steps mentioned below:

1. Click on **Projects** displayed on left navigation bar.

2. You will be navigated **Projects List** page.

3. Click on the **Ellipsis icon** of any Project.

4. Click on **Delete Project** option.

5. Enter **DELETE** in the confirm field to confirm your decision.

6. Click on **Delete Project** button.

    ![Screenshot](/docs/assets/delete-deployments.png)
