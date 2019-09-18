---
title: Introduction to Projects
sidebar_label: Introduction
---

## What is a Project?

Projects are tailored back-end features packages, ready to be consumed by your clients.
They are composed of KintoBlocks with unique configuration parameters, and either a client or a protocol to allow your clients to talk to the application. You can deploy your app in a specific environment and have several environments for one application to apply different custom configurations.

Your Project is made of blocks that are deployed in a serverless way, meaning it is dynamically loaded when you are calling your endpoint. Hence, if you are not using it, you are saving resources and money!


## Creating a Project

1. Select **Projects** from the sidebar.

2. Click **Create New Project** card or the **+** icon.

   ![Screenshot](/docs/assets/project_create_options.png)

3. In the **Basic Info** form, specify details on `name`, `description`, and `environment` name.

   ![Screenshot](/docs/assets/basic-info-project.png)

4. By default, the environment is named as **default**. Make sure to overwrite it and specify your own name for easier identification.

5. Under KintoBlocks section, search for the Kintoblock you would like to add.

6. Select the KintoBlock displayed in the search dropdown to add them to your project. Both **private** and **public** KintoBlocks can be added.

   ![Screenshot](/docs/assets/project-kintoblocks-section.png)

7. Once KintoBlock is added, a specific `Branch` or a `Tag` of the Kintoblock can be selected.

   ![Screenshot](/docs/assets/project-branch-tag-switcher.png)

8. Click on **Create New Project** button on the bottom right of the page to create the Project.

   >Note: When the **Automatically deploy when new KintoBlock commits are available** option is set to `ON`, new commits in the KintoBlock are automatically deployed. By default, the toggle switch is set to `OFF`.


## Edit Project

The Project properties like `Name`, `Description`, and `Environment Name` specified during creation can be edited and updated with new values. 

To edit a project, follow the steps mentioned below:

1. Open a **Project**.

2. Click on the **Edit icon** displayed beside the project title to modify the Name, Description, and Environment name of the project.

   ![Screenshot](/docs/assets/edit-icon-project.png)

3. Click on the **Save Changes** button to apply the changes.


## View Projects

The Project card gives a quick overview of the project. It displays the following details:

- KintoBlocks of the project in a stacked view.

- The first two deployed environments of the project and their latest versions.

- The Dependencies dropdown displays the full list of KintoBlocks in the project.

   ![Screenshot](/docs/assets/project-card-options.png)

    > Note: When a KintoBlock in the Dependencies dropdown is selected, you will be redirected to the **KintoBlock Manage page**.
