const { createNewEntity } = require("../modules");
const courseService = require("../../services/course-service");

const createNewCourse = (req, res) => {
    createNewEntity(req, res, courseService.createNewCourse);
};

module.exports = { createNewCourse };
