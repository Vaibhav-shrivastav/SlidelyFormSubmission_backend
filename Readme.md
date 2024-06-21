# Express TypeScript Server

## Description
This is a simple Express server built with TypeScript. It provides endpoints for saving and retrieving form submissions using a JSON file as the database.

## Endpoints
- **GET /ping**: Always returns `true`.
- **POST /submit**: Saves a submission. Requires `name`, `email`, `phone`, `github_link`, and `stopwatch_time` in the body.
- **GET /read?index=0**: Retrieves the (index+1)th submission. Requires `index` as a query parameter.

## Setup Instructions
1. Clone the repository.
   ```sh
   git clone <repository-url>
   cd express-typescript-server
2. Install the dependencies
    ```sh
    npm install
3. Run the server
    ```sh
    npm start

The server will be running on `http://localhost:3000`.