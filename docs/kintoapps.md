---
title: KintoApps
---

## What is an application?

Applications are tailored back-end features packages, ready to be consumed by your clients. 

They are composed of KintoBlocks with unique configuration parameters, and either a client or a protocol to allow your clients to talk to the application. You can deploy your app in a specific environment and have several environment for one application to apply different custom configuration. 

Your application is made of blocks that are deployed in a serverless way, meaning it is dynamically loaded when you are calling your endpoint. Hence, if you are not using it, you are saving resources and money !


## Creating an application

Creating your first application is super easy.
1. Select **Application** from the sidebar
2. Click **Create New Application**
![Screenshot - Create New Application](/docs/assets/creating-an-application-1-2.png)
3. Enter the required info
4. Click **Create New Application**
![Screenshot - Enter Info](/docs/assets/creating-an-application-3-4.png)
_That's it! You have created your first application!_

## Adding dependencies to an application

Once you've created an application, you can add additional KintoBlocks to extend its capabilities.

1. Open the **KintoBlock** or **Application** you want to edit
2. Under the **Dependencies** section, search for the Kintoblock you would like to add
3. Click **Edit Dependencies** to modify their custom parameters and hardware requirements
4. You can choose either a **Branch** or a **Tag** for each dependency (the latest build from the branch will be used)
![Screenshot - Create New Application](/docs/assets/adding-dependencies-4-5.png)

## Tagging & deploying an application


When you create an application it is by default in a _draft_ state. When you make changes to an application, ie. add a new dependency or change the version of a KintoBlock within this application, you can create a new tag.

Unlike KintoBlocks, this is unrelated to GitHub, but is a way to manage versions of your application.

When you tag an application this is marking it as ready for deployment and the application will be deployed.

This is useful if, for example, you add a dependency and everything breaks, you quickly can deploy a previous version of your app to revert your changes.

1. Open the **Application** you want to tag and deploy
2. Click **Tag & Deploy**
![Screenshot - Tag and Deploy](/docs/assets/tagging-and-deploying-1-2.png)
3. Choose the environment, enter a desired tag number and notes, then click Tag & Deploy
![Screenshot - Enter Info](/docs/assets/tagging-and-deploying-3.png)

## Talking to an application

After you have deployed your application, you can either talk to it in gRPC or HTTP.
(gRPC to HTTP is work in progress and will be added in upcoming updates)

1. Go to **Applications**, click the menu icon
2. Select **View Environments**
   ![Screenshot - View Environment](/docs/assets/talking-to-applications-1-2.png)
3. Click Edit on the environment you wish to talk to
   ![Screenshot - Edit Environment](/docs/assets/talking-to-applications-3.png)
4. Here you can get the **client ID** and **secret key**
   ![Screenshot - Client ID and Secret Key](/docs/assets/talking-to-applications-4.png)
5. Authenticate to KintoHub with:

```
POST https://api.kintohub.com/authorize
BODY { "clientId":"7219e244cbf34f06bb25121d738cae26", "secret":"ZUCHayuTOK7N" }
```

You will get a response that looks like this:

```
{ "data": { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQtaWQiOiI3MjE5ZTI0NGNiZjM0ZjA2YmIyNTEyMWQ3MzhjYWUyNiIsInNlc3Npb24taWQiOiI5MzQ3OTFhYy1kNzllLTQ5NWQtYjVlYy01OTJlMmU4MDRjMTciLCJuYmYiOjE1MzA4NTYzNTUsImV4cCI6MTUzMjA2NTk1NSwiaWF0IjoxNTMwODU2MzU1LCJpc3MiOiJNaWRkbGV3YXJlIiwiYXVkIjoiTWlkZGxld2FyZSJ9.Cer1EyzryW5qKfqpSqs5u2t6BunoeUtjpwX_fFAzVj4" } }
```

> Alternatively, you can authenticate with gRPC by using the proto file attached near the end of this page and connecting to grpc.kintohub.com

Once authenticated, you can talk to your application (and its KintoBlock dependencies)!
Simply make a call to:

```
https://api.kintohub.com/{block-name}
```

Be sure to include in the authorization header. Example:

```
{ "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQtaWQiOiI3MjE5ZTI0NGNiZjM0ZjA2YmIyNTEyMWQ3MzhjYWUyNiIsInNlc3Npb24taWQiOiI5MzQ3OTFhYy1kNzllLTQ5NWQtYjVlYy01OTJlMmU4MDRjMTciLCJuYmYiOjE1MzA4NTYzNTUsImV4cCI6MTUzMjA2NTk1NSwiaWF0IjoxNTMwODU2MzU1LCJpc3MiOiJNaWRkbGV3YXJlIiwiYXVkIjoiTWlkZGxld2FyZSJ9.Cer1EyzryW5qKfqpSqs5u2t6BunoeUtjpwX_fFAzVj4" }
```

(Use same token from the example response in step 5.)

To make a call to gRPC, talk to grpc.prod.kintohub.com with your gRPC service proto file, but include in the grpc-meta-data the authorization header as well.

## Future Features

### Coming Soon:

* Deleting an application

These feature are not ready yet but you can follow these feature [here](https://github.com/kintohub/backlog/issues/14) on our [GitHub backlog](https://github.com/kintohub/backlog), where you can comment on any open issues, or add any issues you would like us to tackle.
