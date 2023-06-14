const { updateOneEntity } = require("../modules");
const studentService = require("../../services/student-service");

const updateOneStudent = (req, res) => {
    updateOneEntity(req, res, "studentId", studentService.updateOneStudent);
};

module.exports = { updateOneStudent };
