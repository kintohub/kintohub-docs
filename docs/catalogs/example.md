---
title: PostgreSQL
sidebar_label: PostgreSQL
---

## Overview

This is an example microservice. You can deploy and test the behaviour of a backend api.


## Deployment

- This takes around 30 seconds to deploy
- **You can deploy this catalog with default environment variables*

## FAQ

**Q: Why the deployment fails?**  
A: Check the environment variable `resources.memory` and the memory of the block are equal. Provide at least 256MB memory.

**Q: Why cannot connect to postgres?**  
A: Copy the connection string by clicking `Connect` button. Only blocks that are deployed in the same environment can connect to the catalog.

## Environment Variables

You can check out the full list [here](https://github.com/kintohub/kinto-catalog/tree/master/elasticsearch), or [contact us](https://discord.gg/QVgqWuw) if the environment variable you want is not on the list.
