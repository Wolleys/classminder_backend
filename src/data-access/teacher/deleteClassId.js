const { deleteChildId } = require("../modules");

const deleteClassId = async (model, teacherId, classId) => {
    // Define deleteChildId function params
    const params = {
        model: model.Teacher,
        recDesc: "a teacher",
        recId: teacherId,
        recCond: { id: teacherId },
        recAttrs: ["id", "class_id"],
        colName: "class_id",
        idToDel: classId,
    };

    await deleteChildId(params, "a class");
};

module.exports = { deleteClassId };
