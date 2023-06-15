const { alreadyExists } = require("../helpers/alreadyExists");
const { findRecord } = require("../helpers/findRecord");
const { createNewEntity } = require("../modules");

const createNewTeacher = async (model, newTeacher) => {
    // Check if service number already exists
    const numCond = { service_number: newTeacher.service_number };
    const numVal = newTeacher.service_number;
    const numAttrs = ["service_number"];

    await alreadyExists(model.Teacher, numCond, numVal, numAttrs);

    // Iterate over each course ID and check if it exists
    for (const courseId of newTeacher.course_id) {
        const desc = "a course";
        const attrs = ["id"];
        const cond = { id: courseId };

        await findRecord(model.Course, desc, courseId, cond, attrs);
    }

    // Iterate over each class ID and check if it exists
    for (const classId of newTeacher.class_id) {
        const classDesc = "a class";
        const classAttrs = ["id"];
        const classCond = { id: classId };

        await findRecord(model.Class, classDesc, classId, classCond, classAttrs);
    }

    return createNewEntity(model.Teacher, newTeacher);
};

module.exports = { createNewTeacher };
