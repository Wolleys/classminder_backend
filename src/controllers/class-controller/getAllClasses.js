const { getAllEntities } = require("../modules");
const classService = require("../../services/class-service");

const getAllClasses = (req, res) => {
    getAllEntities(req, res, classService.getAllClasses);
};

module.exports = { getAllClasses };
