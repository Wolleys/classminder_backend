const { getAllEntities } = require("../modules");
const studentService = require("../../services/student-service");

const getAllStudents = (req, res) => {
    getAllEntities(req, res, studentService.getAllStudents);
};

module.exports = { getAllStudents };
