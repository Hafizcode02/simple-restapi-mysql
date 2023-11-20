// response.status_code(YOUR_STATUS_CODE).json_data(YOUR_JSON)

const getAllUsers = (req, res) => {
    res.json({ 
        message: "GET all users success"
    })
}

const createNewUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: "CREATE new users success",
        data: req.body,
    })
}

module.exports = { getAllUsers, createNewUser };