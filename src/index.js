const express = require('express');
const mysql = require('mysql2');

const usersRoute = require('./routes/users.js');
const middlewareLogRequest = require('./middleware/logs.js');

// Create the connection pool. The pool-specific settings are the defaults
const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_express_api',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
});

const app = express();

app.use(middlewareLogRequest); // middleware use for logging, or maybe wanna tracking input or checking jwt, etc.
app.use(express.json()); // allowing request body using json

app.use('/users', usersRoute);

app.use('/check', (req, res) => {
    dbPool.execute('SELECT * FROM users', (err, rows, field) => {
        if (err) {
            res.json({
                message: 'connection failed'
            });
        }

        res.json({
            message: 'connection success',
            data: rows
        });
    });
});

app.listen(3120, () => {
    console.log(`Server has successfully runned at http://localhost:3120`);
});