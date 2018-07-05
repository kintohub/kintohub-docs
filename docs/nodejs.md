---
title: NodeJS
---

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
