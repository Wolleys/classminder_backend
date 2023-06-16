const { createNewEntity } = require("../modules");
const userService = require("../../services/user-service");

const createNewUser = (req, res) => {
    // Create a new entity params
    const newEntityParams = {
        req,
        res,
        service: userService.createNewUser,
    };
    createNewEntity(newEntityParams);
};

module.exports = { createNewUser };
