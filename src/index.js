const express = require('express');

const usersRoute = require('./routes/users.js');
const middlewareLogRequest = require('./middleware/logs.js');
const app = express();

app.use(middlewareLogRequest); // middleware use for logging, or maybe wanna tracking input or checking jwt, etc.

app.use('/users', usersRoute);

app.get("/", (req, res) => {
    res.status(200).json({ // response.status_code(YOUR_STATUS_CODE).json_data(YOUR_JSON)
        nama: "Hafiz Caniago",
        email: "hafizcode02@gmail.com"
    });
})

app.post("/", (req, res) => {
    res.send('Hello World with Post Method');
})


app.listen(3120, () => {
    console.log(`Server has successfully runned at http://localhost:3120`);
});