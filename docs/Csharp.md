---
title: C# / dotnet
---

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