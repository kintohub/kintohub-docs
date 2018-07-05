---
title: Java
---

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
