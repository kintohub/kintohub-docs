---
title: InfluxDB
sidebar_label: InfluxDB
---

## Overview

[InfluxDB](https://www.influxdata.com/) is an open-source time series database (TSDB) optimized for fast, high-availability storage and retrieval of time series data in fields such as operations monitoring, application metrics, Internet of Things sensor data, and real-time analytics.

## Deployment

- This takes around 3 minutes to deploy
- **You can deploy this catalog with default environment variables*

## FAQ

**Q: Why cannot connect to influxdb?**  
A: Copy the connection string by clicking `Connect` button. Only blocks that are deployed in the same environment can connect to the catalog.

## Environment Variables

The list below shows only supported environment variables. You can [contact us](https://discord.gg/QVgqWuw) if the environment variable you want is not on the list.


| Key        | Default Value           | Description  |
| ---  | --- | --- |
| **image.repository** |  influxdb | image repository |
| **image.tag**     | 1.7.6-alpine |  image tag |
| **persistence.enabled** |  true  |  persistence data to disk |
| **persistence.size** |  8Gi  |  persistence disk size  |
| **setDefaultUser.enabled** |  true  |  set the default user/password when first deploy |
| **setDefaultUser.user.username** |  admin  |  default username |
| **setDefaultUser.user.password** |  coolpass  |  default password  |
