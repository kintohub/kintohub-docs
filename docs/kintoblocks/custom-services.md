---
title: Custom Service KintoBlock
sidebar_label: Custom Services
---

## Creating a Custom Service

1. Select **KintoBlock** from the sidebar.

2. Click on the **Create New KintoBlock** card.

3. Select the **Custom Service KintoBlock** flavor.

4. Fill the **Choose Repository** form by specifying the details pertaining to the linked repo.

   ![Custom Service choose repository](/docs/assets/custom-choose-repository.png)

5. Click on the **Continue** button.

6. Next, specify the details on `Name` and `Internal Name`.

7. Select the **Helm** or **Docker File** option in **Source Type** drop-down.

   ![Create Custom Service](/docs/assets/create-custom-service.png)

   >Note: Right now, we only support **Helm** and **Docker File**. The support for **Docker Hub** will be coming soon!

8. Click on the **Create Custom Service** button.

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
