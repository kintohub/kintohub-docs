---
title: Static Websites
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

 - Navigate to the KintoHub dashboard.
 - Click __KintoBlocks__ in the menu.
 - Select __Create New KintoBlock__.
 - Choose the __Website__ KintoBlock type.

The *__Create New KintoBlock__* page appears where we can set the configuration of the Website KintoBlock.

 - Enter a __KintoBlock Name__.
 - Enter a __Description__.
 - Select for __Website Type__ the `Static Website`.
 - Enter the name of the repository where the static files are in the root of the repository.
 - Click __Create New KintoBlock__.

The *__KintoBlock__* page appears for the newly created KintoBlock.

 - Click __Build Latest Commit__ to make a build that holds the static website files.
 - Next, click __Add to Project__ and a menu with projects appears.
 - Click the __New Project__ button.
 - Enter a project name.
 - Click __Create__.

### Create a project with the KintoBlock

The *__New Project__* page appears for the newly created project.

 - Notice that the KintoBlock has been added to the *__KintoBlocks__* section.
 - Click __Create New Project__.

The *__Project__* page appears, and a new deployment is in progress.

 - Wait for the deployment to complete.
 - Once completed, scroll down to the *__KintoBlocks__* section.
 - Click the __Open__ button on the website KintoBlock to navigate to the URL.

You'll see the static files hosted on the internet.

## Static Angular website

<video autoplay loop muted controls width="100%">
   <source src="/docs/assets/examples/static-websites/angular.mp4"
           type="video/mp4">
   Sorry, your browser doesn't support embedded videos.
</video>

### Create a Website KintoBlock

 - Navigate to the KintoHub dashboard.
 - Click __KintoBlocks__ in the menu.
 - Select __Create New KintoBlock__.
 - Choose the __Website__ KintoBlock type.

The *__Create New KintoBlock__* page appears where we can set the configuration of the Website KintoBlock.

 - Enter a __KintoBlock Name__.
 - Enter a __Description__.
 - Select for __Website Type__ the `Static Website`.
 - Activate the __Build Required__ toggle.
 
Additional settings appear in the *__Advanced Options__* section.

 - The __Build Command__ allows to call the framework's command to trigger a static site build. In the case of Angular, make sure you have added `@angular/cli` as a dev dependency, and call the CLI with the `npx` command. E.g. `npm install && npx ng build --prod`.
 - The __Path to Build Folder__ is where the generated files reside. After the _Build Command_ completes, in the case of Angular CLI, this will be the `dist/` folder, with the workspace name. E.g. `dist/myworkspace`.
 - For __Language__ select `Node.js` since Angular depends on Node.js.
 - Select an appropriate __Version__ of Node.js.
 - Next, enter the name of the repository that contains the Angular application.
 - Click __Create New KintoBlock__.

The *__KintoBlock__* page appears for the newly created KintoBlock.

 - Click __Build Latest Commit__ to build the static website using the _Build Command_ from the previous steps.
 - Next, click __Add to Project__ and a menu with projects appears.
 - Click the __New Project__ button.
 - Enter a project name.
 - Click __Create__.

### Create a project with the KintoBlock

The *__New Project__* page appears for the newly created project.

 - Notice that the KintoBlock has been added to the *__KintoBlocks__* section.
 - Click __Create New Project__.

The *__Project__* page appears, and a new deployment is in progress.

 - Wait for the deployment to complete.
 - Once completed, scroll down to the *__KintoBlocks__* section.
 - Click the __Open__ button on the website KintoBlock to navigate to the URL.

You'll see the Angular app hosted on the internet.