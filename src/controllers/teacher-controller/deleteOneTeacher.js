const { deleteOneEntity } = require("../modules");
const teacherService = require("../../services/teacher-service");

const deleteOneTeacher = (req, res) => {
    deleteOneEntity(req, res, "teacherId", teacherService.deleteOneTeacher);
};

module.exports = { deleteOneTeacher };
