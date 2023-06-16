const { findRecord } = require("../helpers/findRecord");
const { updateOneEntity } = require("../modules");

const updateOneTeacher = async (model, teacherId, data) => {
    // Check if the given teacher ID exists
    const findTeacherId = {
        desc: "a teacher",
        attributes: ["id"],
        entityId: teacherId,
        model: model.Teacher,
        cond: { id: teacherId },
    };
    await findRecord(findTeacherId);

    // Iterate over each course ID and check if it exists
    for (const courseId of data.course_id) {
        const findCourseId = {
            desc: "a course",
            entityId: courseId,
            attributes: ["id"],
            model: model.Course,
            cond: { id: courseId },
        };
        await findRecord(findCourseId);
    }

    // Iterate over each class ID and check if it exists
    for (const classId of data.class_id) {
        const findClassId = {
            desc: "a class",
            entityId: classId,
            attributes: ["id"],
            model: model.Class,
            cond: { id: classId },
        };
        await findRecord(findClassId);
    }

    // Update one entity params
    const oneEntityParams = {
        updateData: data,
        model: model.Teacher,
        cond: { id: teacherId },
    };
    updateOneEntity(oneEntityParams);
};

module.exports = { updateOneTeacher };
