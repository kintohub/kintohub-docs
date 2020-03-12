---
title: PostgreSQL
sidebar_label: PostgreSQL
---

## Overview

[PostgreSQL](https://www.postgresql.org/) PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.

## Deployment

- This takes about 1 minutes to deploy (together with postgres)
- *\*You can deploy Postgres with default environment variables*
- *\*Some environment variables cannot be changed after deployment*

## FAQ

**Q: Why the deployment fails?**  
A: Check the environment variable `resources.memory` and the memory of the block are equal. Provide at least 256MB memory.

**Q: How to connect to postgres?**  
A: Copy the connection string by clicking `Connect` button. Only blocks that are deployed in the same environment can connect to each other.

## Environment Variables

The list below shows only supported environment variables. You can check out the full list [here](https://github.com/kintohub/kinto-catalog/tree/master/postgresql#parameters), or [contact us](https://discord.gg/QVgqWuw) if the environment variable you want is not on the list.

| Key        | Default Value           | Description  |
| ---  | --- | --- |
| **replication.enabled** |  false | enable replicas |
| **replication.slaveReplicas**     | 1      |  number of replicas |
| **postgresqlPassword\*** |  creators_gate_psql_00  |  password for superadmin |
| **postgresqlDatabase\*** |  `nil`  |  empty value will create `postgres` by default  |
| **persistence.enabled** |  false  |  persistence data to disk. setting to `true` to avoid data loss after restart |
| **persistence.size** |  8Gi  |  persistence disk size |
| **resources.memory** |  256Mi  |  memory limit  |
| **resources.cpu** |  250m  |  cPU limit |
| **postgresqlExtendedConf.maxConnections** |  100  |  maximum connections allowed |

\* Cannot be changed after deployment.
