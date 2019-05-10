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

    ![Screenshot](/docs/assets/env-add-popup.png)

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


## Metrics

We have integrated Grafana metrics with your environment.The dashboard view of the metrics helps you to filter the statistics based on your workspace or environment.

These metrics are helpful to perform health checks on the environment and to troubleshoot issues.

To view metrics for an environment, follow the steps mentioned below:

1. Open a **Deployment**.

2. Click on the **Metrics** button displayed on the top right of the **Deployment Manage** page.

    ![Screenshot](/docs/assets/metrics-btn.png)

3. Enter the `Username` and `Password` of your KintoHub account in **Grafana** Login page.

    ![Screenshot](/docs/assets/grafana_login.png)

After successful login, you will be able to view the metrics of an environment. The metrics provide real-time updates for an environment and displays the following details:

- CPU usage.

- Memory Usage.

- Average Recieve Bytes.

- Average Transmit Bytes.

- Uptime.

- Number of Instances

![Screenshot](/docs/assets/grafana-metrics.png)
