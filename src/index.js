const express = require('express');

const usersRoute = require('./routes/users.js');

const app = express();

// Use Directory slash
// app.use("/", (req, res, next) => {
//     res.send('Hello World');
// })

app.use('/users', usersRoute);

app.get("/", (req, res) => {
    res.status(200).json({ //response.status_code(YOUR_STATUS_CODE).json_data(YOUR_JSON)
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