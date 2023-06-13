const { getOneEntity } = require("../modules");
const classService = require("../../services/class-service");

const getOneClass = (req, res) => {
    getOneEntity(req, res, "classId", classService.getOneClass);
};

module.exports = { getOneClass };
