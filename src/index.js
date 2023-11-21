require('dotenv').config();

const express = require('express');

const usersRoute = require('./routes/users');
const middlewareLogRequest = require('./middleware/logs');

const app = express();
const PORT = process.env.PORT || 8004;

app.use(middlewareLogRequest); // middleware use for logging, or maybe wanna tracking input or checking jwt, etc.
app.use(express.json()); // allowing request body using json

app.use('/users', usersRoute);

app.listen(PORT, () => {
    console.log(`Server has successfully runned at http://localhost:${PORT}`);
});