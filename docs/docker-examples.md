---
title: Dockerfile examples
---

When you create a kintoblock you need a `Dockerfile` that builds it
Here are the auto generated `Dockerfile` when you create a new repository for a kintoblock. You will need them if you are choosing existing repostiory

## Node


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



## C#

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

- We only support `dotnet 2.0`
- need to be modified to reference the correct dll and path

## Golang

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
