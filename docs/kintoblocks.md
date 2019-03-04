---
title: KintoBlocks
---


## Introduction

### What is a KintoBlock

KintoBlocks is the new standard format for building the stack of microservices for building your business. They are self-contained, containerized, universally compatible, language agnostic, combinable and shareable bricks of back-end logic. We like to think of them as Lego bricks of an application!

KintoHub takes off your shoulders the hassle of implementing a microservice architecture reducing the cost of a substantial investment in your infrastructure. We help you achieve scalability using modular architecture by a library of configuration management.

### How to create a KintoBlock

1. Select **KintoBlocks** from the sidebar.

2. Click **Create New KintoBlock** card or the **+** icon.
![Screenshot - Create New KintoBlock](/docs/assets/creating-a-kintoblock-1-2.png)

> Note: At this point, if you have not linked your workspace to your **Github** or **Bitbucket** account, you will be asked to           associate your workspace . If you have already associated your workspace, please proceed to the next step.

3. There are two types of KintoBlocks currently supported: **Microservices** and **Website**. Choose the type of KintoBlock that meets your needs.

![Screenshot - Create New KintoBlock](/docs/assets/select_kintoblock_type.png)

### Creating a Microservice KintoBlock

1. If you have selected Microservices as the KintoBlock type, start-off by filling the **Basic Info form**.

2. In Basic Info form, specify details on `name`, `description`, `programming language` and `version` you would like to use.

   { Add GIF video of entering name, description and selecting language, version & repository type }

3. Next, specify the details pertaining to your repo sources in the **Repository form**.

> Note: You can create a **new repository** or specify an **existing repository**.

4. Enable the **Prepopulate repository switch** if you wish to import an example project to your repository. The example project will vary depending on the selected language.

   { Add GIF video enabling pre-pop switch }

5. Ensure that the version control repo service is also specified. **GitHub** and **Bitbucket** services are currently supported by KintoBlocks.

6. The final step is to specify endpoint properties like `Protocol`, `Port`, `Build command`, `Run command` and `DOC format`. These properties are auto-filled based on the language chosen for your KintoBlock.

   { Add image of Advanced options form }

7. Click on the **Create New KintoBlock** button to successfully create your KintoBlock for microservices.

Once you have created a KintoBlock, the real-time status of your builds can be viewed by clicking on the **Open Log** button. It allows you to see event-based real-time updates corresponding to each build. Logs are especially useful in identifying root causes if a build failure has occurred.
  
### Creating a Website KintoBlock

1. If you are creating a Website, select the corresponding option in the type of KintoBlocks.

2. Fill in the `name` and `description` in the **Basic Info form**.

3. Select the **website type** in the drop-down. Right now, we only support **Dynamic Web applications**. The support for static websites will be coming up soon!

   { Add image of website type dropdown }

4. Proceed to the **Advanced Options** form to specify  `Port`, `Build command` and `Run command` details.

   { Add image of Advanced options form }

5. The final step requires you to provide the repo source details in the **Repository form**. The repository can either be an existing source or a newly created one.

6. In the Repository form, make sure to specify the version control repo service used by your Organization. KintoBlocks supports GitHub and Bitbucket services.

7. Click on the **Create New KintoBlock** button. 

You are all set. The KintoBlock for a website has been created successfully.


## Git Repository, Builds & CI

### Tagging a Build

Builds are automatically generated when a KintoBlock is created. Tagging a build in a KintoBlock is a similar concept to tagging in GitHub. Once a build is tagged, the build can be referenced and deployed through a deployment. It’s important to tag stable builds that you have tested and prepared for production use!

To tag a commit in KintoBlock:

1. Open the KintoBlock you wish to tag.

2. Select the branch in your repository, where you have the final version of your KintoBlock that is ready to go!!

3. In **Builds & Repository section**, click on the **Tag Build** button for the commit that you would like to tag.

   { Add image of Tag build button in Builds & Repository section }

4. Now specify the build number. We use the form  `MAJOR.MINOR.REVISION` for build numbers.

   { Add GIF video of entering tag number }

5. Enter the release notes in the Notes section and then click on the **Tag Build**.

> Note: Tagging is important when you are preparing for public releases.  If you want to update the deployment and add a KintoBlock to it, create a tag and select the tag within the deployment. This is an easy way to control the released versions of your KintoBlock.

### Generating builds for new Commits

Whenever changes are committed to your repository, you can trigger a new build for your KintoBlock by following the steps mentioned below:

1. Open the KintoBlock.

2. Select the branch of KintoBlock consisting of the latest code.

3. Click on **Check for New Commits** button.

   { Add GIF video of clicking on Check for New Commits button and new build generated }

A new build with last commits made in the repository will be generated. The status of the new build will be displayed in the **Recent Builds section**. If there are no new commits in the repository, a new build will not be generated.

> Note: The **Automatically build new commits in this branch** option automatically enables build generation for new commits in the repository. By default, the toggle switch is set to `ON`.

### Re-generating builds via Retry

There is an option to regenerate a build from the last attempt to generated a build. Builds can be regenerated for all statuses: Success, Running and Failed.

To regenerate a build:

1. Open the KintoBlock build that resulted in failure.

2. Select the appropriate branch of the KintoBlock.

3. Click on the **Retry** button displayed in the build status table.

   { Add a GIF video for clicking on Retry button and new build generated }

The build generation process will commence and the status of the build will be displayed in the **Recent Builds** section.

### View Repository

To view a repository, open any KintoBlock and scroll down to **Builds & Repository** section. The repository name of a KintoBlock is displayed right below the Recent Builds section under the title Repository.

The **Open Repo** button provides an option to quickly view the repository that is associated with your KintoBlock.
  
   { Add image of Open Repo button }

The **View example projects link** in the Repository section provides an option to quickly view an example project of the programming language you have chosen to create the KintoBlock.

### View Build Logs

KintoHub maintains a structured list of the events that take place during the build generation. The entire build log can be generated in textual form by clicking on the **Open Log** button. 

   { Add image of Open log button }

When the KintoBlock build is a success, you will notice a green banner on top of the Build Logs section with the title `No error found`.

   { Add a image for No error found }

If the KintoBlock builds results in failure, a red banner will be displayed on top of the Build Logs section with the title `Error found`.  Log messages can be analyzed to find the root causes of failure. 

   { Add a image for error found }
  
### View Build Status

The Recent Builds section also displays the status of each build. The builds can have one of the 3 statuses mentioned below:

a. **Running**: This is the initial state of a new build, while we build your KintoBlock

b. **Success**: This status indicates that your KintoBlock build was run successfully.

c. **Failure**: This status indicates that the build failed. 

Detailed logs pertaining to each status can be viewed by clicking on the status column.


## Environment Variables

### What are the Environment Variables?

Environment variables are used to control static information specified in the Deployment. These are often configuration values like `Private_Keys` or `Port`. Environment variables aid in providing compatibility for Deployments to run seamlessly on multiple environments. They are specific to a **branch** of a KintoBlock, so if you switch branches and want to use that particular branch in a Deployment you will need to input the **Environment Variables** on that branch too.

It is recommended to add **Environment value** while a variable is created. The Environment values can be added on the **KintoBlock manage page** or via **Configure Dependencies** button in Deployment Manage Page.

### How to define Environment variables in a KintoBlock?

The Environment variables can be added to a KintoBlock on the **KintoBlock Manage page** by following the steps mentioned below:

1. Open the KintoBlock.

2. Select the required branch in your repository.

3. Scroll down to the **Environment Variable** section at the bottom of the form.

   { Add image of environment variable section }

4. Add the **Variable name** and set the default value. Users can override the default value before they deploy.

5. Click on the **+** button.

6. By default, each variable added will be regarded as an optional variable. If you would like to mandate the use of any specific variable, enable the **This is a required value option**.

   { Add GIF video of enabling "This is a required value option switch" }
 
### Manage Environment Variables

It is possible to edit and delete an Environment variable in KintoBlock at any required point. The edit and delete operations are also carried out in the **KintoBlocks Manage page**:

1. Open the KintoBlock.

2. Select the required branch in your repository.

3. Scroll down to the **Environment Variable** section at the bottom of the form.

4. To edit, overwrite the existing Variable and Value with the updated values.

5. To delete, click on the **X** icon displayed beside an environment variable.

6. Click on the **Save Changes** button to apply the changes.

### Points to remember about Environment Variables

- The owner of a KintoBlock can add, edit or delete Environment variables and values.
- Public users with access to a KintoBlock can edit the environment values via **Configure Dependencies** button in Deployment Manage page.


## Manage KintoBlocks

### Editing KintoBlocks

The KintoBlock properties like `Description`, `Port`, `Build command`, `Run` and `Doc format` specified during creation can be edited and modified with new values.

To edit a KintoBlock follow the steps mentioned below:

1. Open a KintoBlock.

2. Click on the **pencil icon** displayed beside the title to modify the Description of the KintoBlock.

3. In the **Advanced Options section**, expand the section and specify updated values in the `Port`, `Build command`, `Run`, and `Doc` fields.

4. Click on the **Save Changes** button to apply changes.

### Edit Branches & Tags

KintoBlock syncs with the repository and automatically updates new branches and tags added to it. There is no option within KintoBlocks to modify the branches and tags.

### Add to Deployments

KintoBlocks can be added straight away to any deployments in your workspace.

To add KintoBlocks to Deployments.

1. Open the KintoBlock.

2. Click on **Add To Deployments** button displayed on the bottom right of the **KintoBlock Manage page**.

3. In the pop-up dialog displaying the deployments in the workspace, select the environment.

4. Once the environment is selected, the **Deployment Manage page** is displayed and the KintoBlock is added to the deployment.

   { Add GIF video of clicking Add to Deployments button and KintoBlock gets added to deployment }

5. Click on **Deploy** at the bottom right of the page to push the new changes to your deployments.

### View Endpoints

Endpoint references pass the information needed to access a web service endpoint. This information is essential to access a service in KintoBlock. 

To view endpoint documentation:

1. Open any KintoBlock.

2. Click the **View Endpoints** button on top right of the **KintoBlock Manage page**.

3. The **Endpoints Documentation page** consists of two sections:

      a. **Search Endpoints section** - The left pane contains a Search field to query and find relevant endpoint information.
       
      b. **Details section** - The details of the queried endpoints (E.g. URL parameters, Response code, and Response parameters) are               displayed in the right pane.


## Advanced Usages

### Search and find KintoBlocks

The **Search bar** in KintoBlocks is intuitive and easy to use. The Search yields the lists of KintoBlocks created by **workspace members** and **publicly** shared on the platform. Search is especially helpful for developers looking for reusable KintoBlocks so that they can focus only on building unique components necessary for their application.

   { Add GIF video of searching a "Helloworld KintoBlock" }
  
### Quick Menu

The Quick Menu provides swift access to critical functions that can be performed in the KintoBlock:

1. Click on the **Ellipsis icon** of any KintoBlock card in the KintoBlocks list page to access the following options:
   a. Edit Branch
   b. View All Branches & Tags
   c. View Endpoints
   
   { Add a image of KintoBlock card displaying the above mentioned options }
   
2. On selecting the **Edit Branch option**, the user is redirected to the **KintoBlock Manage page**.

3. Click on the **View All Branches & Tags option** to open a drop-down displaying all the branches and tags of the KintoBlock.

4. The **View Endpoints option** will redirect the user Endpoint documentation page of the KintoBlock.

