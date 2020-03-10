---
title: Hasura
sidebar_label: Hasura
---

## Overview

[Hasura](https://hasura.io) is an open source engine that connects to your databases & microservices and auto-generates a production-ready GraphQL backend.

## Deployment

- This catalog requires [Postgres](/docs/catalogs/postgres)
- This takes around 3 minutes to deploy (together with postgres)
- **You can deploy this catalog with default environment variables*

## FAQ

**Q: Why the deployment fails?**  
A: Check the `HASURA_GRAPHQL_DATABASE_URL`. If your specify username/password on you `Postgres` block, please make sure it is the same on `HASURA_GRAPHQL_DATABASE_URL` as well.  

**Q: Why cannot connect to web console?**  
A: Please make sure `HASURA_GRAPHQL_ENABLE_CONSOLE` is set to `true`. And make sure `Custom Domain` and `Security` is not enabled.  

## Environment Variables

The list below shows only supported environment variables. You can check out the full list [here](https://hasura.io/docs/1.0/graphql/manual/deployment/graphql-engine-flags/reference.html#command-flags), or [contact us](https://discord.gg/QVgqWuw) if the environment variable you want is not on the list.


| Key        | Default Value           | Description  |
| ---  | --- | --- |
| **HASURA_GRAPHQL_UNAUTHORIZED_ROLE** |  anonymous |  |
| **HASURA_GRAPHQL_MIGRATIONS_DIR**     | /migrations      |  migration folder |
| **HASURA_GRAPHQL_ENABLE_CONSOLE** |  true  |  enable web console or not |
| **HASURA_GRAPHQL_DATABASE_URL** |  postgres://postgres:tea@cs-postgres:5432/postgres  |  connection string to postgres database, *default to Postgres catalog* |