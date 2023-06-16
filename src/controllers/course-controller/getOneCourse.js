const { getOneEntity } = require("../modules");
const courseService = require("../../services/course-service");

const getOneCourse = (req, res) => {
    // Get one entity params
    const oneEntityParams = {
        req,
        res,
        idName: "courseId",
        service: courseService.getOneCourse,
    };
    getOneEntity(oneEntityParams);
};

module.exports = { getOneCourse };
