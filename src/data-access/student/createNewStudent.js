const { alreadyExists } = require("../helpers/alreadyExists");
const { findRecord } = require("../helpers/findRecord");
const { createNewEntity } = require("../modules");

const createNewStudent = async (model, newStudent) => {
    // Check if admin number already exists
    const adminNumParams = {
        model: model.Student,
        attributes: ["admin_number"],
        value: newStudent.admin_number,
        cond: { admin_number: newStudent.admin_number },
    };
    await alreadyExists(adminNumParams);

    // Iterate over each course ID and check if it exists
    for (const courseId of newStudent.course_id) {
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
        entityId: newStudent.class_id,
        cond: { id: newStudent.class_id },
    };
    await findRecord(findClassId);

    // Create a new entity params
    const newEntityParams = {
        model: model.Student,
        newEntity: newStudent,
    };
    return createNewEntity(newEntityParams);
};

module.exports = { createNewStudent };
