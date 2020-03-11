---
title: Minio
sidebar_label: Minio
---

## Overview

[Minio](https://min.io/) is high performance, kubernetes-friendly object storage.

## Deployment

- This takes around 1 minute to deploy
- *\*You can deploy Minio with default environment variables*
- *\*Some environment variables cannot be changed after deployment*

## FAQ

**Q: How to connect to Minio?**
A: Copy the connection string by clicking `Connect` button. Only blocks that are deployed in the same environment can connect between each other.

## Environment Variables

The list below shows only supported environment variables. You can check out the full list [here](https://github.com/kintohub/kinto-catalog/tree/master/minio#configuration), or [contact us](https://discord.gg/QVgqWuw) if the environment variable you want is not in the list.

| Key        | Default Value           | Description  |
| ---  | --- | --- |
| **replicas** | 1 | how many nodes your cluster is running |
| **mode** | standalone | `distributed` if more than one replica |
| **persistence.enabled** | false | whether or not your datas are persisted in a disk |
| **persistence.size** | 10Gi | size of the disk  |
| **resources.memory** | 256Mi | memory allocated to every minio node |
| **resources.cpu** | 250m | memory allocated to every minio node |
| **accessKey\*** | false | minio access key |
| **secretKey\*** | admin | minio secret key |
| **environment.MINIO_BROWSER** | on | `off` if you want to disable the web UI |

\* Cannot be changed after deployment.
