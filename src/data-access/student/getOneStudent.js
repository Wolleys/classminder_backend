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
    return getOneEntity(oneEntityParams);
};

module.exports = { getOneStudent };
