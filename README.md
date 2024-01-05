# Backend Developer Node.js Assignment

This repository contains the codebase for a set of APIs developed using Node.js, Express, and MongoDB (with Mongoose) that implements JWT-based authentication and CRUD APIs for a TODO list.

## Features Implemented

### JWT-based Authentication
The application includes a robust JWT-based authentication system to ensure secure user authorization for accessing the TODO list functionality.

### CRUD APIs for TODO List
The CRUD (Create, Read, Update, Delete) APIs are implemented to manage TODO list items. The endpoints allow users to perform basic operations on the TODO list, such as adding new items, fetching existing items, updating item details, and deleting items.

### Authentication Endpoints

- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Log in an existing user and receive a JWT token for authentication.
- `GET /api/users/current`: Current user info

### TODO List Endpoints

- `GET /api/todos`: Retrieve all TODO list items.
- `GET /api/todos/:id`: Retrieve a specific TODO list item by ID.
- `POST /api/todos`: Create a new TODO list item.
- `PUT /api/todos/:id`: Update an existing TODO list item.
- `DELETE /api/todos/:id`: Delete a TODO list item by ID.

## Postman Collection

For detailed examples and testing the API endpoints, refer to the provided Postman collection [here](https://api.postman.com/collections/32066985-c1bcd296-6af6-4e31-a4fa-e3e060007344?access_key=PMAT-01HKC62T23ECMQZ4BT5SRDJ6QT).

## Git Repository

The codebase for this assignment is available on GitHub. [Link to the GitHub repository](https://github.com/shubhamTechHub/ShubhamTodoList-API.git)

## Git Commit History

The commit history has been maintained throughout the development process to showcase the progression of the codebase. Detailed commit messages can be found in the Git repository.

## Contributor

- [Shubham Shree](https://www.linkedin.com/in/shubhamshree23/)
