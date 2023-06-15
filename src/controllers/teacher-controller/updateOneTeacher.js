const { updateOneEntity } = require("../modules");
const teacherService = require("../../services/teacher-service");

const updateOneTeacher = (req, res) => {
    updateOneEntity(req, res, "teacherId", teacherService.updateOneTeacher);
};

module.exports = { updateOneTeacher };
