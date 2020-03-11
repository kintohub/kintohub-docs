---
title: MongoDB
sidebar_label: MongoDB
---

## Overview

[MongoDB](https://www.mongodb.com/) is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.

## Deployment

- This takes around 1 minute to deploy
- This MongoDB even with 1 node is deployed as a replicaset so you will need to add `replicaSet` at the end of the [connection uri](https://docs.mongodb.com/manual/reference/connection-string/#urioption.replicaSet).
- *\*You can deploy MongoDB with default environment variables*
- *\*Some environment variables cannot be changed after deployment*

## FAQ

**Q: How to connect to MongoDB?**
A: Copy the connection string by clicking `Connect` button. Only blocks that are deployed in the same environment can connect between each other.

## Environment Variables

The list below shows only supported environment variables. You can check out the full list [here](https://github.com/kintohub/kinto-catalog/tree/master/mongodb#configuration), or [contact us](https://discord.gg/QVgqWuw) if the environment variable you want is not in the list.

| Key        | Default Value           | Description  |
| ---  | --- | --- |
| **replicas** | 1 | how many nodes your cluster is running |
| **replicaSetName\*** | rs0 | name of your replicaset, you will need it in your uri connection |
| **persistence.enabled** | false | whether or not your datas are persisted in a disk |
| **persistence.size** | 10Gi | size of the disk  |
| **resources.memory** | 512Mi | memory allocated to every mongodb node |
| **resources.cpu** | 500m | memory allocated to every mongodb node |
| **auth.enabled** | false | whether or not authentication is enabled on the cluster |
| **auth.adminUser\*** | admin | admin role username |
| **auth.adminPassword\*** | changeme | admin role password |
| **auth.key\*** | changeme | [replicaset key file value](https://docs.mongodb.com/manual/tutorial/enforce-keyfile-access-control-in-existing-replica-set/) |

\* Cannot be changed after deployment.
