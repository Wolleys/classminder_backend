const { getAllEntities } = require("../modules");
const userData = require("../../data-access/user");

const getAllUsers = (model) => {
    // Get all entities params
    const allEntitiesParams = {
        model,
        dataAccess: userData.getAllUsers,
    };
    return getAllEntities(allEntitiesParams);
};

module.exports = { getAllUsers };
