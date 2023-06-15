const { findRecord } = require("../helpers/findRecord");
const { updateOneEntity } = require("../modules");

const updateOneTeacher = async (model, teacherId, data) => {
    // Check if the given teacher ID exists
    const tchDesc = "a teacher";
    const tchCond = { id: teacherId };
    const tchAttrs = ["id"];

    await findRecord(model.Teacher, tchDesc, teacherId, tchCond, tchAttrs);

    // Iterate over each course ID and check if it exists
    for (const courseId of data.course_id) {
        const cosDesc = "a course";
        const cosAttrs = ["id"];
        const cosCond = { id: courseId };

        await findRecord(model.Course, cosDesc, courseId, cosCond, cosAttrs);
    }

    // Iterate over each class ID and check if it exists
    for (const classId of data.class_id) {
        const classDesc = "a class";
        const classAttrs = ["id"];
        const classCond = { id: classId };

        await findRecord(model.Class, classDesc, classId, classCond, classAttrs);
    }
    updateOneEntity(model.Teacher, tchCond, data);
};

module.exports = { updateOneTeacher };
