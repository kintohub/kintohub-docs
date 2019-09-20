---
title: Microservice KintoBlock
sidebar_label: Microservices
---

## Creating a Microservice

1. If you have selected Microservices as the KintoBlock type, start-off by filling the **Basic Info form**.

2. In Basic Info form, specify details on `KintoBlock name`, `Internal name` , `Description`, `Programming Language` and `Version` you would like to use.

   ![Screenshot](/docs/assets/kb-basic-info-section.png)

3. Next, specify the details pertaining to your repo sources in the **Repository form**.

   > Note: You can create a **new repository** or specify an **existing repository**.

4. Enable the **Prepopulate repository switch** if you wish to import an example project to your repository. The example project will vary depending on the selected language.

5. Select your git repo service. **GitHub** and **Bitbucket** services are currently supported by KintoBlocks.

6. The other properties `Protocol`, `Port`, `Build command`, `Run command` and `DOC format` are auto-filled based on the chosen language. These values are editable and can be changed if required.

   ![Screenshot](/docs/assets/advanced-options.png)

   > API documentation for a KintoBlock is created when the **ApiDoc** option is selected in the **DOC format** dropdown. In case, documentation is not required, select the option **None** in the same dropdown. It is important to note that the build can fail if ApiDoc is not enabled.
   
7. Click on the **Create New KintoBlock** button to successfully create your KintoBlock for microservices.

   > Note: When the KintoBlock is created, the real-time status of the builds can be viewed by expanding the build row. The **Open Log** button in the build row displays the events corresponding to each build. Logs are especially useful in identifying root causes when a build failure occurs.
