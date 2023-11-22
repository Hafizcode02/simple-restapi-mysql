const usersModel = require('../models/users');

// response.status_code(YOUR_STATUS_CODE).json_data(YOUR_JSON)
const getAllUsers = async (req, res) => {
    try {
        const [data] = await usersModel.getAllUsers(); // if you not destructuring the data will be two array (row data, and column data)
        return res.status(200).json({
            message: "GET all users success",
            data: data,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }

}

const getUserByID = async (req, res) => {
    const { id } = req.params;
    try {
        const [data] = await usersModel.getUserByID(id); // if you not destructuring the data will be two array (row data, and column data)
        return res.status(200).json({
            message: "data retrieved success",
            data: data,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
}

const createNewUser = async (req, res) => {
    const { body } = req;

    // Checking the value is not null or empty
    if (!body.name || !body.email || !body.address) {
        return res.status(400).json({
            error: "Bad Request",
            message: "The request body is not correctly formatted or contains invalid data."
        });
    }

    try {
        await usersModel.createNewUser(body);
        return res.status(201).json({
            message: "CREATE new users success",
            data: body,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params; // destructuring based on your params typed in routes.
    const { body } = req;

    const [data] = await usersModel.getUserByID(id);

    // check the users exist
    if(data == ""){
        return res.status(404).json({
            error: "Not Found",
            message: "The users with that id is not exist"
        });
    }

    // Checking the value is not null or empty
    if (!body.name || !body.email || !body.address) {
        return res.status(400).json({
            error: "Bad Request",
            message: "The request body is not correctly formatted or contains invalid data."
        });
    }

    try {
        await usersModel.updateUser(id, body);
        return res.status(200).json({
            message: "update user success",
            data: body
        })
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params // destructuring based on your params typed in routes.
    const [data] = await usersModel.getUserByID(id);

    // check the users exist
    if(data == ""){
        return res.status(404).json({
            error: "Not Found",
            message: "The users with that id is not exist"
        });
    }

    try {
        await usersModel.deleteUser(id);
        return res.json({
            message: "delete user success",
            data: data
        })
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
}

module.exports = { getAllUsers, getUserByID, createNewUser, updateUser, deleteUser };