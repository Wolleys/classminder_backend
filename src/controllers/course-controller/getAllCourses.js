const { getAllEntities } = require("../modules");
const courseService = require("../../services/course-service");

const getAllCourses = (req, res) => {
    // Get all entities params
    const allEntitiesParams = {
        req,
        res,
        service: courseService.getAllCourses,
    };
    getAllEntities(allEntitiesParams);
};

module.exports = { getAllCourses };
