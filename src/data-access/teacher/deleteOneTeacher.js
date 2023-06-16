const { deleteOneEntity } = require("../modules");

const deleteOneTeacher = (model, teacherId) => {
    // Delete one entity params
    const oneEntityParams = {
        desc: "a teacher",
        entityId: teacherId,
        attributes: ["id"],
        model: model.Teacher,
        cond: { id: teacherId },
    };
    return deleteOneEntity(oneEntityParams);
};

module.exports = { deleteOneTeacher };
