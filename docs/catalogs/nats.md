---
title: NATS
sidebar_label: NATS
---

## Overview

[NATS](https://nats.io/) is a simple, secure and high performance open source messaging system for cloud native applications, IoT messaging, and microservices architectures.

## Deployment

- This takes around 3 minutes to deploy
- **You can deploy this catalog with default environment variables*

## FAQ

**Q: Why cannot connect to NATS?**  
A: Copy the connection string by clicking `Connect` button. Only blocks that are deployed in the same environment can connect to the catalog.


## Environment Variables

The list below shows only supported environment variables. You can check out the full list [here](https://github.com/kintohub/kinto-catalog/tree/master/nats#configuration), or [contact us](https://discord.gg/QVgqWuw) if the environment variable you want is not on the list.


| Key        | Default Value           | Description  |
| ---  | --- | --- |
| **image.tag** |  2.1.0-debian-9-r0  |  the image tag |
| **replicaCount** |  1 | number of NATS nodes |
| **auth.enabled**     | true      |  enable client authentication or not |
| **auth.user** |  nats_user  |  client authentication user |
| **auth.password** |  changeme  | client authentication password |
| **auth.token** |  `nil`  | client authentication token |
| **clusterAuth.enabled** |  true  |  enable cluster authentication or not |
| **clusterAuth.user** |  nats_cluster  |  cluster authentication user |
| **clusterAuth.password** |  `nil`  |  cluster authentication password |
| **clusterAuth.token** |  `nil`  |  cluster authentication tplem |
| **maxConnections** |  100  |  maximum number of client connections |
| **maxControlLine** |  512  |  maximum protocol control line |
| **maxPayload** |  65536  |  maximum size of payload |
| **writeDeadline** |  2s  |  duration the server can block on a socket write to a client |
