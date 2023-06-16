const { getOneEntity } = require("../modules");
const classData = require("../../data-access/class");

const getOneClass = (model, classId) => {
    // Get one entity params
    const oneEntityParams = {
        model,
        entityId: classId,
        dataAccess: classData.getOneClass,
    };
    return getOneEntity(oneEntityParams);
};

module.exports = { getOneClass };
