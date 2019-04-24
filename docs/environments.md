---
title: Environment
---

## How to create an Environment

By having multiple environments your deployment can be thoroughly tested before it is deployed and made available to users. Multiple environments enable a development team to work on parallel efforts.

To create an Environment, follow the steps mentioned below:

1. Open a **Deployment**.

2. Click on the **+** icon displayed in the **Add New Environment** card.

    ![Screenshot](/docs/assets/add-new-env.png)
    
3. Enter your `Environment` name.

4. Click on **Add New Environment** button to create an environment.


## View Environments

Each environment is displayed as an individual card in the sidebar of the **Deployment Manage** page. By clicking on a card, the following details of the environment can be viewed:

- **Status & History**

- **KintoBlocks**

- **API access**

- **Delete Environment**


## Deploy KintoBlocks into an Environment

An environment needs to be deployed in the following conditions:

- When a new KintoBlock is added to the deployment.

- If an existing KintoBlock is deleted from the deployment.

- If an existing KintoBlock is updated with a new branch, tag or a commit.

To deploy an environment, follow the steps mentioned below:

1. Open a **Deployment**.

2. Under **KintoBlocks** section, click on the **+** icon displayed in the **KintoBlocks search bar**.

3. Select the KintoBlock from the search dropdown.

4. Click on the **X** icon displayed at the top right of the KintoBlock to remove it.

5. Click on the **Deploy** button to deploy the environment.

An environment can be redeployed even when there are no changes made to it. To redeploy an environment, follow the steps mentioned below:

1. Open a **Deployment**.

2. Click on the **Deploy** button.
