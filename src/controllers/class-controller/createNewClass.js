const { createNewEntity } = require("../modules");
const classService = require("../../services/class-service");

const createNewClass = (req, res) => {
    // Add a new class params
    const newClassParams = {
        req,
        res,
        service: classService.createNewClass,
    };
    createNewEntity(newClassParams);
};

module.exports = { createNewClass };
