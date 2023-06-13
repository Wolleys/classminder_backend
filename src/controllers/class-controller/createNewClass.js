const { createNewEntity } = require("../modules");
const classService = require("../../services/class-service");

const createNewClass = (req, res) => {
    createNewEntity(req, res, classService.createNewClass);
};

module.exports = { createNewClass };
