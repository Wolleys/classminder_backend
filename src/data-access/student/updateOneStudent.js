const { findRecord } = require("../helpers/findRecord");
const { updateOneEntity } = require("../modules");

const updateOneStudent = async (model, studentId, data) => {
    // Check if the given student ID exists
    const findStudentId = {
        desc: "a student",
        attributes: ["id"],
        entityId: studentId,
        model: model.Student,
        cond: { id: studentId },
    };
    await findRecord(findStudentId);

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

    // Check if the given class ID exists
    const findClassId = {
        desc: "a class",
        attributes: ["id"],
        model: model.Class,
        entityId: data.class_id,
        cond: { id: data.class_id },
    };
    await findRecord(findClassId);

    // Update one entity params
    const oneEntityParams = {
        updateData: data,
        model: model.Student,
        cond: { id: studentId },
    };
    updateOneEntity(oneEntityParams);
};

module.exports = { updateOneStudent };
