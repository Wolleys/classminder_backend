const { getAllEntities } = require("../modules");
const userService = require("../../services/user-service");

const getAllUsers = (req, res) => {
    // Get all entities params
    const allEntitiesParams = {
        req,
        res,
        service: userService.getAllUsers,
    };
    getAllEntities(allEntitiesParams);
};

module.exports = { getAllUsers };
