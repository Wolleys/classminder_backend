const { getAllEntities } = require("../modules");
const studentService = require("../../services/student-service");

const getAllStudents = (req, res) => {
    // Get all entities params
    const allEntitiesParams = {
        req,
        res,
        service: studentService.getAllStudents,
    };
    getAllEntities(allEntitiesParams);
};

module.exports = { getAllStudents };
