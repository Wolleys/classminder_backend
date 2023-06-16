const { deleteChildEntity } = require("../modules");
const studentData = require("../../data-access/student");

const deleteCourseId = (model, parentEntityId, childEntityId) => {
    // Delete child entity params
    const childEntityParams = {
        model,
        childEntityId,
        parentEntityId,
        dataAccess: studentData.deleteCourseId,
    };
    return deleteChildEntity(childEntityParams);
};

module.exports = { deleteCourseId };
