---
title: Token and Session Management
---

KintoHub provides the ability to create sessions for all apps right of the bat. We recommend all users to create a token for all users, and this will give you many features that we are going to show here

## How to generate and use tokens

1.  The client should call the following API (typically when the app first loads)

```
POST https://api.kintohub.com/auth
BODY { "clientId":"<clientid>", "clientSecret":"<clientsecret>" }
```

2.  The client will get a token back (The client can save it as part of local storage) and should send it with all the following requests by adding it as an `Authorization` header, like:

```
Authorization: Bearer <token>
```

## Tokens as the first-class citizen

We decided to make tokens a requirement when calling any microservice. To call your microservice, it needs always to be included as an `Authorization` header shown above

If a token is not attached when requesting a resource, the client will get an error response

### What if I want a microservice to have a public URL that doesn't require authentication

We don't recommend in a typical use-case to use public URLs without authentication, but it is required in some apps to have public URLs (any webhooks as an example)

The answer is yes we do support public URLs, to access the endpoint you can use the following URL:

```
https://public.api.kintohub.com/<clientId>/<microservice>
```

> Because there is no session, the client id for the environment is needed to talk to the api, that is why the url is slightly different

## Why should I use tokens

One of the first problems we were trying to solve is how to make reusable microservices. When we were building KintoHub, we didn't want to make every microservice call the auth microservice to get the logged in user id and username

We have approached it differently, every microservice that needs the username or user id will just state that it needs it using [apidoc](apidoc.md) syntax and KintoHub will inject the value with your request in the header

### Example:

Let us start first with an example to show the flow of how to save/read data from the session

1.  the user has to get a token and send it as part of the authorization header like shown above

2.  In the auth microservice, we are going to expose the userid and username

```javascript
/**
 * ...
 * @apiSuccess (Session) {String} auth-userId the logged in user id
 * @apiSuccess (Session) {String} auth-username the logged in username
 * ...
 */
server.route({
  method: "POST",
  path: "/login",
  handler(request, res) {
    // Get the user from db and make sure everything is valid
    return res
      .response({ message: "Logged in successfully" })
      .header("auth-userId", 1)
      .header("auth-username", "KintoUser")
      .code(200);
  }
});
```

3.  In any microservice now we can require the userid and username after calling the `/login` above, and by these two lines we only will know if the user is logged in or not and his id & username

```javascript
/**
 * ...
 * @apiHeader (Session) {String} {auth-userId} logged in user id
 * @apiHeader (Session) {String} {auth-username} logged in user name
 * ...
 */
server.route({
  method: "POST",
  path: "/articles",
  handler(request, h) {
    const userId = request.headers["auth-id"]; // '1'
    const name = request.headers["auth-username"]; // 'KintoUser'
  }
});
```
