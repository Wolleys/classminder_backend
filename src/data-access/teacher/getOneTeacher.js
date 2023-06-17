const { getOneEntity } = require("../modules");

const getOneTeacher = (model, teacherId) => {
    // Get one entity params
    const oneEntityParams = {
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
    return getOneEntity(oneEntityParams);
};

module.exports = { getOneTeacher };
