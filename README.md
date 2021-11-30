# WEB JSON REST API
Personal Backend API Specification

## Authentication
### Admin Sign In
Request:
- Method: POST
- Endpoint: `/auth/signin`
- Header:
  - Content-Type: application/json
  - Accept: application/json
- Body:
```json
{
    "email": "String",
    "password": "String"
}
```
Response:
```json
{
    "id": "String ",
    "name": "String",
    "email": "String",
    "picture": "String",
    "bio": "String",
    "field": "String",
    "resume": "String",
    "password": "String"
}
```

## Scholars
### CREATE Scholars
Request:
- Method: POST
- Endpoint: `/scholars`
- Header:
    - Content-Type: application/json
    - Accept: application/json
- Body:
```json
{
    "title": "String",
    "desc": "String",
    "body": "String",
    "author": "String",
    "source": "String",
    "file": "String",
    "tags": ["String"],
    "view": "Number",
    "createdAt": "Date"
}
```
Response:
```json
{
    "_id": "String",
    "title": "String",
    "desc": "String",
    "body": "String",
    "author": "String",
    "source": "String",
    "file": "String",
    "tags": ["String"],
    "view": "Number",
    "createdAt": "Date"
}
```
### READ Scholars
Request:
- Method: GET
- Endpoint: `/scholars/{scholarId}`
- Header:
    - Accept: application/json
  
Response:
```json
{
    "_id": "String",
    "title": "String",
    "desc": "String",
    "body": "String",
    "author": "String",
    "source": "String",
    "file": "String",
    "tags": ["String"],
    "view": "Number",
    "createdAt": "Date" 
}
```
### Update Scholars
Request:
- Method: PUT
- Endpoint: `/scholars/{scholarId}`
- Header:
    - Content-Type: application/json
    - Accept: application/json
- Body:
```json
{
    "title": "String",
    "desc": "String",
    "body": "String",
    "author": "String",
    "source": "String",
    "file": "String",
    "tags": ["String"],
    "view": "Number"
}
```
Response:
```json
{
    "_id": "String",
    "title": "String",
    "desc": "String",
    "body": "String",
    "author": "String",
    "source": "String",
    "file": "String",
    "tags": ["String"],
    "view": "Number",
    "createdAt": "Date"
}
```
### Delete Scholars
Request:
- Method: DELETE
- Endpoint: `/scholars/{scholarId}`
- Header:
    - Accept: application/json

Response:
```json
{
    "message": "String"
}
```
### List Scholars

## Projects
### CREATE Projects
Request:
- Method: POST
- Endpoint: `/projects`
- Header:
    - Content-Type: application/json
    - Accept: application/json
- Body:
```json
{
    "title": "String",
    "description": "String",
    "kind": "String",
    "stack": ["String"],
    "icon": "String",
    "screenshot": ["String"],
    "source": "String",
    "view": "Number"
}
```
Response:
```json
{
    "_id": "String",
    "title": "String",
    "description": "String",
    "kind": "String",
    "stack": ["String"],
    "icon": "String",
    "screenshot": ["String"],
    "source": "String",
    "view": "Number",
    "createdAt": "Date"
}
```
### READ Projects
Request:
- Method: GET
- Endpoint: `/projects/{projectId}`
- Header:
    - Accept: application/json
  
Response:
```json
{
    "_id": "String",
    "title": "String",
    "description": "String",
    "kind": "String",
    "stack": ["String"],
    "icon": "String",
    "screenshot": ["String"],
    "source": "String",
    "view": "Number",
    "createdAt": "Date"
}
```
### Update Projects
Request:
- Method: PUT
- Endpoint: `/projects/{projectId}`
- Header:
    - Content-Type: application/json
    - Accept: application/json
- Body:
```json
{
    "title": "String",
    "description": "String",
    "kind": "String",
    "stack": ["String"],
    "icon": "String",
    "screenshot": ["String"],
    "source": "String",
    "view": "Number"
}
```
Response:
```json
{
    "_id": "String",
    "title": "String",
    "description": "String",
    "kind": "String",
    "stack": ["String"],
    "icon": "String",
    "screenshot": ["String"],
    "source": "String",
    "view": "Number",
    "createdAt": "Date"
}
```
### Delete Projects
Request:
- Method: DELETE
- Endpoint: `/projects/{projectId}`
- Header:
    - Accept: application/json

Response:
```json
{
    "message": "String"
}
```
### List Projects
Request:
- Method: GET
- Endpoint: `/projects`
- Header:
  - Accept: application/json
- Query Param:
  - size: Number,
  - page: Number

Response:
```json
[
    {
        "_id": "String",
        "title": "String",
        "description": "String",
        "kind": "String",
        "stack": ["String"],
        "icon": "String",
        "screenshot": ["String"],
        "source": "String",
        "view": "Number",
        "createdAt": "Date"
    }
]
```