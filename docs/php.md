---
title: PHP
---

We are supporting PHP 7.2

See [https://github.com/kintohub/php-examples](https://github.com/kintohub/php-examples) for a fully working example


Dockerfile:
```dockerfile
FROM php:7.2-cli

RUN mkdir -p app
WORKDIR /app
COPY . /app

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN apt-get update
RUN apt-get install -y git

RUN composer install --no-interaction

EXPOSE 80

ENTRYPOINT ["php", "-S", "0.0.0.0:80"]
```

- `ENTRYPOINT ["php", "-S", "0.0.0.0:80"]` line cannot change because we need you to expose your app on port 80
- We are using `composer` to install dependencies so you can download any package you want in here (you will need to use a `compose.json` file).

Example composer.json:
```
{
    "require": {
        "slim/slim": "^3.0"
    }
}
```