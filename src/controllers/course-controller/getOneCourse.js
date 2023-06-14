const { getOneEntity } = require("../modules");
const courseService = require("../../services/course-service");

const getOneCourse = (req, res) => {
    getOneEntity(req, res, "courseId", courseService.getOneCourse);
};

module.exports = { getOneCourse };
