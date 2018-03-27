---
id: apidoc
title: How to document your code to work with Kintohub
---

To document your code you need to follow the [apidoc](http://apidocjs.com/) conventions

> apidoc is a way to document your api endpoints in code, that way your endpoint documentation is literally part of the code and it is going to always be up to date.

> On top of apidoc we are introducing some pre-defined groups that we parse internally and gives us the ability parse/translate data between protocols


The following is a sample doc for an endpoint
```
/** ** required **
 * @api {POST} /vehicle/{type} Add a new vehicle to the logged in user's collection
 * @apiName AddVehicle
 * @apiHeader (Session) {String} auth-account-id Logged in User's Id
 * @apiHeader {String} authorization Logged in User's Id
 * @apiParam (Url) {String} type the vehicle type
 * @apiParam {String} model the vehicle model
 * @apiParam {String} name the vehicle name
 ** optional **
 * @apiSuccess (Session) {Object[]} vehicle-owned All the vehicles that the current user have
 * @apiSuccess {Object} data the vehicle object
 * @apiSuccess {String} data.id Unique id for the vehicle
 * @apiSuccess {String} data.type vehicle type
 * @apiSuccess {String} data.model vehicle model
 */
```


Each endpoint should have a documentation block that consists of these sections
- Info about the endpoint (required) - `@api` and `@apiName`
- Request info (required) - `@apiParam` and `@apiHeader`
- Response info (optional) - `@apiSuccess` and `apiError`

# Endpoint Info

## `@api`

the url and description for the endpoint

> the only difference between our version of apidoc and the official apidoc is the url params. In our platform we expects it in the following format /{param} but apidoc expects /:param


Example:
```
/**
 * @api {POST} /endpoint/{id} Description for the endpoint
 */
```

## `@apiName`

Name for the endpoint, acts as an identifier

Example
```
/**
 * @apiName AddVehicle
 */
```

# Request Info

## `apiHeader`

### Groups
- `Header` When the clients sends data a header with the request
- `Session` When the endpoints wants to read data from the session (that has been exposed by another microservice). Will be inject in the request headers
- `Config` read the config data from kintohub

**Default Group**: `Header`

Example:
```
/**
 * @apiHeader {String} authorization authorization header
 * @apiHeader (Header) {String} content-type request's content type // Header group is optional, can be removed
 * @apiHeader (Session) {String} auth-account-id Logged in User's Id added by the session and injected when you add this line
 * @apiHeader (Config) {String} githubToken this is being added in kintohub and injected when you add this line
 */
```


## `apiParam`

### Groups
- `Url`: Url param - Ex: `/users/1`
- `QueryString`: Query String Param - Ex: `/users?sort=desc`
- `Body`: Request body field

**Default Group**: `Body`

Example:
```
/**
 * @apiParam (Url) {String} id user id
 * @apiParam (QueryString) {String} sort the sort order
 * @apiParam {String} name item name
 * @apiParam (Body) {String} type item type // Body group is optional, can be removed
 */
```


# Response Info

What the endpoint is sending back in the body or saving in the session


## `@apiSuccess`, `@apiError`

### Groups
- status code
- `Session`


#### Default Group
- `apiSuccess`: `200`
- `apiError`: `400`

Example
```
/**
 * @apiSuccess {String} data.name name of the user
 * @apiSuccess {String} [data.age] optional age
 * @apiSuccess (200) {String} data.gender optional age // 200 group is optional, can be removed
 * @apiSuccess (201) {String} data resource created
 * @apiSuccess (Session) {String} microservice-account-id to be saved in session
 * @apiError {String} error.message the error message
 * @apiError (400) {String} error.name the error message for the name // 400 group is optional, can be removed
 * @apiError (404) {String} error.message resource not found message
 * @apiError (403) {String} error.message resource not found message
*/
```

In order for the endpoint to save data in the current session
- the session name must start with the microservice name Example: @apiSuccess (Session) {String} microservice-account-id
- technically to return the session, you return it as a custom header with the response
