const { findRecord } = require("../helpers/findRecord");
const { updateOneEntity } = require("../modules");

const updateOneStudent = async (model, studentId, data) => {
    // Update one entity params
    const oneEntityParams = {
        updateData: data,
        model: model.Student,
        cond: { id: studentId },
    };
    await updateOneEntity(oneEntityParams);

    // Return the updated student
    const updatedStudentId = {
        desc: "a student",
        entityId: studentId,
        model: model.Student,
        cond: { id: studentId },
        attributes: [
            "id",
            "first_name",
            "middle_name",
            "last_name",
            "email",
            "age",
            "admin_number",
            "course_id",
            "class_id",
        ],
    };
    const updatedStudent = await findRecord(updatedStudentId);
    return updatedStudent;
};

module.exports = { updateOneStudent };
