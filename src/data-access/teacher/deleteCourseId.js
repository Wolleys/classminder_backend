const { deleteChildEntity } = require("../modules");

const deleteCourseId = async (model, teacherId, courseId) => {
    // Delete child entity params
    const childEntityParams = {
        desc: "a teacher",
        colName: "course_id",
        model: model.Teacher,
        cond: { id: teacherId },
        childEntityId: courseId,
        parentEntityId: teacherId,
        attributes: ["id", "course_id"],
    };

    const childEntityDesc = "a course";
    await deleteChildEntity(childEntityParams, childEntityDesc);
};

module.exports = { deleteCourseId };
