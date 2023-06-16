const { createNewEntity } = require("../modules");
const classService = require("../../services/class-service");

const createNewClass = (req, res) => {
    // Create a new entity params
    const newEntityParams = {
        req,
        res,
        service: classService.createNewClass,
    };
    createNewEntity(newEntityParams);
};

module.exports = { createNewClass };
