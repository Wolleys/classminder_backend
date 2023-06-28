const { findRecord } = require("../helpers/findRecord");
const { updateOneEntity } = require("../modules");

const updateOneCourse = async (model, courseId, data) => {
    // Update one entity params
    const oneEntityParams = {
        updateData: data,
        model: model.Course,
        cond: { id: courseId },
    };
    await updateOneEntity(oneEntityParams);

    // Return the updated course
    const updatedCourseId = {
        desc: "a course",
        entityId: courseId,
        model: model.Course,
        cond: { id: courseId },
        attributes: ["id", "course_name", "course_number"],
    };
    const updatedCourse = await findRecord(updatedCourseId);
    return updatedCourse;
};

module.exports = { updateOneCourse };
