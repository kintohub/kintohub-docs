---
title: Link to Repository Resources
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

5. Click on **Authorize KintoHub** button to grant permission for accessing the repo resource.


## Linking to Bitbucket

To link Bitbucket, follow the steps mentioned below:

1. Select the workspace from the **Workspace** field displayed in the sidebar.

2. Click on the **Edit** icon and get redirected to **Workspace Manage** page.

3. Move on to **Repo Resource** section and click on **Link Bitbucket Account** button

4. Specify `Bitbucket` login will be prompted, login in successfully.

5. Click on the **Grant access** button.


## Linking to GitHub organizations

GitHub organizations are shared accounts where groups of users can collaborate across many projects at once. GitHub organizations can be linked with Workspaces in KintoHub.

>Note: By default, **KintoHub** has permissions to access all organizations of the GitHub user. If the user has multiple organizations, and if KintoHub needs to access only specific organizations, be sure to grant permissions accordingly in GitHub.

To grant access to a GitHub organization, follow the steps mentioned below:

1. Navigate to your **GitHub** personal account settings.

   ![Screenshot](/docs/assets/GitHub_Settings.png)

2. Click on **Applications**.

3. Switch to **Authorized OAuth Apps** tab.

   ![Screenshot](/docs/assets/Auth_Org.png)

4. Select the **KintoHub** application.

   ![Screenshot](/docs/assets/Grant_Org_Access.png)

5. Click on the **Grant** button displayed for the concerned organization.

As soon as the **Grant** button is clicked, the user will be able to link the organizations with the Workspace.

After establishing a link between GitHub and Workspace, if a new organization is added to the GitHub account, the newly added item may not appear in the organization list in Workspace. In such an event, contact KintoHub Support via [Slack](https://kintohub.slack.com/) and after confirmation from Support follow the steps mentioned above to gain access to all currently available organizations in GitHub account.
