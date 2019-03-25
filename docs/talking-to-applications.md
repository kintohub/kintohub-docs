---
title: Talking to an application
---

After you have deployed your application, you can either talk to it in gRPC or HTTP.
(gRPC to HTTP is work in progress and will be added in upcoming updates)

1. Go to **Applications**, click the menu icon
2. Select **View Environments**
   ![Screenshot - View Environment](/docs/assets/talking-to-applications-1-2.png)
3. Click Edit on the environment you wish to talk to
   ![Screenshot - Edit Environment](/docs/assets/talking-to-applications-3.png)
4. Here you can get the **client ID** and **secret key**
   ![Screenshot - Client ID and Secret Key](/docs/assets/talking-to-applications-4.png)
5. Authenticate to KintoHub with:

```
POST api.kintohub.com/auth
BODY { "clientId":"<clientId>", "clientSecret":"<clientSecret>" }
```

You will get a response that looks like this:

```
{ "data": { "token": "asdfajflsfjaf.asdfklafjdlkjafklfja" } }
```

> Alternatively, you can authenticate with gRPC by using the proto file attached near the end of this page and connecting to `grpc.kintohub.com`

Once authenticated, you can talk to your application (and its KintoBlock dependencies)!
Simply make a call to:

```
api.kintohub.com/{block-name}
```

Be sure to include in the authorization header. Example:

```
Kinto-Authorization: Bearer <token>
```

(Use same token from the example response in step 5.)

To make a call to gRPC, talk to grpc.prod.kintohub.com with your gRPC service proto file, but include in the grpc-meta-data the authorization header as well.

### Related Articles

* [What is an application?](what-is-an-application.md)
* [Creating an application](creating-an-application.md)
* [Tagging & deploying an application](tagging-and-deploying.md)
* [Adding dependencies to an application](adding-a-dependency-application.md)
