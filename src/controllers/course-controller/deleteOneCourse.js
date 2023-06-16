const { deleteOneEntity } = require("../modules");
const courseService = require("../../services/course-service");

const deleteOneCourse = (req, res) => {
    // Delete one entity params
    const oneEntityParams = {
        req,
        res,
        idName: "courseId",
        service: courseService.deleteOneCourse,
    };
    deleteOneEntity(oneEntityParams);
};

module.exports = { deleteOneCourse };
