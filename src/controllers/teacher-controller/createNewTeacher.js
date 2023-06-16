const { createNewEntity } = require("../modules");
const teacherService = require("../../services/teacher-service");

const createNewTeacher = (req, res) => {
    // Create a new entity params
    const newEntityParams = {
        req,
        res,
        service: teacherService.createNewTeacher,
    };
    createNewEntity(newEntityParams);
};

module.exports = { createNewTeacher };
