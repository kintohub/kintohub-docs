---
title: Ionic Web Progressive App Example
sidebar_label: Ionic WPA
---

![Todo List app with input box](/docs/assets/examples/ionic/preview.png)


## Overview
Ionic is an amazing mobile app framework making it easy to make native apps for any operating system. They support Web Progressive Apps which can easily be built and used on KintoHub!
The conference app example shows off the power of Ionic, thus we have forked it with *zero* modifications so you can see it in action with KintoHub.

[Live Example](https://ionic-example-1d0d2-8caf9.web.master.kintohub.com/)

## Deployment
1. Apply this template to your [Github](https://github.com/kintohub/ionic-example/generate)
2. Create a [Website Block](https://staging.kintohub.com/app/dashboard) on KintoHub
3. Connect your GithubApp to KintoHub and select the Repository you just generated on your account.
4. Set the **name** of your kinto block
5. Choose **Static from build** as your type
6. Choose `Node.js` as the **language** and `11.7.0` as the **version**
7. Set the **Build Command** as `npm install && npm run build`
8. Set the **Build Output Folder** as `/www`

You're now good to go! Click **Create Website**. Now click **Build Latest Commit**

... The build takes about 5 minutes. Once complete, Click *Add to Project*

Follow the instruction to creating a new project. Once created, you can then click *Open* on your Ionic block and see it running live!

## What's Next?

You can do a lot with KintoHub and your deployed application. Some helpful links for next steps that you may consider with this project.

* [Creating multiple environments](https://docs.kintohub.com/docs/projects/environments)
* [Setting a password to protect your work](https://docs.kintohub.com/docs/kintoblocks/websites#basic-auth-for-websites)
