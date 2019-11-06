---
title: Flask Example
sidebar_label: Flask
---
## Overview

Flask is a micro web framework written in Python. It can be built easily for microservice on KintoHub!

[Live Example](https://8caf94bb-c2e5-45cf-898d-ca5b19954cda.api.master.kintohub.com/flask-example/hello/world)

## Deployment
1. Apply this template to your [Github](https://github.com/kintohub/flask-example/generate)
2. Create a [Microservice Block](https://docs.kintohub.com/docs/kintoblocks/microservices) on KintoHub
3. Connect your GithubApp to KintoHub and select the Repository you just generated on your account.
4. Set the **name** of your kinto block
5. Choose `Python` as the **language** and `3.7.2` as the **version**
6. Set the **Build Command** as `pip install -r requirements.txt`
7. Set the **Start Command** as `python app.py`
8. Set the **Port** as `80`

You're now good to go! Click **Create Microservice**. Now click **Build Latest Commit**

Once complete, Click **Add to Project**

Follow the instruction to create a new project. Once created, you should be able to [access your API endpoints](https://docs.kintohub.com/docs/features/operating/accessing-endpoints).

## Installation & Local Run
Ensure you have Python 3 or higher.

1. `pip install -r requirements.txt`
2. `python app.py`

## Usage
### Optional Environment Variables
Default value  = `Hello`, please refer to the `.env-example` file
```
GREETING=Hi
```

### API Call
Local:
```
curl -X GET http://localhost/hello/world
```

On KintoHub:
```
curl -X GET http://<EnvironmentHostName>/<KintoBlockName>/hello/world
```
Please refer to [Accessing API Endpoints](https://docs.kintohub.com/docs/features/operating/accessing-endpoints) for the setup instruction

Try this [Live Example](https://8caf94bb-c2e5-45cf-898d-ca5b19954cda.api.master.kintohub.com/flask-example/hello/world) !

### Response
```json
{
  "message": "Hello world"
}
``` 

## What's Next?

You can do a lot with KintoHub and your deployed application. Some helpful links for next steps that you may consider with this project.

* [Creating multiple environments](https://docs.kintohub.com/docs/projects/environments)
