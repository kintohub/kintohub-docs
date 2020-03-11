---
title: RabbitMQ
sidebar_label: RabbitMQ
---

## Overview

[RabbitMQ](https://www.rabbitmq.com/) is lightweight and easy to deploy on premises and in the cloud. It supports multiple messaging protocols. RabbitMQ can be deployed in distributed and federated configurations to meet high-scale, high-availability requirements.

This chart ensures High-Avaliability by default.

## Deployment

- This takes about 3 minutes to deploy
- *\*You can deploy RabbitMQ with default environment variables*
- *\*Some environment variables cannot be changed after deployment*

## FAQ

**Q: How to connect to RabbitMQ?**  
A: Copy the connection string by clicking `Connect` button. Only blocks that are deployed in the same environment can connect to each other.

## Environment Variables

The list below shows only supported environment variables. You can check out the full list [here](https://github.com/kintohub/kinto-catalog/tree/master/rabbitmq#configuration), or [contact us](https://discord.gg/QVgqWuw) if the environment variable you want is not on the list.

| Key        | Default Value           | Description  |
| ---  | --- | --- |
| **rabbitmqUsername\*** |  guest | username for rabbitmq |
| **rabbitmqPassword\*** |  guest | password for rabbitmq |
| **managementUsername\*** |  management | management username |
| **managementPassword\*** |  `nil` | management password |
| **definitions.users** |  `nil` | additional users |
| **rabbitmqMemoryHighWatermark** | 256MB |  memory high watermark |
| **rabbitmqMemoryHighWatermarkType** | absolute |  memory high watermark type. Either absolute or relative |
| **replicaCount** |  1  |  number of RabbitMQ nodes |
| **persistentVolume.enabled** |  false  |  persistence data to disk. setting to `true` to avoid data loss after restart |
| **persistentVolume.size** |  1Gi  |  persistence disk size |
| **resources.memory** | 512Mi | memory allocated to every rabbitmq node |
| **resources.cpu** | 500m | memory allocated to every rabbitmq node |

\* Cannot be changed after deployment.
