---
title: RabbitMQ
sidebar_label: RabbitMQ
---

## Overview

[RabbitMQ](https://www.rabbitmq.com/) is lightweight and easy to deploy on premises and in the cloud. It supports multiple messaging protocols. RabbitMQ can be deployed in distributed and federated configurations to meet high-scale, high-availability requirements.

This chart ensures High-Avaliability by default.

## Deployment

- This takes around 3 minutes to deploy (together with postgres)
- **You can deploy this catalog with default environment variables*

## FAQ

**Q: Why cannot connect to RabbitMQ?**  
A: Copy the connection string by clicking `Connect` button. Only blocks that are deployed in the same environment can connect to the catalog.

## Environment Variables

The list below shows only supported environment variables. You can check out the full list [here](https://github.com/kintohub/kinto-catalog/tree/master/rabbitmq#configuration), or [contact us](https://discord.gg/QVgqWuw) if the environment variable you want is not on the list.


| Key        | Default Value           | Description  |
| ---  | --- | --- |
| **definitions.users** |  `nil` | additional users |
| **rabbitmqMemoryHighWatermark** | 256MB |  memory high watermark |
| **rabbitmqMemoryHighWatermarkType** | absolute |  memory high watermark type. Either absolute or relative |
| **image.tag** |  3.7.19-alpine  |  image tag |
| **replicaCount** |  3  |  number of RabbitMQ nodes |
| **persistentVolume.enabled** |  false  |  persistence data to disk. setting to `true` to avoid data loss after restart |
| **persistentVolume.size** |  8Gi  |  persistence disk size |

