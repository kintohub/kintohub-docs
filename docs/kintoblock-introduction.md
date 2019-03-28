---
title: Introduction
---

## What is a KintoBlock?

KintoBlocks is the new standard format for building the stack of microservices for building your business. They are self-contained, containerized, universally compatible, language agnostic, combinable and shareable bricks of back-end logic. We like to think of them as Lego bricks of an application!

KintoHub takes off your shoulders the hassle of implementing a microservice architecture reducing the cost of a substantial investment in your infrastructure. We help you achieve scalability using modular architecture by a library of configuration management.


## How to create a KintoBlock 

1. Select **KintoBlocks** from the sidebar.

2. Click **Create New KintoBlock** card or the **+** icon.

   ![Screenshot](/docs/assets/kb-create-options.png)

   > Note: At this point, if you have not linked your workspace to your **Github** or **Bitbucket** account, you will be asked to associate your [workspace](workspaces.md). If you have already associated your workspace, please proceed to the next step.

3. There are two types of KintoBlocks supported now: **Microservices** and **Website**. Choose the type of
KintoBlock that meets your needs.

   - **Microservice** - Create a feature or functionality that runs your business.
   - **Website** - Create a static, dynamic or server-side rendered website.
   - **Custom Services** - Create and host any service on KintoHub.
   - **Tasks** - coming soon
   - **Functions** - coming soon
   - **Cloud Service** - coming soon

   ![Screenshot](/docs/assets/select-kb-flavour.png)


## Creating a Microservice KintoBlock

1. If you have selected Microservices as the KintoBlock type, start-off by filling the **Basic Info form**.

2. In Basic Info form, specify details on `name`, `description`, `programming language` and `version` you would like to use.

   ![Screenshot](/docs/assets/kb-basic-info.png)

3. Next, specify the details pertaining to your repo sources in the **Repository form**.

   > Note: You can create a **new repository** or specify an **existing repository**.

4. Enable the **Prepopulate repository switch** if you wish to import an example project to your repository. The example project will vary depending on the selected language.

5. Select your git repo service. **GitHub** and **Bitbucket** services are currently supported by KintoBlocks.

6. The other properties `Protocol`, `Port`, `Build command`, `Run command` and `DOC format` are auto-filled based on the chosen language. These values are editable and can be changed if required.

   ![Screenshot](/docs/assets/advanced-options.png)

   > API documentation for a KintoBlock is created when the **ApiDoc** option is selected in the **DOC format** dropdown. In case, documentation is not required, select the option **None** in the same dropdown. It is important to note that the build can fail if ApiDoc is not enabled.
   
7. Click on the **Create New KintoBlock** button to successfully create your KintoBlock for microservices.

   > Note: When the KintoBlock is created, the real-time status of the builds can be viewed by expanding the build row. The **Open Log** button in the build row displays the events corresponding to each build. Logs are especially useful in identifying root causes when a build failure occurs.


## Creating a Website KintoBlock

1. If you are creating a Website, select the corresponding option in the type of KintoBlocks.

2. Fill in the `name` and `description` in the **Basic Info form**.

3. Select the **website type** in the drop-down. Right now, we only support **Dynamic Web Applications**. The support for static websites will be coming up soon!

   ![Screenshot](/docs/assets/website-dropdown.png)

4. Proceed to the **Advanced Options** form to specify  `Port`, `Build command` and `Run command` details.

5. The final step requires you to provide the repo source details in the **Repository form**. The repository can either be an existing source or a newly created one.

6. In the Repository form, make sure to specify the git repository service used by your Organization. KintoBlocks supports GitHub and Bitbucket services.

7. Click on the **Create New KintoBlock** button. 

You are all set. The KintoBlock for a website has been created successfully.
