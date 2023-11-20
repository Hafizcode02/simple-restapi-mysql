const usersModel = require('../models/users');

// response.status_code(YOUR_STATUS_CODE).json_data(YOUR_JSON)
const getAllUsers = async (req, res) => {
    try {
        const [data] = await usersModel.getAllUsers(); // if you not destructuring the data will be two array (row data, and column data)
        res.status(200).json({
            message: "GET all users success",
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }

}

const createNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: "CREATE new users success",
        data: req.body,
    })
}

const updateUser = (req, res) => {
    // const {id, postId} = req.params
    const { id } = req.params // destructuring based on your params typed in routes.
    console.log('idUser: ', id);
    // console.log(postId);
    res.json({
        message: "update user success",
        id: id,
        data: req.body,
    })
}

const deleteUser = (req, res) => {
    // const {id, postId} = req.params
    const { id } = req.params // destructuring based on your params typed in routes.
    console.log('idUser: ', id);
    // console.log(postId);
    res.json({
        message: "delete user success",
        data: {
            id: id,
            name: "Hayoolo",
            email: "hayolo@gmail.com",
        }
    })
}

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser };