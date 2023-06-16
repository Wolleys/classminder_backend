const { deleteOneEntity } = require("../modules");
const classService = require("../../services/class-service");

const deleteOneClass = (req, res) => {
    // Delete one entity params
    const oneEntityParams = {
        req,
        res,
        idName: "classId",
        service: classService.deleteOneClass,
    };
    deleteOneEntity(oneEntityParams);
};

module.exports = { deleteOneClass };
