const { getAllEntities } = require("../modules");
const courseService = require("../../services/course-service");

const getAllCourses = (req, res) => {
    getAllEntities(req, res, courseService.getAllCourses);
};

module.exports = { getAllCourses };
