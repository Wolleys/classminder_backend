const { getAllEntities } = require("../modules");

const getAllCourses = (model) => {
    // Get all entities params
    const allEntitiesParams = {
        model: model.Course,
        order: [["created_at", "DESC"]],
        attributes: ["id", "course_name", "course_number"],
    };
    return getAllEntities(allEntitiesParams);
};

module.exports = { getAllCourses };
