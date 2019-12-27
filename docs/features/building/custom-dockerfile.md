---
title: Custom Dockerfile
sidebar_label: Custom Dockerfile
---

## What are Custom Dockerfile?

Dockerfile is a set of instructions or commands that are used for creation of the KintoBlock during the build or deploy process.

To create a KintoBlock using Dockerfile, follow the steps mentioned below:

### Creating a Website with Custom Dockerfile.

1. Select **KintoBlock** from the sidebar.

2. Click on the **Create New KintoBlock** card.

3. Select the **Website KintoBlock** flavor.

4. Fill the **Choose Repository** form by specifying the details pertaining to the linked repo.

5. Click on the **Continue** button.

6. Next, specify the details on `Name` and `Internal Name`.

7. Select the Website in `Choose a Type`.

8. If **Static from Build** type is selected in `Choose a Type` then, specify the `Language` as `Custom Dockerfile` and enter the `Build Output Folder`.

    ![Static from Build Custom Dockerfile](/docs/assets/static-from-build-custom-dockerfile.png)

9. If **Dynamic Web App** type is selected in `Choose a Type` then, specify the `Language` as `Custom Dockerfile` and enter the `Port`.

    ![Dynamic Web App Custom Dockerfile](/docs/assets/dynamic-web-app-custom-dockerfile.png)

10. Click on the **Create Website** button to successfully create a KintoBlock.

### Creating a Microservice with Custom Dockerfile.

1. Select **KintoBlock** from the sidebar.

2. Click on the **Create New KintoBlock** card.

3. Select the **Microservice KintoBlock** flavor.

4. Fill the **Choose Repository** form by specifying the details pertaining to the linked repo.

5. Click on the **Continue** button.

6. Next, specify the details on `Name` and `Internal Name`.

7. Specify the `Language` as `Custom Dockerfile` and required `Port`.

    ![Microservice Custom Dockerfile](/docs/assets/microservice-custom-dockerfile.png)

8. Click on the **Create Microservice** button to successfully create a KintoBlock.

### Creating a Custom Service with Custom Dockerfile.

1. Select **KintoBlock** from the sidebar.

2. Click on the **Create New KintoBlock** card.

3. Select the **Custom Service KintoBlock** flavor.

4. Fill the **Choose Repository** form by specifying the details pertaining to the linked repo.

5. Click on the **Continue** button.

6. Next, specify the details on `Name` and `Internal Name` and select `Custom Dockerfile` as the `Source Type`.

    ![Custom Service Custom Dockerfile](/docs/assets/customservice-custom-dockerfile.png)

7. Click on the **Create Custom Service** button to successfully create a KintoBlock.

### Creating a Job with Custom Dockerfile.

1. Select **KintoBlock** from the sidebar.

2. Click on the **Create New KintoBlock** card.

3. Select the **Job KintoBlock** flavor.

4. Fill the **Choose Repository** form by specifying the details pertaining to the linked repo.

5. Click on the **Continue** button.

6. Next, specify the details on `Name` and `Internal Name` and select `Custom Dockerfile` as the `Source Type`.

    ![Job Custom Dockerfile](/docs/assets/job-custom-dockerfile.png)

7. Click on the **Create Job* button to successfully create a KintoBlock.

> Note: In case the linked repo does not contain `Dockerfile` or an invalid `Build Output folder` and `Port` number, the build will fail.