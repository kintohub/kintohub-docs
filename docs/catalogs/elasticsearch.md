---
title: Elasticsearch
sidebar_label: Elasticsearch
---

## Overview

[Elasticsearch](https://www.elastic.co/elasticsearch/) is a distributed, RESTful search and analytics engine capable of addressing a growing number of use cases. As the heart of the Elastic Stack, it centrally stores your data so you can discover the expected and uncover the unexpected.

## Deployment

- This takes about 3 minutes to deploy
- *\*You can deploy Elasticsearch with default environment variables*
- *\*Some environment variables cannot be changed after deployment*

## FAQ

**Q: How to connect to ElasticSearch?**  
A: Copy the connection string by clicking `Connect` button. Only blocks that are deployed in the same environment can connect to each other.

## Environment Variables

You can check out the full list [here](https://github.com/kintohub/kinto-catalog/tree/master/elasticsearch#configuration), or [contact us](https://discord.gg/QVgqWuw) if the environment variable you want is not on the list.

| Key        | Default Value           | Description  |
| ---  | --- | --- |
| **client.replicas** | 1 | how many client nodes your cluster is running |
| **client.heapSize** | 256m | heapsize allocated to every client node |
| **client.resources.cpu** | 1 | cpu allocated to every client node |
| **client.resources.memory** | 512Mi | memory allocated to every client node  |
| **cluster.env.MINIMUM_MASTER_NODES** | 2 | min number of master nodes that should be up to consider the cluster healthy |
| **master.replicas** | 2 | how many master nodes your cluster is running |
| **master.heapSize** | 256m | heapsize allocated to every master node |
| **master.persistence.enabled** | false | whether or not master datas are persisted in a disk  |
| **master.persistence.size** | 4Gi | size of the disk on master nodes |
| **master.resources.memory** | 512Mi | memory allocated to every master node |
| **master.resources.cpu** | 500m | cpu allocated to every master node |
| **data.replicas** | 2 | how many data nodes your cluster is running |
| **data.heapSize** | 256m | heapsize allocated to every data node |
| **data.persistence.enabled** | false | whether or not data datas are persisted in a disk  |
| **data.persistence.size** | 4Gi | size of the disk on data nodes |
| **data.resources.memory** | 512Mi | memory allocated to every data node |
| **data.resources.cpu** | 500m | cpu allocated to every data node |


