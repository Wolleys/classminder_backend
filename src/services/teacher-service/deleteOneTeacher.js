const { deleteOneEntity } = require("../modules");
const teacherData = require("../../data-access/teacher");

const deleteOneTeacher = (model, teacherId) => {
    // Delete one entity params
    const oneEntityParams = {
        model,
        entityId: teacherId,
        dataAccess: teacherData.deleteOneTeacher,
    };
    return deleteOneEntity(oneEntityParams);
};

module.exports = { deleteOneTeacher };
