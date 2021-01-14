# MongoDB Intro

## Overview

1. NoSQL (Not Only SQL)

- supports SQL queries, but there is more flexibility in the storage of data other than basic tabular storage
- no formal relationships like in a relational SQL DB
- every piece of data is unaware of other pieces
- everything stored in a MongoDB is a JSON object

## Advantages

- free
- faster to get started because it's not as strictly structured
- no joins, joins are expensive, so MongoDB has a speed benefit by not needing joins
- speed because of no joins
- more easily store data that changes structure (shape) frequently due to flexibility
- scalable via horizontal scaling, add more servers to scale (sharding) vs SQL using vertical scaling (more processing power on same server)

## Disadvantages

- too unstructured, can get messy
  - when we start using mongoose, library / node module used to talk to mongo with js
    - we will define our schemas structure more strictly
- not ideal for multi-row transactions - such as an accounting system
- relational data is stored inside the entity itself, nested data inside object, rather than having it's own table, so the related data cannot be queried all together, separate from what it is inside of

## Mongo Shell

- `mongo`
- `show dbs`
- `use db_name`
- `show collections`

- after today you'll be writing queries in js instead of shell, similar to what you did with py

## CRUD

### Create

- `db.collectionName.insert({key1: val1, key2: val2})`
- inserting to a collection that doesn't exist will auto create that collection
- can insert something with an entirely different structure into the collection unlike SQL
  - no required 'columns' (props / keys)
  - insert a differently structured object to show

Example: `db.ninjas.insert({name: "Trey", belt: "black", status: "awesome"})`

### Read

- `db.collectionName.find({key1: val1, key2: val2})`
- `db.collectionName.find()`
  - `.find({})` also works
  - `.pretty()` at end to format
- `db.collectionName.findById(ObjectId("id"));`

Example: `db.ninjas.find({name: "Trey"})`

Example: `db.ninjas.find({_id: ObjectId("5462a78e514e258182f4c69a")})`

Notice: You can't just pass the string of characters, you must pass it as an ObjectId.

### Update

Pattern: `db.COLLECTION_NAME.update({QUERY}, {FIELDS_TO_UPDATE}, {OPTIONS})`

Note: the options document is optional

Example: `db.ninjas.update({name: "Trey"},{$set: {location: "Mountain View"}})`

Example: `db.ninjas.find({location: "Mountain View"}).pretty()`

### Delete

- `db.quotes.remove({key1: val1, key2: val2})`
- `db.dropDatabase()`
- `db.COLLECTION_NAME.drop()`

Example `db.ninjas.remove({belt: "yellow"})`

`db.ninjas.remove({belt: "yellow"}, false)`

This query would have the same effect as the one above.
