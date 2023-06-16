const { getAllEntities } = require("../modules");

const getAllClasses = (model) => {
    // Get all entities params
    const allEntitiesParams = {
        model: model.Class,
        order: [["created_at", "DESC"]],
        attributes: ["id", "class_name", "slug"],
    };

    return getAllEntities(allEntitiesParams);
};

module.exports = { getAllClasses };
