---
title: Git Repository, Builds & CI
---

## Branches & Tags

KintoBlock is always in sync with your GitHub and Bitbucket repositories. If a user wants to add a branch to their repository, it can be directly added in KintoBlock. New branches can also be created in KintoBlock. At present, there is no option within KintoBlocks to modify the branches and tags.

To create a new branch follow the steps mentioned below:

1. Open a **KintoBlock**.

2. Navigate to the sidebar in **KintoBlock Manage** page.

3. Switch to **Branch** tab and enter the `branch name` in the **Search Bar**.

4. Click on the **Enter** button to create a branch.

>Note: The branches created via KintoHub will get updated in their corresponding GitHub or Bitbucket repository.

   ![Screenshot](/docs/assets/Branches_Sidebar.png)

To add a new branch to KintoBlock follow the steps mentioned below:

1. Open a **KintoBlock**.

2. Navigate to the sidebar in **KintoBlock Manage** page.

3. Switch to **Branch** tab and click on the **+** icon displayed beside **Search Bar**.

4. Select the required branch from the dropdown to add them to KintoBlocks.

Newly added or created branch in KintoBlock will be displayed as an individual card container in the sidebar of **KintoBlock Manage** page. Each card displays the following details of the branch:

- **Builds & Repository**

- **Helm Chart Values**

- **Environment Variables**

- **Deletion**

![Screenshot](/docs/assets/branches_card.png)


## Continuous Integration and Deployment

When changes are committed into the repository branch, a new build for KintoBlock can be triggered by using the **Build Latest Commit** button in the **KintoBlock Manage** page. Under **Recent Builds** user can view the recent commits made in the repository branch. The **Latest Build** section will be updated automatically with the last successful build.

The **Automatically build new commits in this branch** option automatically enables build generation for new commits in the repository. By default, the toggle switch is set to `ON`.


## Manually trigger builds for new Commits

To trigger a new build follow the steps mentioned below:

1. Open the KintoBlock.

2. Select the branch of KintoBlock consisting of the latest code.

3. Click on **Build Latest Commit** button.

   ![Screenshot](/docs/assets/build_latest_commit.png)

A new build with last commits made in the repository will be generated. The status of the new build will be displayed in the **Recent Builds section**. If there are no new commits in the repository, a new build will not be generated.


## Re-generating builds via Retry

There is an option to regenerate a build from the last attempt to generated a build. Builds can be regenerated for all statuses: Success, Running and Failed.

To regenerate a build:

1. Open the KintoBlock build that resulted in failure.

2. Select the appropriate branch of the KintoBlock.

3. Click on the **Retry** button displayed in the build status table.

   ![Screenshot](/docs/assets/kb-retry.png)

The build generation process will commence and the status of the build will be displayed in the **Recent Builds** section.


## View Repository

To view a repository, open any KintoBlock and scroll down to **Builds & Repository** section. The repository name of a KintoBlock is displayed right below the Recent Builds section under the title Repository.

The **Open Repo** button provides an option to quickly view the repository that is associated with your KintoBlock.
  
   ![Screenshot](/docs/assets/kb-open-repo-btn.png)

The **View example projects link** in the Repository section provides an option to quickly view an example project of the programming language you have chosen to create the KintoBlock.


## View Build Logs

KintoHub maintains a structured list of the events that take place during the build generation. The entire build log can be generated in textual form by clicking on the **Open Log** button. 

   ![Screenshot](/docs/assets/open_log.png)

When the KintoBlock build is a success, you will notice a green banner on top of the Build Logs section with the title `No error found`.

If the KintoBlock builds results in failure, a red banner will be displayed on top of the Build Logs section with the title `Error found`.  Log messages can be analyzed to find the root causes of failure. 

   ![Screenshot](/docs/assets/build_error.png)


## View Build Status

The Recent Builds section also displays the status of each build. The builds can have one of the 3 statuses mentioned below:

- **Running**: This is the initial state of a new build, while we build your KintoBlock

- **Success**: This status indicates that your KintoBlock build was run successfully.

- **Failed**: This status indicates that the build failed. 

Detailed logs pertaining to each status can be viewed by clicking on the status column.


## Tagging a Build

Builds are automatically generated when a KintoBlock is created. Tagging a build in a KintoBlock is a similar concept to tagging in GitHub. Once a build is tagged, the build can be referenced and deployed through a deployment. It’s important to tag stable builds that you have tested and prepared for production use!

To tag a commit in KintoBlock:

1. Open the KintoBlock you wish to tag.

2. Select the branch in your repository, where you have the final version of your KintoBlock that is ready to go!!

3. In **Builds & Repository section**, click on the **Tag Build** button for the commit that you would like to tag.

    ![Screenshot](/docs/assets/kb-tag-btn.png)

4. Now specify the build number. We use the form  `MAJOR.MINOR.REVISION` for build numbers.

5. Enter the release notes in the Notes section and then click on the **Tag Build**.

    ![Screenshot](/docs/assets/tab-this-build.png)

    > Note: Tagging is important when you are preparing for public releases. If you want to update the deployment and add a KintoBlock to it, create a tag and select the tag within the deployment. This is an easy way to control the released versions of your KintoBlock.
