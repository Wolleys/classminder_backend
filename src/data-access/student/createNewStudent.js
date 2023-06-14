const { alreadyExists } = require("../helpers/alreadyExists");
const { findRecord } = require("../helpers/findRecord");
const { createNewEntity } = require("../modules");

const createNewStudent = async (model, newStudent) => {
    // Check if admin number already exists
    const numCond = { admin_number: newStudent.admin_number };
    const numVal = newStudent.admin_number;
    const numAttrs = ["admin_number"];

    await alreadyExists(model.Student, numCond, numVal, numAttrs);

    // Iterate over each course ID and check if it exists
    for (const courseId of newStudent.course_id) {
        const desc = "a course";
        const attrs = ["id"];
        const cond = { id: courseId };

        await findRecord(model.Course, desc, courseId, cond, attrs);
    }
    return createNewEntity(model.Student, newStudent);
};

module.exports = { createNewStudent };
