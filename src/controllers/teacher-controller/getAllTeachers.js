const { getAllEntities } = require("../modules");
const teacherService = require("../../services/teacher-service");

const getAllTeachers = (req, res) => {
    getAllEntities(req, res, teacherService.getAllTeachers);
};

module.exports = { getAllTeachers };
