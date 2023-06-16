const { createNewEntity } = require("../modules");
const courseService = require("../../services/course-service");

const createNewCourse = (req, res) => {
    // Create a new entity params
    const newEntityParams = {
        req,
        res,
        service: courseService.createNewCourse,
    };
    createNewEntity(newEntityParams);
};

module.exports = { createNewCourse };
