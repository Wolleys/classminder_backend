const { updateOneEntity } = require("../modules");
const teacherData = require("../../data-access/teacher");

const updateOneTeacher = (model, teacherId, data) => {
    // Update one entity params
    const oneEntityParams = {
        model,
        updateData: data,
        entityId: teacherId,
        dataAccess: teacherData.updateOneTeacher,
    };
    return updateOneEntity(oneEntityParams);
};

module.exports = { updateOneTeacher };
