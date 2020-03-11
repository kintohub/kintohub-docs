---
title: NATS
sidebar_label: NATS
---

## Overview

[NATS](https://nats.io/) is a simple, secure and high performance open source messaging system for cloud native applications, IoT messaging, and microservices architectures.

## Deployment

- This takes about 3 minutes to deploy
- *\*You can deploy Nats with default environment variables*
- *\*Some environment variables cannot be changed after deployment*

## FAQ

**Q: How to connect to NATS?**  
A: Copy the connection string by clicking `Connect` button. Only blocks that are deployed in the same environment can connect to each other.

## Environment Variables

The list below shows only supported environment variables. You can check out the full list [here](https://github.com/kintohub/kinto-catalog/tree/master/nats#configuration), or [contact us](https://discord.gg/QVgqWuw) if the environment variable you want is not on the list.

| Key        | Default Value           | Description  |
| ---  | --- | --- |
| **replicaCount** |  1 | number of NATS nodes running |
| **auth.enabled**     | true      |  enable client authentication or not |
| **auth.user** |  nats_user  |  client authentication user |
| **auth.password** |  changeme  | client authentication password |
| **auth.token** |  changeme  | client authentication token |
| **clusterAuth.enabled** |  true  |  enable cluster authentication or not |
| **clusterAuth.user** |  nats_cluster  |  cluster authentication user |
| **clusterAuth.password** |  changeme  |  cluster authentication password |
| **clusterAuth.token** |  changeme |  cluster authentication tplem |
| **maxConnections** |  100  |  maximum number of client connections |
| **maxControlLine** |  512  |  maximum protocol control line |
| **maxPayload** |  65536  |  maximum size of payload |
| **writeDeadline** |  2s  |  duration the server can block on a socket write to a client |
| **resources.memory** |  512Mi  |  memory allocated to every mongodb node |
| **resources.cpu** |  500m |  cpu allocated to every mongodb node |

\* Cannot be changed after deployment.
