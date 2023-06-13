const { createEntity } = require("../modules");
const classService = require("../../services/class-service");

const createNewClass = (req, res) => {
    createEntity(req, res, classService.createNewClass);
};

module.exports = { createNewClass };
