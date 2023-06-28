const { findRecord } = require("../helpers/findRecord");
const { updateOneEntity } = require("../modules");

const updateOneTeacher = async (model, teacherId, data) => {
    // Update one entity params
    const oneEntityParams = {
        updateData: data,
        model: model.Teacher,
        cond: { id: teacherId },
    };
    await updateOneEntity(oneEntityParams);

    // Return the updated teacher
    const updatedTeacherId = {
        desc: "a teacher",
        entityId: teacherId,
        model: model.Teacher,
        cond: { id: teacherId },
        attributes: [
            "id",
            "first_name",
            "middle_name",
            "last_name",
            "email",
            "age",
            "service_number",
            "course_id",
            "class_id",
        ],
    };
    const updatedTeacher = await findRecord(updatedTeacherId);
    return updatedTeacher;
};

module.exports = { updateOneTeacher };
