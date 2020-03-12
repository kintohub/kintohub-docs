---
title: Influx
sidebar_label: Influx
---

## Overview

[InfluxDB](https://www.influxdata.com/) is an open-source time series database (TSDB) optimized for fast, high-availability storage and retrieval of time series data in fields such as operations monitoring, application metrics, Internet of Things sensor data, and real-time analytics.

## Deployment

- This takes about 3 minutes to deploy
- **You can deploy Influx with default environment variables*

## FAQ

**Q: How to connect to influx?**  
A: Copy the connection string by clicking `Connect` button. Only blocks that are deployed in the same environment can connect to the catalog.

## Environment Variables

The list below shows only supported environment variables. You can [contact us](https://discord.gg/QVgqWuw) if the environment variable you want is not on the list.


| Key        | Default Value           | Description  |
| ---  | --- | --- |
| **resources.memory** |  512Mi | memory allocated to your influx node |
| **resources.cpu**     | 500m | cpu allocated to your influx node |
| **persistence.enabled** |  true  |  persistence data to disk |
| **persistence.size** |  8Gi  |  persistence disk size  |
| **setDefaultUser.enabled** |  true  |  set the default user/password when first deploy |
| **setDefaultUser.user.username\*** |  admin  |  default username |
| **setDefaultUser.user.password\*** |  changeme  |  default password  |

\* Cannot be changed after deployment.
