---
title: Serve Static Files
---

## Quick-start tutorial

This tutorial walks you through the process of deploying a _static website_ on KintoHub.

There are two examples, one with standard HTML files, and one where the static website is generated with a framework, in this case [Angular](https://angular.io).

## Static HTML website

<video autoplay loop muted controls width="100%">
   <source src="/docs/assets/examples/static-websites/html.mp4"
           type="video/mp4">
   Sorry, your browser doesn't support embedded videos.
</video>

### Create a Website KintoBlock

1. Navigate to the KintoHub home page.
2. Select **KintoBlocks** from the sidebar.
3. Click on the **Create New KintoBlock** card.
4. Choose the **Website** KintoBlock type.


Once the **Choose Repository** page is displayed, specify the repository details as suggested below:


5. Enter the name of the repository where the static files are in the root of the repository.
6. Click on the **Continue** button.


In the **Create Website page**, specify the configuration details of the Website KintoBlock by following these steps:


7. Enter a unique **Name**.
8. Choose the `Static Website` in **Choose a Type**.
9. Click on **Create Website** button.


View the newly created KintoBlock in the **KintoBlock** page and proceed as follows:


10. Click on **Build Latest Commit** to make a build that holds the static website files.
11. Next, click **Add to Project** and a menu with projects appears.
12. Click the **New Project** button.
13. Enter a project name.
14. Click **Create**.


A build is successfully created in the KintoBlock.


### Create a project with the KintoBlock

1. Navigate to **Create New Project** page
2. Enter the **Project Name**
3. Add the KintoBlock in the **KintoBlocks** section.
4. Click **Create New Project**.


The **Project** page is displayed, and a new deployment is shown as in-progress.


5. Wait for the deployment to complete.
6. Once completed, scroll down to the **KintoBlocks** section.
7. Click the Open button on the website KintoBlock to navigate to the URL.


You'll see the static files are successfully hosted on the internet.


## Static Angular website

<video autoplay loop muted controls width="100%">
   <source src="/docs/assets/examples/static-websites/angular.mp4"
           type="video/mp4">
   Sorry, your browser doesn't support embedded videos.
</video>

### Create a Website KintoBlock

1. Navigate to the KintoHub home page.
2. Select **KintoBlocks** from the sidebar.
3. Click on the **Create New KintoBlock** card.
4. Choose the **Website** KintoBlock type.


Once the **Choose Repository** page is displayed, specify the repository details as suggested below:


5. Enter the name of the repository where the static files are in the root of the repository.
6. Click on the **Continue** button.
 

In the **Create Website page**, specify the configuration details of the Website KintoBlock by following these steps:


7. Enter a unique **Name**.
8. Choose the `Static from Build` in **Choose a Type**.
9. For **Language**, select `Node.js` since Angular depends on Node.js.
10. Select an appropriate **Version** of Node.js.
11. The **Build Command** allows calling the framework's command to trigger a static site build. In the case of Angular, make sure you have added `@angular/cli` as a dev dependency, and call the CLI with the npx command. E.g. `npm install && npx ng build --prod`.
12. The **Build Output Folder** is where the generated files reside. After the **Build Command** completes, in the case of Angular CLI, this will be the `dist/ folder`, with the workspace name. E.g. `dist/myworkspace`.
13. Click on **Create Website** button.


View the newly created KintoBlock in the **KintoBlock** page and proceed as follows:


14. Click on **Build Latest Commit** to make a build that holds the static website files.
15. Next, click **Add to Project** and a menu with projects appears.
16. Click the **New Project** button.
17. Enter a project name.
18. Click **Create**.


A build is successfully created in the KintoBlock.


### Create a project with the KintoBlock

1. Navigate to **Create New Project** page
2. Enter the **Project Name**
3. Add the KintoBlock in the **KintoBlocks** section.
4. Click **Create New Project**.


The **Project** page is displayed, and a new deployment is shown as in-progress.


5. Wait for the deployment to complete.
6. Once completed, scroll down to the **KintoBlocks** section.
7. Click the **Open** button on the Website KintoBlock to navigate to the URL.


You'll see the Angular app is successfully hosted on the internet.
