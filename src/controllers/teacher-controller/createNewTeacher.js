const { createNewEntity } = require("../modules");
const teacherService = require("../../services/teacher-service");

const createNewTeacher = (req, res) => {
    createNewEntity(req, res, teacherService.createNewTeacher);
};

module.exports = { createNewTeacher };
