const { getAllEntities } = require("../modules");
const teacherService = require("../../services/teacher-service");

const getAllTeachers = (req, res) => {
    // Get all entities params
    const allEntitiesParams = {
        req,
        res,
        service: teacherService.getAllTeachers,
    };
    getAllEntities(allEntitiesParams);
};

module.exports = { getAllTeachers };
