const dbPool = require('../config/database');

const getAllUsers = () => {
    const query = 'SELECT * FROM users';
    return dbPool.execute(query);
}

const getUserByID = (id) => {
    const query = 'SELECT * FROM users WHERE id=?';
    return dbPool.execute(query, [id]);

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

const deleteUser = (id) => {
    const query = 'DELETE FROM users WHERE id=?';
    return dbPool.execute(query, [id]);
}

const findEmail = (email) => {
    const query = 'SELECT * FROM users WHERE email=?';
    return dbPool.execute(query, [email]);
}

module.exports = {
    getAllUsers, getUserByID, createNewUser, updateUser, deleteUser, findEmail
}