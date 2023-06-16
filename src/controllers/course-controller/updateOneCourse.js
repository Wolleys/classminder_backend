const { updateOneEntity } = require("../modules");
const courseService = require("../../services/course-service");

const updateOneCourse = (req, res) => {
    // Update one entity params
    const oneEntityParams = {
        req,
        res,
        idName: "courseId",
        service: courseService.updateOneCourse,
    };
    updateOneEntity(oneEntityParams);
};

module.exports = { updateOneCourse };
