const express = require('express');

const usersRoute = require('./routes/users.js');
const middlewareLogRequest = require('./middleware/logs.js');

const app = express();

app.use(middlewareLogRequest); // middleware use for logging, or maybe wanna tracking input or checking jwt, etc.
app.use(express.json()); // allowing request body using json

app.use('/users', usersRoute);

app.listen(3120, () => {
    console.log(`Server has successfully runned at http://localhost:3120`);
});