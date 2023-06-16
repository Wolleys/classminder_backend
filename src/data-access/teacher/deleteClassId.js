const { deleteChildEntity } = require("../modules");

const deleteClassId = async (model, teacherId, classId) => {
    // Delete child entity params
    const childEntityParams = {
        desc: "a teacher",
        colName: "class_id",
        model: model.Teacher,
        cond: { id: teacherId },
        childEntityId: classId,
        parentEntityId: teacherId,
        attributes: ["id", "class_id"],
    };

    const childEntityDesc = "a class";
    await deleteChildEntity(childEntityParams, childEntityDesc);
};

module.exports = { deleteClassId };
