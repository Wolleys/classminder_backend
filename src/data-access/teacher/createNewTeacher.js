const { alreadyExists } = require("../helpers/alreadyExists");
const { findRecord } = require("../helpers/findRecord");
const { createNewEntity } = require("../modules");

const createNewTeacher = async (model, newTeacher) => {
    // Check if service number already exists
    const serviceNumParams = {
        model: model.Teacher,
        attributes: ["service_number"],
        value: newTeacher.service_number,
        cond: { service_number: newTeacher.service_number },
    };
    await alreadyExists(serviceNumParams);

    // Iterate over each course ID and check if it exists
    for (const courseId of newTeacher.course_id) {
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
    for (const classId of newTeacher.class_id) {
        const findClassId = {
            desc: "a class",
            entityId: classId,
            attributes: ["id"],
            model: model.Class,
            cond: { id: classId },
        };
        await findRecord(findClassId);
    }

    // Create a new entity params
    const newEntityParams = {
        model: model.Teacher,
        newEntity: newTeacher,
    };
    return createNewEntity(newEntityParams);
};

module.exports = { createNewTeacher };
