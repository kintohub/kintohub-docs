---
title: Custom Service KintoBlock
sidebar_label: Custom Services
---

## Creating a Custom Service

1. If you are creating a Custom Service, select the corresponding option in the type of KintoBlocks.

2. Fill in the `KintoBlock name`, `Internal name` and `Description` in the **Basic Info form**.

   ![Screenshot](/docs/assets/kb-custom-service-basic-info.png)

3. Select the **Helm** option in the **Service Project Format** drop-down. 

   ![Screenshot](/docs/assets/kb-custom-service-options.png)

   >Note: Right now, we only support **Helm**. The support for **Docker File** and **Docker Hub**  will be coming up soon!

4. The final step requires you to provide the repo source details in the **Repository form**.

5. In the Repository form, make sure to specify the git repository service used by your Organization.

6. Click on the **Create New KintoBlock** button. 

You are all set. The KintoBlock for a Custom Service has been created successfully.


## What is a Helm Chart?

Helm is a package manager for Kubernetes. It provides an easy way to install, configure, upgrade, and run an application. Helm is also a chart manager. A chart is a Helm package. It contains all of the resource definitions necessary to run an application, tool, or service inside of a Kubernetes cluster.

There are two main components in Helm:

- Helm client is used to create, fetch, search and validate charts and to instruct tiller.

- Tiller server runs inside the Kubernetes cluster and manages the releases.

Basic structure of a Helm Chart is as shown below:

```
├── Chart.yaml
├── README.md
├── templates
│   ├── _helpers.tpl
|   ├── alpine-pod.yaml
└── values.yaml
```

   >`Chart.yaml` contains some metadata about the chart, such as its name, version, keywords.

   >`values.yaml` contains keys and values that are used to generate the release in your cluster. These values are replaced in the resource manifests.

To learn more about Helm Chart [click here.](https://helm.sh/docs/)


### Required Helm Chart Variables

We follow the standard of helm charts which is used to setup log and be compatible with KintoHub. See the following Service and Project definition with the highlighted requirements to be compatible with KintoHub.

`Projects.yaml`

```
metadata:
  name: {{ template "mysql.fullname" . }}
  labels:
    app: {{ template "mysql.fullname" . }}
    chart: "{{ .Chart.Name }}-{{ .Chart.Version }}"
    release: "{{ .Release.Name }}"
    heritage: "{{ .Release.Service }}"
spec:
  template:
    metadata:
      labels:
        app: {{ template "mysql.fullname" . }}
```

`Service.yaml`

```
metadata:
  name: {{ template "mysql.fullname" . }}
  labels:
    app: {{ template "mysql.fullname" . }}
    chart: "{{ .Chart.Name }}-{{ .Chart.Version }}"
    release: "{{ .Release.Name }}"
    heritage: "{{ .Release.Service }}"
```

To see a full fledged Helm Chart example, here's one for MySQL: [Link](https://github.com/helm/charts/tree/master/stable/mysql)
