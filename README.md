# Housekeeping-backend


#APIs

base_url = https://vert-choucroute-93551.herokuapp.com/

## To add a new asset
POST request to `base_url/add-asset`

### Request Params
nil

### Request Body

**name**,         type: String, required


## To add a new task
POST request to `base_url/add-task`

### Request Params

nil

### Request Body

**name**,        type: String, required

**frequency**,   type: String


## To add new worker
POST request to `base_url/add-worker`

### Request Params

nil

### Request Body

**name**,           type: String, required

**description**,           type: String, required


## To get all assets
GET req to `base_url/assets/all`

### Request Params

nil

### Request Body

nil


## To allocate-task
POST req to `base_url/allocate-task`

### Request params

nil

### Request Body

**assetId**,        type: assetId, required

**taskId**,        type: taskId, required

**workerId**,        type: workerId, required

**timeOfAllocation** type: String

**taskToBePerfomedBy** type: String


## To get all tasks assigned to a worker
GET request to `base_url/get-tasks-for-worker/:workerId`

### Request params

**workerId**,        type: workerId

### Request Body

nil


#Schemas

## Worker
**name**,          type: String, required: true

**description**,           type: String, required: true


## Assets
**name**,           type: String, required: true


## Tasks
**name**,           type: String, required: true

**frequency**,           type: String, required: true


## AllocateTasks

**assetId**,           type: assetId, required: true

**taskId**,       type: taskId, required: true

**workerId**,       type: taskId, required: true

**timeOfAllocation** type: String

**taskToBePerfomedBy** type: String


###Dev
### Installation

Install the dependencies

```sh
$ npm install
```

To start Server

```sh
$ node server.js
```


#localhost

base_url = http://localhost:8080/
