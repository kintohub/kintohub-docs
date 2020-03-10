---
title: Wordpress
sidebar_label: Wordpress
---

## Overview

[WordPress](https://wordpress.com/) is an open source content management system allows you to build a website, including blog, business site, portfolio, online store, or anything else you can imagine.

## Deployment

- This catalog requires `PRO` plan as it exceeds 512MB memory (Mysql + Wordpress)
- This catalog requires [Mysql](/docs/catalogs/mysql)
- This takes around 5 minutes to deploy (together with mysql)
- **Please change the environment variables for username/password/database before deploying this catalog*

## FAQ

**Q: Why the deployment fails?**  
A: Check the `HASURA_GRAPHQL_DATABASE_URL`. If your specify username/password on you `Postgres` block, please make sure it is the same on `HASURA_GRAPHQL_DATABASE_URL` as well.  

**Q: Why cannot connect to the website?**  
A: Please make sure `HASURA_GRAPHQL_ENABLE_CONSOLE` is set to `true`. And make sure `Custom Domain` and `Security` is not enabled.  

## Environment Variables

The list below shows only supported environment variables. You can check out the full list [here](https://github.com/kintohub/kinto-catalog/tree/master/redis#configuration), or [contact us](https://discord.gg/QVgqWuw) if the environment variable you want is not on the list.


| Key        | Default Value           | Description  |
| ---  | --- | --- |
| **WORDPRESS_DB_NAME** | wordpress | name of the database |
| **WORDPRESS_DB_PASSWORD** | wordpress |  password |
| **WORDPRESS_DB_USER** | wordpress | username |
| **WORDPRESS_DB_HOST** | cs-mysql:3306 |  hostname for mysql catalog |
