const { updateOneEntity } = require("../modules");
const classService = require("../../services/class-service");

const updateOneClass = (req, res) => {
    updateOneEntity(req, res, "classId", classService.updateOneClass);
};

module.exports = { updateOneClass };
