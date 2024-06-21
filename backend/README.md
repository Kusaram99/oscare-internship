# Task API

This is a simple RESTful API to manage a collection of tasks using Node.js and Express.js. 

## Endpoints

### GET /api/tasks
Retrieve a list of all tasks.
- **Response:**
  - `200 OK` with a JSON array of tasks.

### GET /api/tasks/:id
Retrieve a specific task by ID.
- **Response:**
  - `200 OK` with a JSON object of the task.
  - `404 Not Found` if the task does not exist.
  - `505 SERVER ERROR` if Server error occurs

### POST /api/tasks
Create a new task.
- **Request Body:**
  - `title` (string, required)
  - `description` (string, required)
- **Response:**
  - `201 Created` with the JSON object of the created task.
  - `400 Bad Request` if the required fields are missing.
  - `505 SERVER ERROR` if Server error occurs

### PUT /api/tasks/:id
Update an existing task by ID.
- **Request Body:**
  - `title` (string, optional)
  - `description` (string, optional)
- **Response:**
  - `200 OK` with the JSON object of the updated task.
  - `404 Not Found` if the task does not exist.
  - `505 SERVER ERROR` if Server error occurs

### DELETE /api/tasks/:id
Delete a task by ID.
- **Response:**
  - `200 OK` with a message indicating the task was deleted.
  - `404 Not Found` if the task does not exist.
  - `505 SERVER ERROR` if Server error occurs

## Running the API Locally

1. Clone the repository.
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Start the server:
    ```sh
    node src/index.js
    ```
4. The API will be available at `http://localhost:3000/api`.

## API Documentation
  Link to API documentation [Here](https://documenter.getpostman.com/view/23147251/2sA3XV9zZt)


## Error Handling

The API includes basic error handling for cases such as missing fields and non-existent tasks as well as server error too. Appropriate status codes and messages are returned for these cases.
