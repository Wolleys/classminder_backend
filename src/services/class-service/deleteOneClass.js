const { deleteOneEntity } = require("../modules");
const classData = require("../../data-access/class");

const deleteOneClass = (model, classId) => {
    // Delete one entity params
    const oneEntityParams = {
        model,
        entityId: classId,
        dataAccess: classData.deleteOneClass,
    };
    return deleteOneEntity(oneEntityParams);
};

module.exports = { deleteOneClass };
