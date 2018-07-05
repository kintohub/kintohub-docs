---
title: Workspaces
---

## Overview

Workspaces are here to allow you to collaborate with people in your team.
Completely segreggated spaces will allow you to share kintoapps, kintoblocks and manage them in the same environment.

You can invite people by email to collaborate with you on any project you may have in your workspace

## Creating a workspace

1. Select Workspaces from the sidebar
![Screenshot - Select Workspace](/docs/assets/creating-a-workspace-1.png)
2. Enter the desired name and invite members
3. Click **Create New Workspace**
![Screenshot - Create New Workspace](/docs/assets/creating-a-workspace-2-3.png)

## Connecting a Github Organization

1. Click the **Edit** icon for the workspace you want to modify
![Screenshot - Edit Workspace](/docs/assets/connecting-a-github-organization-1.png)
2. Click **Link GitHub Organization** under the GitHub Connection section
![Screenshot - Link GitHub Organization](/docs/assets/connecting-a-github-organization-2.png)
3. You will be promoted to log in to GitHub
![Screenshot - Authorize KintoHub](/docs/assets/connecting-a-github-organization-3.png)
4. Click on **Grant** to give KintoHub permission to your organization
5. Click **Authorize KintoHub**
![Screenshot - Authorize KintoHub](/docs/assets/connecting-a-github-organization-4-5.png)


## Managing Workspaces

### Add members and modify permissions

1. Open any project (a KintoBlock or an application) you want to edit
2. If you are an admin of a Workspace you can invite other members
3. Modify the members and their roles


### Permissions table for a workspace


| Role        |      Admin      | Member  |
| ------------- |:-------------:| :-----:|
| add members      | ✓ | ✘ |
| link github organization     | ✓ | ✘ |
| rename workspace | ✓ | ✘ |
| make an app/block public or private | ✓ | ✘ |
| can edit workspace | ✓ | ✘ |
| can see all public projects | ✓ | ✓ |
| can edit assigned/public projects | ✓ | ✓ |
| can see all private projects | ✓ | ✘ |


## App and Block permissions

### Permissions for App

1. Open any project (a KintoBlock or an application) you want to edit
2. If you are an admin or the owner of a private project (only some members in that workspace is an editor), you will see an **edit button**
![Screenshot - Project Collaborators](/docs/assets/managing-members-1-2.png)
3. Modify the members and their roles
![Screenshot - Edot Collaborators](/docs/assets/managing-members-3.png)


| Role        |      Owner/Admin      | Editor |
| ------------- |:-------------:| :-----:|
| Add other collaborator      | ✓ | ✘ | 
| Modify app     | ✓ | ✓ | 
| Make app public or private | ✓ | ✘ |

### Permissions for Block

| Role        |      Owner/Admin      | Editor |
| ------------- |:-------------:| :-----:|
| Modify block     | ✓ | ✓ |

## Future Features

### Coming Soon:

* Revoking Access to a Workspace

* Leaving a Workspace

* Deleting a Workspace

These feature are not ready yet but you can follow these feature [here](https://github.com/kintohub/backlog/issues/13) on our [GitHub backlog](https://github.com/kintohub/backlog), where you can comment on any open issues, or add any issues you would like us to tackle