---
title: Redis
sidebar_label: Redis
---

## Overview

[Redis](http://redis.io/) is an advanced key-value cache and store. It is often referred to as a data structure server since keys can contain strings, hashes, lists, sets, sorted sets, bitmaps and hyperloglogs.

## Deployment

- This takes around 3 minutes to deploy (together with postgres)
- **You can deploy this catalog with default environment variables*

## FAQ

**Q: Why cannot connect to Redis Sentinel?**  
A: Copy the connection string by clicking `Connect` button. Only blocks that are deployed in the same environment can connect to the catalog.

## Environment Variables

The list below shows only supported environment variables. You can check out the full list [here](https://github.com/kintohub/kinto-catalog/tree/master/redis#configuration), or [contact us](https://discord.gg/QVgqWuw) if the environment variable you want is not on the list.


| Key        | Default Value           | Description  |
| ---  | --- | --- |
| **cluster.enabled** | false | enable master/slave mode or not |
| **cluster.slaveCount** | 2 |  number of slaves node |
| **usePassword** | false | enable password or not |
| **master.resources.cpu** | 100m |  cpu request for master node |
| **master.resources.memory** | 256M  |  memory request for master node |
| **master.persistence.enabled** |  false  |  persist data on disk or not on master node |
| **master.persistence.size** |  8Gi  |  size of presistence disk |
| **master.resources.cpu** | 100m |  cpu request for master node |
| **master.resources.memory** | 256M  |  memory request for master node |
| **master.persistence.enabled** |  false  |  persist data on disk or not on master node |
| **master.persistence.size** |  8Gi  |  size of presistence disk |
| **password** | `nil` | client password |
