---
title: Golang
---

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
