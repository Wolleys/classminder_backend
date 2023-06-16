const { deleteOneEntity } = require("../modules");

const deleteOneStudent = (model, studentId) => {
    // Delete one entity params
    const oneEntityParams = {
        desc: "a student",
        entityId: studentId,
        attributes: ["id"],
        model: model.Student,
        cond: { id: studentId },
    };
    return deleteOneEntity(oneEntityParams);
};

module.exports = { deleteOneStudent };
