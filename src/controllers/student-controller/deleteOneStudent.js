const { deleteOneEntity } = require("../modules");
const studentService = require("../../services/student-service");

const deleteOneStudent = (req, res) => {
    deleteOneEntity(req, res, "studentId", studentService.deleteOneStudent);
};

module.exports = { deleteOneStudent };
