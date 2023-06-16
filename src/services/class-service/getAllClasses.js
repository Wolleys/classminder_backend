const { getAllEntities } = require("../modules");
const classData = require("../../data-access/class");

const getAllClasses = (model) => {
    // Get all entities params
    const allEntitiesParams = {
        model,
        dataAccess: classData.getAllClasses,
    };
    return getAllEntities(allEntitiesParams);
};

module.exports = { getAllClasses };
