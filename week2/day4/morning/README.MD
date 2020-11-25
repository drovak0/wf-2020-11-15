# SQL

- What is a database?

  - to store/save/access data
  - collection of tables (specifically SQL DB)
  - persistant storage
  - (data center, warehouse, pantry, freezer/fridge)

- What is data?
  - information (users, orders, products)
- CRUD
  - create, read, update, delete
- ERD
  - Entity relationship diagram
  - map of the structure of how we want to store our data
- Normalization
  - first_name Chris
  - last_name B
- DRY

  - Don't repeat yourself

- Relationships

  - 1-1 - Driver's License, ID, Passport
  - 1-m - Car -> passengers, person -> pets
  - m-m - users <-> groups, users <-> likes/favorites

- Conventions

  - make the table name plural and ALL lowercase - make it plural (ex. users, leads, sites, clients, chapters, courses, modules)
  - use "id" as the primary key - name it id (also make it auto-incremented).
  - name foreign keys with singular_table_name_id when referencing to a primary key in another table name it [singular name of the table you're referring to]\_id (ex. user_id, lead_id, site_id, client_id, chapter_id, course_id, module_id).
  - use created_at and updated_at as columns for the timestamp in EVERY table you create.

## Example

- users
- movies
- reviews

- forward/reverse engineer
