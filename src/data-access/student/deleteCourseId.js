const { deleteChildId } = require("../modules");

const deleteCourseId = async (model, studentId, courseId) => {
    // Define deleteChildId function params
    const params = {
        model: model.Student,
        recDesc: "a student",
        recId: studentId,
        recCond: { id: studentId },
        recAttrs: ["id", "course_id"],
        colName: "course_id",
        idToDel: courseId,
    };

    await deleteChildId(params, "a course");
};

module.exports = { deleteCourseId };
