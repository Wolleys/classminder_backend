const { deleteOneEntity } = require("../modules");
const classService = require("../../services/class-service");

const deleteOneClass = (req, res) => {
    deleteOneEntity(req, res, "classId", classService.deleteOneClass);
};

module.exports = { deleteOneClass };
