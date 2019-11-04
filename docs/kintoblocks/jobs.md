---
title: Job KintoBlock
sidebar_label: Job
---

## What are Jobs?

**Jobs** are KintoBlocks that support event-based tasks. A Job KintoBlock can be used to add various tasks to deployments for e.g. a scheduled job that dispatches notification emails. Jobs can be of two types - one-time or repeatable and the type of job can be specified in the Project integrated with the KintoBlock.

## Creating a Job

1. Select **KintoBlock** from the sidebar.

2. Click on the **Create New KintoBlock** card.

3. Select the **Job KintoBlock** flavor

4. Fill the **Choose Repository** form by specifying the details pertaining to the linked repo.

    ![Repository for Job](/docs/assets/choose-repository-job.png)

5. Click on the **Continue** button.

6. Next, specify the details on `Name`, `Internal Name` and `Source Type`.

7. Click on the **Create Job** button to successfully create the KintoBlock.

   ![Create Job](/docs/assets/create-job.png)

## Configure a Job

Jobs created in KintoHub can be configured as `Run Once` or `Repeat Schedule`.

The **Run Once** option can be configured in two ways:

1. **Pre-Deployment**: This Job will be run before the project deployment is started.

2. **Post-Deployment**: This Job will be run after the project deployed is completed.

Pre-Deployment and Post-deployment jobs can be used in cases where a specific set of commands needs to be executed. For e.g. Running a database migration or sending a slack message.

The **Repeat Scheduling** option is used in cases where the job is required to run often or repeatedly. This job option can be used in creating a daily back-up of databases or in test execution of an application on a daily basis.


To configure the Job KintoBlock for Project, follow the steps mentioned below: 

1. Open the **Job Project**.

2. Scroll down to **KintoBlocks** section displayed at the bottom of the **Project Manage** page.

    ![Configure Job](/docs/assets/configure-job.png)

3. Click on **Configure KintoBlock** of the Job KintoBlock that needs to be modified.

    ![Run Once](/docs/assets/run-once.png)

4. If a one-time job is required, click on **Run Once** and select **Pre-Deployment** or **Post-Deployment**. 

5. In the case of a recurring task, click on **Repeat Schedule** and enter your own **CRON PATTERN** or choose any **Quick Patterns**.
    
    ![Repeat Schedule](/docs/assets/repeat-schedule.png)

6. Click on **Done Configuring** button to apply the changes.

Once the above steps are successfully performed, the Job is all set for execution.
