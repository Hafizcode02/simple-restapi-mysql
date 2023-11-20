// response.status_code(YOUR_STATUS_CODE).json_data(YOUR_JSON)

const getAllUsers = (req, res) => {
    const data = [
        {
            id: 1001,
            name: "Hafiz Caniago",
            email: "hafizcode02@gmail.com"
        },
        {
            id: 1002,
            name: "Iqbal Pamula",
            email: "blape@gmail.com"
        }
    ]

    res.json({
        message: "GET all users success",
        data: data,
    })
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