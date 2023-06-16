const { getAllEntities } = require("../modules");
const courseData = require("../../data-access/course");

const getAllCourses = (model) => {
    // Get all entities params
    const allEntitiesParams = {
        model,
        dataAccess: courseData.getAllCourses,
    };
    return getAllEntities(allEntitiesParams);
};

module.exports = { getAllCourses };
