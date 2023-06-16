const { deleteOneEntity } = require("../modules");
const studentData = require("../../data-access/student");

const deleteOneStudent = (model, studentId) => {
    // Delete one entity params
    const oneEntityParams = {
        model,
        entityId: studentId,
        dataAccess: studentData.deleteOneStudent,
    };
    return deleteOneEntity(oneEntityParams);
};

module.exports = { deleteOneStudent };
