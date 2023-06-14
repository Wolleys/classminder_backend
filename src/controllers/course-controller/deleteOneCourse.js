const { deleteOneEntity } = require("../modules");
const courseService = require("../../services/course-service");

const deleteOneCourse = (req, res) => {
    deleteOneEntity(req, res, "courseId", courseService.deleteOneCourse);
};

module.exports = { deleteOneCourse };
