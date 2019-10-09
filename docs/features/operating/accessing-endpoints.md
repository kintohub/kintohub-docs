---
title: Accessing API Endpoints
---

## How to Access Your APIs

An authorized token is needed before calling an API endpoint of project.

To get the token, follow the below steps mentioned:

1. Open a **Project**.

2. Make sure the Project is deployed successfully.

3. Move to the **API Access** section.

4. Click on the **Copy** button displayed for Authenticate to Get a Token section.

5. Paste and run the curl command in the terminal to get the Token.

6. Once a token is obtained, the next step is to access the API endpoint of project.

    ![Screenshot](/docs/assets/auth-token.png)

To access API, follow the steps mentioned below:

1. Click on the **Copy** button displayed for **Access Your API** section.

2. Paste and run the curl command in the terminal to access API endpoint.

For e.g.: If its a GET API call,

```
curl -X GET https://api.kintohub.com/<KintoBlockname>/<endpoint of KintoBlock> -H "Authorization: Bearer <Token>" 'Content-Type: application/json'

```

3. Make sure to pass the **Token** obtained, KintoBlock name and endpoint of KintoBlock.

4. Once the API call is successful, a response from the project will be displayed in the terminal.

## How to Access Public APIs

The KintoBlocks you create can be integrated with Public APIs. Note that public APIs do not require an **Authorized Token**.

To set an API endpoint as public, follow the steps mentioned below:

1. Open a **Project**.

2. Make sure the Project is deployed successfully.

3. Scroll down to the **KintoBlocks** section.

4. Click on the **Configure KintoBlocks** button.

5. Enable the toggle displayed for **Public API & Webhook Access**.

    ![Screenshot](/docs/assets/Public_API.png)

6. Click on the **Save Changes** button.

    >Note: After enabling the toggle for **Public API & Webhook Access** please make sure to redeploy the Project for applying the changes made.

To perform a public API call, follow the steps mentioned below:

1. Open the **Project** for which the API endpoint is set to public.

2. Navigate to **API Access** section and switch to **Public & Webhook Access** tab.

3. Click on the **Copy** button.

4. Paste and run the curl command in the terminal to access API endpoint public.

For e.g.:

```
curl https://public.api.kintohub.com/<clientID>/<KintoBlock>/<endpoint>

```
![Screenshot](/docs/assets/public_access_tab.png)

>Note: By default **Client ID** will be displayed in the API call command.

5. Once the public API call is successful, a response from the project will be displayed in the terminal.
