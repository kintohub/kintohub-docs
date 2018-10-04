---
title: Mongo DB
---

#### Enabling MongoDB In Your Workspace

**Mongo DB** databases are available to add as a **KintoBlock** dependency. In order to add a database to a project, you must first enable it in your workspace.

Go to **Services** via the sidebar, and select **Mongo DB**. Details of the service are available underneath.

![Screenshot - Docs - Examples](/docs/assets/services_sidebar_screenshot.png)

_If you select this service, you can not disable it, but this service is currently free and you will not be charged without notification._

If you would like to use the service please select **Enable MongoDB**.

Once you have enabled the service it is possible to add it to a **KintoBlock** by enabling the toggle on the **KintoBlock Manage Page**.

![Screenshot - Docs - Examples](/docs/assets/kintoblock_services_screenshot.png)

#### Enabling MongoDB in Applications

You can also enable services on the **application manage page**. If a **KintoBlock** in your application requires a **MongoDB** database you must make sure it is enabled either here or via the services page.

#### Referring To a Database In Your Code

The **MongoDB Connection String** will be provided behind the scenes, and in your code you can refer to it as the environment variable `MONGO_CONNECTION_STRING`.

This is an example of a connection string:

```
mongodb://user:password@mongodb-svc:27017/auth-database
```

#### Points To Note

* If you add a database service to a **KintoBlock** that is already deployed, you will need to trigger a new build by adding a new commit. _In the future there will be a button to trigger a new build_.

* You have one database available per Application.

* Once you have enabled a service it is available to every account in the workspace.

* Allow at least one minute between activating MongoDB and using MongoDB
