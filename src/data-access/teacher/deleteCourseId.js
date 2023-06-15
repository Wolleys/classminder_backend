const { deleteChildId } = require("../modules");

const deleteCourseId = async (model, teacherId, courseId) => {
    // Define deleteChildId function params
    const params = {
        model: model.Teacher,
        recDesc: "a teacher",
        recId: teacherId,
        recCond: { id: teacherId },
        recAttrs: ["id", "course_id"],
        colName: "course_id",
        idToDel: courseId,
    };

    await deleteChildId(params, "a course");
};

module.exports = { deleteCourseId };
