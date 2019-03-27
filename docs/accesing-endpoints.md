---
title: Accessing API Endpoints
---

## How to Access Your APIs

An authorized token is needed before calling an API endpoint of deployment.

To get the token, follow the below steps mentioned:

1. Open a **Deployment**.

2. Make sure the deployment is deployed successfully.

3. Move to the **API Access** section.

4. Click on the **Copy** button displayed for Authenticate to Get a Token section.

5. Paste and run the curl command in the terminal to get the Token.

6. Once a token is obtained, the next step is to access the API endpoint of deployment.

{ TODO: Raven Add screenshot Copy button for getting Authentication token }

To access API, follow the steps mentioned below:

1. Click on the **Copy** button displayed for **Access Your API** section.

2. Paste and run the curl command in the terminal to access API endpoint.

{ TODO: Raven Add screenshot Copy button for Access Your API section. }

For e.g.: If its a GET API call,

```
curl -X GET https://api.kintohub.com/<KintoBlockname>/<endpoint of KintoBlock> -H "Authorization: Bearer <Token>" 'Content-Type: application/json'
```

3. Make sure to pass the **Token** obtained, KintoBlock name and endpoint of KintoBlock.

4. Once the API call is successful, a response from the deployment will be displayed in the terminal.
