const { updateOneEntity } = require("../modules");
const studentData = require("../../data-access/student");

const updateOneStudent = (model, studentId, data) => {
    // Update one entity params
    const oneEntityParams = {
        model,
        updateData: data,
        entityId: studentId,
        dataAccess: studentData.updateOneStudent,
    };
    return updateOneEntity(oneEntityParams);
};

module.exports = { updateOneStudent };
