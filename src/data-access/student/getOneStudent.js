const { getOneEntity } = require("../modules");

const getOneStudent = (model, studentId) => {
    // Get one entity params
    const oneEntityParams = {
        desc: "a student",
        entityId: studentId,
        model: model.Student,
        cond: { id: studentId },
        attributes: [
            "id",
            "student_name",
            "student_age",
            "admin_number",
            "course_id",
        ],
    };
    return getOneEntity(oneEntityParams);
};

module.exports = { getOneStudent };
