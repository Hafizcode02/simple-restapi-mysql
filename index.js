const express = require('express');

const app = express();

app.listen(3120, () => {
    console.log(`Server has successfully runned at http://localhost:3120`);
});