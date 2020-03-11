---
title: MySQL
sidebar_label: MySQL
---

## Overview

[MySQL](https://www.mysql.com/) is the world’s most popular open source database. With its proven performance, reliability, and ease-of-use, MySQL has become the leading database choice for web-based applications, used by high profile web properties.

## Deployment

- This takes around 3 minutes to deploy
- **You can deploy Mysql with default environment variables*

## FAQ

**Q: Why the deployment fails?**  
A: Check the environment variable `resources.memory`. Provide at least 512MB memory.

**Q: How to connect to mysql?**  
A: Copy the connection string by clicking `Connect` button. Only blocks that are deployed in the same environment can connect to each other.

## Environment Variables

The list below shows only supported environment variables. You can check out the full list [here](https://github.com/kintohub/kinto-catalog/tree/master/mysql#configuration), or [contact us](https://discord.gg/QVgqWuw) if the environment variable you want is not on the list.

| Key        | Default Value           | Description  |
| ---  | --- | --- |
| **replication.enabled** |  false  | enable replication or not  |
| **slave.replicas** |  1  |  number of slaves to run |
| **persistence.enabled** |  false  | whether or not your datas are persisted in a disk |
| **persistence.size** |  10Gi  |  persistence disk size |
| **root.password\*** |  changeme | root password. |
| **db.user\***     | admin  |  default db user name |
| **db.password\*** |  changeme  |  default db password |
| **db.name\*** |  defaultdb  |  default database that will be created when first deployed |
| **resources.cpu** |  500m  |  memory allocated to every mysql node |
| **resources.memory** |  512Mi  |  memory allocated to every mysql node |

\* Cannot be changed after deployment.
