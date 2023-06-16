const { getOneEntity } = require("../modules");
const teacherData = require("../../data-access/teacher");

const getOneTeacher = (model, teacherId) => {
    // Get one entity params
    const oneEntityParams = {
        model,
        entityId: teacherId,
        dataAccess: teacherData.getOneTeacher,
    };
    return getOneEntity(oneEntityParams);
};

module.exports = { getOneTeacher };
