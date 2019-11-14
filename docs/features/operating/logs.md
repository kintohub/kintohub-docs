---
title: Logs
---

The log files maintain a record of errors, informational events, and warnings that have occurred in a project. 

There are two kinds of log records:

- **Deployments Logs**:  A project can consist of one or more KintoBlocks. The Deployment Logs traces the activity of every individual KintoBlock in a Project and maintains a separate log file on each one of them. This log file is especially helpful in identifying the errors that occur during deployment.

- **Console Logs**: The Console Logs contain the records of general activity that occur in a Project(For e.g. CRON Job activity). These logs also contain the information related to KintoBlocks and Instances in the project.


To view the **Deployment Logs**, follow the steps outlined here:

1. Open a **Project**.

2. Click on the **Expand Project History** button displayed on the center of the **Project Manage** page.

3. Click on the **Deployment Logs** button.

    ![Deployment Logs](/docs/assets/deployment-logs.png)

4. The page will automatically redirect to the **Deployment Logs** page where the logs can be viewed.

5. Choose the desired **Date Range**: `Real-time` or `History`, in the dropdown provided.

    ![Deployment Logs Page](/docs/assets/deployment-logs-page.png)


To view the **Console Logs**, follow the steps outlined here:

1. Open a **Project**.

2. Click on the **Logs** button displayed on the top right of the **Project Manage** page.

    ![Console Logs](/docs/assets/console-logs.png)

3. The page will automatically redirect to the **Console Logs** page where the logs can be viewed.

4. Click on the **KintoBlocks** field to obtain KintoBlocks dropdown.

    ![Console Logs Page](/docs/assets/console-logs-page.png)

5. Switch between the **KintoBlocks** to view logs of the concerned KintoBlock.

6. There is also an option to filter the logs using the `Search logs` and `Instance` field.


>Note: The logs pertaining to current or recent activity can be found in “Real-time” logs. The records of events that occurred in the past are displayed under “History”. Do note that the events in History logs are purged after two days.

> Note: Enable the Keep Console Pinned to the Bottom toggle to cause the recent logs to appear on the bottom of the screen at all times. This will prevent scrolling the page from time to time to get a preview of the most recent activity.