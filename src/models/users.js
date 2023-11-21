const dbPool = require('../config/database');

const getAllUsers = () => {
    const query = 'SELECT * FROM users';
    return dbPool.execute(query);
}

const createNewUser = (data) => {
    const query = 'INSERT INTO users (name, email, address) VALUES (?,?,?)';
    let bodyData = [data.name, data.email, data.address];
    console.log(bodyData);

    return dbPool.execute(query, bodyData, (err, results, fields) => {
        console.log(results);
        console.log(fields);
    })
}

module.exports = {
    getAllUsers, createNewUser
}