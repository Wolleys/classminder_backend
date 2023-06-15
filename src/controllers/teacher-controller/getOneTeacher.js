const { getOneEntity } = require("../modules");
const teacherService = require("../../services/teacher-service");

const getOneTeacher = (req, res) => {
    getOneEntity(req, res, "teacherId", teacherService.getOneTeacher);
};

module.exports = { getOneTeacher };
