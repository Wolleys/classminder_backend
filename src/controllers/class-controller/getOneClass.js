const { getOneEntity } = require("../modules");
const classService = require("../../services/class-service");

const getOneClass = (req, res) => {
    // Get one entity params
    const oneEntityParams = {
        req,
        res,
        idName: "classId",
        service: classService.getOneClass,
    };
    getOneEntity(oneEntityParams);
};

module.exports = { getOneClass };
