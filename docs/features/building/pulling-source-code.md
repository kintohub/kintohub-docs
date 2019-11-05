---
title: Pulling Source Code
---

Popular version control repository resources are **GitHub** and **Bitbucket**. KintoHub provides an option to link both repository resources with the workspaces.
    
>Note: Both version control repository resource GitHub and Bitbucket can be linked in a single workspace. 


## Linking to GitHub

To link GitHub, follow the steps mentioned below:

1. Select the workspace from the **Workspace** field displayed in the sidebar.

2. Click on the **Edit** icon and get redirected to the **Workspace Manage** page.

3. Move on to the **Repo Resource** section and click on the **Link GitHub Account** button.

   ![Screenshot](/docs/assets/link-repo.png)

4. Specify `GitHub` credentials and login successfully.

5. Choose your repository.

    ![Screenshot](/docs/assets/select_repo_options.png)

>Note: Ensure to select the appropriate option regarding repository access i.e. all repositories or specific repositories.

6. Click on the **Install** button to complete the installation setup.

Once the **KintoHub's GitHub Auth** app is installed and linked to your GitHub account, there is no need to install it again for linking with other **Workspaces**. The only required step is to configure and associate the **GitHub Auth** app.

To configure the GitHub Auth app, follow the steps mentioned below:

1. Navigate to **Workspace Manage** page.

2. Click on the **Link GitHub Account** button.

3. Click on the **Configure** button.

    ![Screenshot](/docs/assets/GitHub_Configure.png)

4. Choose your repository.

    ![Screenshot](/docs/assets/GitHub_Configure_setting.png)

5. Click on the **Save** button to save the configured settings.

>Note: **KintoHub's GitHub Auth** app can be uninstalled from your GitHub account at any point. To do so, just click on the **Uninstall** button and remove the GitHub Auth app.

![Screenshot](/docs/assets/Uninstall_GitHub_app.png)


## Linking to GitHub organizations

GitHub organizations are shared accounts where groups of users can collaborate across many projects at once. GitHub organizations can be linked with Workspaces in KintoHub.

>Note: By default, **KintoHub** has permissions to access all organizations of the GitHub user. If the user has multiple organizations, and if KintoHub needs to access only specific organizations, be sure to grant permissions accordingly in GitHub.

To link GitHub organization, follow the steps mentioned below:

1. Select the workspace from the **Workspace** field displayed in the sidebar.

2. Click on the **Edit** icon and get redirected to the **Workspace Manage** page.

3. Move on to the **Repo Resource** section and click on the **Link GitHub Account** button.

4. Specify `GitHub` credentials and login successfully.

5. Click on the **Install** button to confirm the installation of **KintoHub's GitHub Auth** app.

6. Select the **organizations** to be linked.

    ![Screenshot](/docs/assets/choose_github_org.png)

7. Choose your repository.

8. Click on the **Install** button to complete the installation setup.

After establishing a link between GitHub and Workspace, if a new organization is added to the GitHub account, the newly added item may not appear in the organization list in Workspace. In such an event, contact KintoHub Support via [Slack](https://kintohub.slack.com/) and after confirmation from Support follow the steps mentioned above to gain access to all currently available organizations in GitHub account.


## Linking to Bitbucket

To link Bitbucket, follow the steps mentioned below:

1. Select the workspace from the **Workspace** field displayed in the sidebar.

2. Click on the **Edit** icon and get redirected to **Workspace Manage** page.

3. Move on to **Repo Resource** section and click on **Link Bitbucket Account** button

4. Specify `Bitbucket` login will be prompted, login in successfully.

5. Click on the **Grant access** button.
