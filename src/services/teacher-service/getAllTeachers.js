const { getAllEntities } = require("../modules");
const teacherData = require("../../data-access/teacher");

const getAllTeachers = (model) => {
    // Get all entities params
    const allEntitiesParams = {
        model,
        dataAccess: teacherData.getAllTeachers,
    };
    return getAllEntities(allEntitiesParams);
};

module.exports = { getAllTeachers };
