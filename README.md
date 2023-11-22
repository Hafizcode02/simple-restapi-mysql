# restapi-mysql
Creating Example Rest API using Express, MySQL, Multer.

```markdown
# Express.js simple rest api with mysql and Multer for uploading image.

This is a simple example of an Express.js rest api with mysql and Multer for uploading image..

## Prerequisites

Before running the application, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
```

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Hafizcode02/restapi-mysql.git
   ```

2. Navigate to the project directory:

   ```bash
   cd restapi-mysql
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## SETTING UP .ENV File

before starting running the application, set env file based on your needs:

```bash
PORT=XXXX
DB_HOST=XXX
DB_USERNAME=XXXX
DB_PASSWORD=XXXX
DB_NAME=XXXX
```

SQL File is in folder, just import it..

## Running the Application

To start the Express.js server and run the file upload example, use the following command:

```bash
npm start run-dev
```

This will start the server on [http://localhost:ENV_PORT](http://localhost:ENV_PORT) or in port 8004.

## File Upload

- The file upload route is configured at `/upload`.
- Only specific file types (JPEG, PNG, and PDF) are allowed.

## API Endpoint List

```bash
[POST] your-site/users
[GET] your-site/users
[GET] your-site/users/:id
[PATCH] your-site/users/:id
[DELETE] your-site/users/:id
[POST] your-site/upload/
```

## Your Body Data
```
For POST, PATCH users use raw JSON type
{
    "name" : "Argh Satrio",
    "email" : "landa@gmail.com",
    "address": "World"
}

For POST images/files, use form-data type :
```
![image](https://github.com/Hafizcode02/restapi-mysql/assets/53365353/f34f374f-bf6d-4625-91b8-5bde9488b0d0)
