---
title: Website KintoBlock
sidebar_label: Websites
---

## Creating a Website

1. If you are creating a Website, select the corresponding option in the type of KintoBlocks.

2. Fill in the `KintoBlock name`, `Internal name` and `Description` in the **Basic Info form**.

   ![Screenshot](/docs/assets/kb-website-basic-info.png)

3. Select the **Website Type** in the drop-down. We support both **Static Website** and **Dynamic Web Applications**. 

   ![Screenshot](/docs/assets/website-options.png)

4. Proceed to the **Advanced Options** form to specify  `Port`, `Build command` and `Run command` details.

5. The final step requires you to provide the repo source details in the **Repository form**. The repository can either be an existing source or a newly created one.

6. In the Repository form, make sure to specify the git repository service used by your Organization. KintoBlocks supports GitHub and Bitbucket services.

7. Click on the **Create New KintoBlock** button.

## Settings for Website

The KintoBlock properties like `KintoBlock Name`, `Language`, `Version`, `Description`, `Environment Variables` and `Hardware Configuration` specified during the creation can be modified with new values.

>Note: **Environment Variables** is not specified during the creation of KintoBlock.

To edit a **Static Website** KintoBlock when `Build Required` toggle is `On` follow the steps mentioned below:

1. Open a Static Website KintoBlock.

      ![Settings Button](/docs/assets/kintoblock-settings.png)

2. Click on Settings card displayed in side bar to modify the information.

3. Edit Basic Info of KintoBlock like `KintoBlock Name`, `Language`, `Version`, and `Description`.

      ![Editing Information of KintoBlock](/docs/assets/kintoblock-basic-info.png)

4. Click on the **Save Changes** button.

To edit a **Static Website** KintoBlock when `Build Required` toggle is `Off` follow the steps mentioned below:

1. Open a Static Website KintoBlock.

2. Click on Settings card displayed in side bar to modify the information.

3. Edit Basic Info of KintoBlock like `KintoBlock Name` and `Description`.

   ![Editing Information of KintoBlock](/docs/assets/kintoblock-edit-info.png)
   
4.Click on the **Save Changes** button.

To edit a **Dynamic Website** KintoBlock when `Build Required` toggle is `On` follow the steps mentioned below:

1. Open a Dynamic Website KintoBlock.

2. Click on Settings card displayed in side bar to modify the information.

3. Edit Basic Info of KintoBlock like `KintoBlock Name`, `Language`, `Version`, and `Description`.

4. Click on the **Save Changes** button.

To edit Hardware Configuration for website, follow the steps mentioned below:

1. Open a Website KintoBlock.

2. Click on Settings card displayed in side bar to modify the Hardware Configuration.

3. Edit the default memory limit.

      ![Hardware Configuration](/docs/assets/kb-hardware-configuration.png)

4. Click on the **Save Changes** button.

## Basic Auth for Websites

**Websites** launched in KintoHub can protected from unknown intrusion by employing **Basic Auth**. This can be applied to both **Static** and **Dynamic** websites.

To enable password protection for a website, follow the steps mentioned below:

1. Open a **Website Project**.

2. Make sure the Project is deployed successfully.

3. Scroll down to the **KintoBlocks** section.

4. Click on the **Configure KintoBlocks** button.

5. Enable the toggle displayed for **Password Protected**.

6. Enter the `Username` and `Password`.

    ![Screenshot](/docs/assets/pwd_for_websites.png)

7. Click on the **Done Configuring** button.

>Note: Make sure to redeploy the **Website Project** to apply the changes made. 

To launch a Website Project, follow the steps mentioned below:

1. Open the **Website Project** for which you have set the **Basic Auth** credentials.

2. Scroll down to **KintoBlocks** section displayed at the bottom of the **Project Manage** page.

3. Click on **Open** button displayed for the **Website KintoBlock**.

    ![Screenshot](/docs/assets/website_open_btn.png)

4. Enter the `Username` and `Password` to access the website.

    ![Screenshot](/docs/assets/website_basic_auth.png)
