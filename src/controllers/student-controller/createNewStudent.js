const { createNewEntity } = require("../modules");
const studentService = require("../../services/student-service");

const createNewStudent = (req, res) => {
    createNewEntity(req, res, studentService.createNewStudent);
};

module.exports = { createNewStudent };
