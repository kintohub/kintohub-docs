---
title: Environment Variables
---

## What are the Environment Variables?

Environment variables are used to control static information specified in the Deployment. These are often configuration values like `Private_Keys` or `Port`. Environment variables aid in providing compatibility for Deployments to run seamlessly on multiple environments. They are specific to a **branch** of a KintoBlock, so if you switch branches and want to use that particular branch in a Deployment you will need to input the **Environment Variables** on that branch too.

It is recommended to add **Environment value** while a variable is created. The Environment values can be added on the **KintoBlock manage page** or via **Configure Dependencies** button in Deployment Manage Page.


## How to define Environment variables in a KintoBlock?

The Environment variables can be added to a KintoBlock on the **KintoBlock Manage page** by following the steps mentioned below:

1. Open the KintoBlock.

2. Select the required branch in your repository.

3. Scroll down to the **Environment Variable** section at the bottom of the form.

   { TODO : Raven Add image of environment variable section }

4. Add the **Variable name** and set the default value. Users can override the default value before they deploy.

5. Click on the **+** button.

6. By default, each variable added will be regarded as an optional variable. If you would like to mandate the use of any specific variable, enable the **This is a required value option**.

   { TODO: Raven Add GIF video of enabling "This is a required value option switch" }
 
 
## Manage Environment Variables

It is possible to edit and delete an Environment variable in KintoBlock at any required point. The edit and delete operations are also carried out in the **KintoBlocks Manage page**:

1. Open the KintoBlock.

2. Select the required branch in your repository.

3. Scroll down to the **Environment Variable** section at the bottom of the form.

4. To edit, overwrite the existing Variable and Value with the updated values.

5. To delete, click on the **X** icon displayed beside an environment variable.

6. Click on the **Save Changes** button to apply the changes.

### Points to remember about Environment Variables

- The owner of a KintoBlock can add, edit or delete Environment variables and values.
- Public users with access to a KintoBlock can edit the environment values via **Configure Dependencies** button in Deployment Manage page.