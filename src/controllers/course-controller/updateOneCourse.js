const { updateOneEntity } = require("../modules");
const courseService = require("../../services/course-service");

const updateOneCourse = (req, res) => {
    updateOneEntity(req, res, "courseId", courseService.updateOneCourse);
};

module.exports = { updateOneCourse };
