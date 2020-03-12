---
title: Wordpress
sidebar_label: Wordpress
---

## Overview

[WordPress](https://wordpress.com/) is an open source content management system allows you to build a website, including blog, business site, portfolio, online store, or anything else you can imagine.

## Deployment

- This catalog requires `PRO` plan as it exceeds 512MB memory (Mysql + Wordpress)
- This catalog requires [Mysql](/docs/catalogs/mysql)
- This takes about 5 minutes to deploy (together with mysql)
- *\*Please change the environment variables for username/password/database before deploying this catalog*
- *\*Some environment variables cannot be changed after deployment*

## FAQ

**Q: Why the deployment fails?**  
A: Check the `WORDPRESS_DB_USER`,`WORDPRESS_DB_PASSWORD` and `WORDPRESS_DB_NAME` match the one you set on `mysql` catalog. And specify the value for `WORDPRESS_DB_HOST` by clicking the connect button on deployed `mysql` catalog. Ensure you already subscribed to `PRO` plan.

**Q: How to setup custom domain?**  
A: After deployment you can click on the gear icon on `wordpress` block. Follow the instructions on `custom domain` section, and deploy again.

## Environment Variables

The list below shows only supported environment variables. You can [contact us](https://discord.gg/QVgqWuw) if the environment variable you want is not on the list.

| Key        | Default Value           | Description  |
| ---  | --- | --- |
| **WORDPRESS_DB_NAME** | wordpress | name of the database |
| **WORDPRESS_DB_PASSWORD** | wordpress |  password |
| **WORDPRESS_DB_USER** | wordpress | username |
| **WORDPRESS_DB_HOST** | cs-mysql:3306 |  hostname for mysql catalog |

\* Cannot be changed after deployment.
