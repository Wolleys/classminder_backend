const { getAllEntities } = require("../modules");
const classService = require("../../services/class-service");

const getAllClasses = (req, res) => {
    // Get all entities params
    const allEntitiesParams = {
        req,
        res,
        service: classService.getAllClasses,
    };
    getAllEntities(allEntitiesParams);
};

module.exports = { getAllClasses };
