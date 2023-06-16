const { deleteChildEntity } = require("../modules");
const teacherData = require("../../data-access/teacher");

const deleteCourseId = (model, parentEntityId, childEntityId) => {
    // Delete child entity params
    const childEntityParams = {
        model,
        childEntityId,
        parentEntityId,
        dataAccess: teacherData.deleteCourseId,
    };
    return deleteChildEntity(childEntityParams);
};

module.exports = { deleteCourseId };
