const { updateOneEntity } = require("../modules");
const classService = require("../../services/class-service");

const updateOneClass = (req, res) => {
    // Update one entity params
    const oneEntityParams = {
        req,
        res,
        idName: "classId",
        service: classService.updateOneClass,
    };
    updateOneEntity(oneEntityParams);
};

module.exports = { updateOneClass };
