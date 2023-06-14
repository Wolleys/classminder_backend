const { getOneEntity } = require("../modules");
const studentService = require("../../services/student-service");

const getOneStudent = (req, res) => {
    getOneEntity(req, res, "studentId", studentService.getOneStudent);
};

module.exports = { getOneStudent };
