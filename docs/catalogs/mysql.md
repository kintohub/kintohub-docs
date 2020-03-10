---
title: MySQL
sidebar_label: MySQL
---

## Overview

[MySQL](https://www.mysql.com/) is the world’s most popular open source database. With its proven performance, reliability, and ease-of-use, MySQL has become the leading database choice for web-based applications, used by high profile web properties.

## Deployment

- This takes around 3 minutes to deploy
- **You can deploy this catalog with default environment variables*

## FAQ

**Q: Why the deployment fails?**  
A: Check the environment variable `resources.requests.memory`, `resources.limit.memory` and the memory of the block are equal. Provide at least 512MB memory.

**Q: Why cannot connect to mysql?**  
A: Copy the connection string by clicking `Connect` button. Only blocks that are deployed in the same environment can connect to the catalog.


## Environment Variables

The list below shows only supported environment variables. You can check out the full list [here](https://github.com/kintohub/kinto-catalog/tree/master/mysql#configuration), or [contact us](https://discord.gg/QVgqWuw) if the environment variable you want is not on the list.


| Key        | Default Value           | Description  |
| ---  | --- | --- |
| **root.password** |  rootpassword | root password. cannot be changed once deployed |
| **db.user**     | user      |  default db user name |
| **db.password** |  password  |  default db password |
| **replication.enabled** |  false  | enable replication or not  |
| **imageTag** |  5.7.14  |  the image version that use |
| **persistence.size** |  8Gi  |  persistence disk size |
| **db.name** |  defaultdb  |  default database that will be created when first deployed |
| **resources.limits.cpu** |  500m  |  cpu limit |
| **resources.limits.memory** |  512Mi  |  memory limit |
| **resources.requests.cpu** |  500m  |  request cpu|
| **resources.requests.memory** |  512Mi  |  request memory |
