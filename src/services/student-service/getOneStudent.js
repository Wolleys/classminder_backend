const { getOneEntity } = require("../modules");
const studentData = require("../../data-access/student");

const getOneStudent = (model, studentId) => {
    // Get one entity params
    const oneEntityParams = {
        model,
        entityId: studentId,
        dataAccess: studentData.getOneStudent,
    };
    return getOneEntity(oneEntityParams);
};

module.exports = { getOneStudent };
