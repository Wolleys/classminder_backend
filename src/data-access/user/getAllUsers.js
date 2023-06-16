const { getAllEntities } = require("../modules");

const getAllUsers = (model) => {
    // Get all entities params
    const allEntitiesParams = {
        model: model.User,
        order: [["created_at", "DESC"]],
        attributes: ["id", "first_name", "middle_name", "last_name", "email"],
    };
    return getAllEntities(allEntitiesParams);
};

module.exports = { getAllUsers };
