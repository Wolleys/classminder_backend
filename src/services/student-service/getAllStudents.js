const { getAllEntities } = require("../modules");
const studentData = require("../../data-access/student");

const getAllStudents = (model) => {
    // Get all entities params
    const allEntitiesParams = {
        model,
        dataAccess: studentData.getAllStudents,
    };
    return getAllEntities(allEntitiesParams);
};

module.exports = { getAllStudents };
