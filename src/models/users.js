const dbPool = require('../config/database');

const getAllUsers = () => {
    const query = 'SELECT * FROM users';
    return dbPool.execute(query);
}

const createNewUser = (data) => {
    const query = 'INSERT INTO users (name, email, address) VALUES (?,?,?)';
    let bodyData = [data.name, data.email, data.address];

    return dbPool.execute(query, bodyData);
}

const updateUser = (id, data) => {
    const query = 'UPDATE users SET name=?, email=?, address=? WHERE id=?';
    let bodyData = [data.name, data.email, data.address, id];

    return dbPool.execute(query, bodyData);

}

module.exports = {
    getAllUsers, createNewUser, updateUser
}