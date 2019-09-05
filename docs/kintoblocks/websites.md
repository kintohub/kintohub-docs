---
title: Website KintoBlock
sidebar_label: Websites
---

## Creating a Website

1. If you are creating a Website, select the corresponding option in the type of KintoBlocks.

2. Fill in the `KintoBlock name`, `display name` and `description` in the **Basic Info form**.

   ![Screenshot](/docs/assets/kb-website-basic-info.png)

3. Select the **website type** in the drop-down. We support both **Static Website** and **Dynamic Web Applications**. 

   ![Screenshot](/docs/assets/website-options.png)

4. Proceed to the **Advanced Options** form to specify  `Port`, `Build command` and `Run command` details.

5. The final step requires you to provide the repo source details in the **Repository form**. The repository can either be an existing source or a newly created one.

6. In the Repository form, make sure to specify the git repository service used by your Organization. KintoBlocks supports GitHub and Bitbucket services.

7. Click on the **Create New KintoBlock** button.

## Basic Auth for Websites

**Websites** launched in KintoHub can protected from unknown intrusion by employing **Basic Auth**. This can be applied to both **Static** and **Dynamic** websites.

To enable password protection for a website, follow the steps mentioned below:

1. Open a **Website Deployment**.

2. Make sure the Deployment is deployed successfully.

3. Scroll down to the **KintoBlocks** section.

4. Click on the **Configure KintoBlocks** button.

5. Enable the toggle displayed for **Password Protected**.

6. Enter the `Username` and `Password`.

    ![Screenshot](/docs/assets/pwd_for_websites.png)

7. Click on the **Save Changes** button.

>Note: Make sure to redeploy the **Website Deployment** to apply the changes made. 

To launch a Website Deployment, follow the steps mentioned below:

1. Open the **Website Deployment** for which you have set the **Basic Auth** credentials.

2. Scroll down to **KintoBlocks** section displayed at the bottom of the **Deployment Manage** page.

3. Click on **Open** button displayed for the **Website KintoBlock**.

    ![Screenshot](/docs/assets/website_open_btn.png)

4. Enter the `Username` and `Password` to access the website.

    ![Screenshot](/docs/assets/website_basic_auth.png)
