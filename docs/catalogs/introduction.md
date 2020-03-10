---
title: Catalogs
sidebar_label: Introduction
---

[Hasura](https://hasura.io) is an open source engine that connects to your databases & microservices and auto-generates a production-ready GraphQL backend.

## Deployment

- This catalog requires [Postgres]()
- This takes around 3 minutes to deploy (together with postgres)
- **You can deploy this catalog with default environment variables*

## Environment Variables

The list below shows only supported environment variables. You can check out the full list [here], or [contact us] if the environment variable you want is not on the list.


| Key        | Default Value           | Description  |
| ---  | --- | --- |
| **HASURA_GRAPHQL_UNAUTHORIZED_ROLE** |  anonymous |  |
| **HASURA_GRAPHQL_MIGRATIONS_DIR**     | /migrations      |  migration folder |
| **HASURA_GRAPHQL_ENABLE_CONSOLE** |  true  |  enable web console or not |
| **HASURA_GRAPHQL_DATABASE_URL** |  postgres://postgres:tea@cs-postgres:5432/postgres  |  connection string to postgres database |
