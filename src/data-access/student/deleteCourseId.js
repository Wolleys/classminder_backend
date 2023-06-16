const { deleteChildEntity } = require("../modules");

const deleteCourseId = async (model, studentId, courseId) => {
    // Delete child entity params
    const childEntityParams = {
        desc: "a student",
        colName: "course_id",
        model: model.Student,
        cond: { id: studentId },
        childEntityId: courseId,
        parentEntityId: studentId,
        attributes: ["id", "course_id"],
    };

    const childEntityDesc = "a course";
    await deleteChildEntity(childEntityParams, childEntityDesc);
};

module.exports = { deleteCourseId };
