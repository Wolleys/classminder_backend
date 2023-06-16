const { updateOneEntity } = require("../modules");
const classData = require("../../data-access/class");

const updateOneClass = (model, classId, data) => {
    // Update one entity params
    const oneEntityParams = {
        model,
        entityId: classId,
        updateData: data,
        dataAccess: classData.updateOneClass,
    };
    return updateOneEntity(oneEntityParams);
};

module.exports = { updateOneClass };
