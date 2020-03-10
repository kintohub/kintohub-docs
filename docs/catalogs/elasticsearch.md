---
title: Elasticsearch
sidebar_label: Elasticsearch
---

## Overview

[Elasticsearch](https://www.elastic.co/elasticsearch/) Elasticsearch is a distributed, RESTful search and analytics engine capable of addressing a growing number of use cases. As the heart of the Elastic Stack, it centrally stores your data so you can discover the expected and uncover the unexpected.

## Deployment

- This takes around 3 minutes to deploy (together with postgres)
- **You can deploy this catalog with default environment variables*

## FAQ

**Q: Why the deployment fails?**  
A: Check the environment variable `resources.memory` and the memory of the block are equal. Provide at least 256MB memory.

**Q: Why cannot connect to postgres?**  
A: Copy the connection string by clicking `Connect` button. Only blocks that are deployed in the same environment can connect to the catalog.

## Environment Variables

You can check out the full list [here](https://github.com/kintohub/kinto-catalog/tree/master/elasticsearch), or [contact us](https://discord.gg/QVgqWuw) if the environment variable you want is not on the list.
