---
title: Languages
---

## Overview

For each language we require a specific structure for your Dockerfile to be able to interpret it and make it run on our platform


The Dockerfiles are language specific just like this one:

```dockerfile
FROM node:8.9.4

RUN mkdir -p app

WORKDIR /app

COPY . /app

RUN npm install

ENV PORT=80

EXPOSE 80

ENTRYPOINT ["npm","run","start"]
```

You can modify the Dockerfile in any way you find more convenient to use ANY build tool you want (inside Docker) 
however you will find a common behavior - set of rules for each language:

* Some are using multi-stage build with a base image (with all the dependencies) and a lighter runtime image to run the app 
* You need to export your compiled code or source files in the folder named `app`
* You will need to include a complementary file (depending on your language) to allow dependencies to be downloaded: like a `Gemfile` for `Ruby` or `requirements.txt` for `Python` with `pip`)

* expose the app on port `80`
* if the hostname is required by the framework/lib then it has to be set to `0.0.0.0`
* we would recommend to keep the same `ENTRYPOINT` as the example but depending on the language you can freely modify it
* Environment variables (ENV command) are not supported yet but is part of the backlog and will be coming soon

## C# / dotnet

We support dotnet 2.0

Dockerfile:
```dockerfile
FROM microsoft/dotnet:2.0-sdk AS build
WORKDIR /app

# Copy everything else and build
COPY . ./
RUN dotnet restore

# Build the specific project and output it into /app/out for KintoHub to process
WORKDIR /app/{Enter-Project-Folder}
RUN dotnet publish -c Release -o ../out

# Runtime image
FROM microsoft/dotnet:2.0-runtime
WORKDIR /app
COPY --from=build /app/out .

EXPOSE 80

ENTRYPOINT ["dotnet", "{Enter-Project-Output}.dll"]
```

- You need to modify it to reference the correct dll and path, change `{Enter-Project-Folder}` by your project folder and `{Enter-Project-Output}` by your dll name

## Go

We support Golang version 1.10

See [https://github.com/kintohub/go-examples](https://github.com/kintohub/go-examples) for a fully working example


Dockerfile:
```dockerfile
FROM golang:1.10.0

WORKDIR /go/src/app

COPY . .

RUN go get -d -v ./...

RUN go install -v ./...

ENTRYPOINT ["app"]
```

- `ENTRYPOINT ["app"]` line can't change, meaning you have to call your service `app`


## Java

We are supporting Java 8

See [https://github.com/kintohub/java-examples](https://github.com/kintohub/java-examples) for a fully working example


Dockerfile:
```dockerfile
FROM maven:3-jdk-8-alpine AS build

WORKDIR /app

# Copy everything else and build
COPY . ./
WORKDIR /app/httpexample

RUN mvn clean compile assembly:single
RUN mkdir /app/out
RUN mv ./target/start-jar-with-dependencies.jar /app/out/start-jar-with-dependencies.jar

# Runtime image
FROM openjdk:8-jre-alpine
WORKDIR /app
COPY --from=build /app/out .

EXPOSE 80

ENTRYPOINT ["java", "-jar", "start-jar-with-dependencies.jar"]
```

- We are using multi stage build to create lighter docker image
- You can modify the Dockerfile as you wish except you have to respect to put your build results in `/app/out` 


## NodeJS

We are supporting NodeJS version 8.9.4

See [https://github.com/kintohub/node-examples](https://github.com/kintohub/node-examples) for a fully working example


Dockerfile:

```dockerfile
FROM node:8.9.4

RUN mkdir -p app

WORKDIR /app

COPY . /app


RUN npm install

ENV PORT=80

EXPOSE 80

ENTRYPOINT ["npm","run","prod"]
```

- We only support `8.9.4` in node, so the first line of `Dockerfile` can't change
- `ENTRYPOINT` can be changed to any other command, it must be a command that will run the app on port `80`


## PHP

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

## Python

We are supporting Python 3.6.4

See [https://github.com/kintohub/python-examples](https://github.com/kintohub/python-examples) for a fully working example

Dockerfile:
```dockerfile
FROM python:3.6.4

RUN mkdir -p app

WORKDIR /app

COPY . /app


RUN pip install -r requirements.txt

ENV FLASK_APP=hello.py

EXPOSE 80


ENTRYPOINT ["flask","run","--port", "80", "--host", "0.0.0.0"]
```

- You can modify the `ENTRYPOINT` line but you have to expose your app on port 80
- We are using `pip` for dependency management so you have to place a `requirements.txt` in your repository to allow pip to work

Example Requirements.txt:
```
Flask==0.12.2
MarkupSafe==1.0
Jinja2==2.10
click==6.7
itsdangerous==0.24
Werkzeug==0.14.1
```


## Ruby

We are supporting Ruby 2.5

See [https://github.com/kintohub/ruby-examples](https://github.com/kintohub/ruby-examples) for a fully working example

Dockerfile:
```dockerfile
FROM ruby:2.5

RUN mkdir -p app

WORKDIR /app

COPY . /app

RUN gem install bundler
RUN bundle install
RUN bundle package --all

ENV PORT=80

EXPOSE 80

ENTRYPOINT ["bundle", "exec", "ruby", "app.rb"]
```

- You can modify the `Dockerfile` or `ENTRYPOINT` but it has to expose your app on port 80 and use the `/app` folder  
- We are using `bundler` as dependency manager hence you will need a `Gemfile` in your repository to enable external packages

Example Gemfile:
```gemfile
source 'https://rubygems.org'
gem 'sinatra'
gem "json", "~> 2.1"
```