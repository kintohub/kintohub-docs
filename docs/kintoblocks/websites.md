---
title: Website KintoBlock
sidebar_label: Websites
---

## Creating a Website

1. Select **KintoBlock** from the sidebar.

2. Click on the **Create New KintoBlock** card.

3. Select the **Website KintoBlock** flavor.

4. Fill the **Choose Repository** form by specifying the details pertaining to the linked repo.

   ![Website-Choose-Repository](/docs/assets/website-choose-repository.png)

5. Click on the **Continue** button. 

6. Next, specify the details on `Name` and  `Internal Name`.

7. Select the **Website** in `Choose a Type`.

8. If **Static** type is selected in `Choose a Type` then, click on **Create Website** button to successfully create a KintoBlock.

   ![Static Website](/docs/assets/website-static.png)

9. In the case of **Static from Build** type, specify the `Language`, `Version`, `Build Command` and `Build Output Folder`.

   ![Static Website from build](/docs/assets/static-from-build.png)

10. In the case of **Dynamic Web App** type, specify the `Language`, `Version`, `Build Command`, `Start Command` and `Port`.
   
      ![Dynamic Web App](/docs/assets/dynamic-web-app.png)

11. Click on the **Create Website** button to successfully create a KintoBlock.

## Settings for Website

The KintoBlock properties like `KintoBlock Name`, `Language`, `Version`, `Description`, `Environment Variables` and `Hardware Configuration` specified during the creation can be modified with new values.

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

To edit hardware configuration of a website, follow the steps mentioned below:

1. Open a Website KintoBlock.

2. Click on **Settings** button displayed in the sidebar to modify the Hardware Configuration.

3. Edit the default memory limit.

      ![Hardware Configuration](/docs/assets/kb-hardware-configuration.png)

4. Click on the **Save Changes** button.

[Click Here](/docs/features/deploying/environment-variables) to Know more about **Environment Variables**.

## Basic Auth for Websites

**Websites** launched in KintoHub can be protected from unknown intrusion by employing **Basic Auth**. This can be applied to both **Static** and **Dynamic** websites.

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

1. Open the **Website Project** for where the **Basic Auth** credentials are defined.

2. Scroll down to **KintoBlocks** section displayed at the bottom of the **Project Manage** page.

3. Click on the **Open** button corresponding to the **Website KintoBlock**.

    ![Screenshot](/docs/assets/website_open_btn.png)

4. Enter the `Username` and `Password` to access the website.

    ![Screenshot](/docs/assets/website_basic_auth.png)
