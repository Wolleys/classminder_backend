const { deleteChildEntity } = require("../modules");
const teacherData = require("../../data-access/teacher");

const deleteClassId = (model, parentEntityId, childEntityId) => {
    // Delete child entity params
    const childEntityParams = {
        model,
        childEntityId,
        parentEntityId,
        dataAccess: teacherData.deleteClassId,
    };
    return deleteChildEntity(childEntityParams);
};

module.exports = { deleteClassId };
