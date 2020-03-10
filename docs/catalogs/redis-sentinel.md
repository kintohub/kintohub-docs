---
title: Redis Sentinel
sidebar_label: Redis Sentinel
---

## Overview

[Redis](http://redis.io/) is an advanced key-value cache and store. It is often referred to as a data structure server since keys can contain strings, hashes, lists, sets, sorted sets, bitmaps and hyperloglogs.

This catalog ensures High-Avaliability by default. For a more lightweight redis, please visit [here](/docs/catalogs/redis.md).This will install 3 nodes by default:

- one pod containing a redis master and sentinel container (optional prometheus metrics exporter sidecar available)
- two pods each containing a redis slave and sentinel containers (optional prometheus metrics exporter sidecars available)

## Deployment

- This takes around 5 minutes to deploy (together with postgres)
- **You can deploy this catalog with default environment variables*

## FAQ

**Q: Why cannot connect to Redis Sentinel?**  
A: Copy the connection string by clicking `Connect` button. Only blocks that are deployed in the same environment can connect to the catalog.

## Environment Variables

The list below shows only supported environment variables. You can check out the full list [here](https://github.com/kintohub/kinto-catalog/tree/master/redis-sentinel#configuration), or [contact us](https://discord.gg/QVgqWuw) if the environment variable you want is not on the list.


| Key        | Default Value           | Description  |
| ---  | --- | --- |
| **replicas** |  3 | number of master/slave nodes |
| **auth** | false |  enables or disables redis AUTH (Requires redisPassword to be set) |
| **redisPassword** | `nil` | client password |
| **persistence.enabled** | false |  persist data to disk or not |
| **persistence.size** | 10Gi  |  size of persistent disk |
| **resources.cpu** |  100m  |  cpu |
| **resources.memory** |  256Mi  |  memory |
| **sentinel.quorum** |  2  |  minimum number of servers necessary to maintain quorum |
