const { getOneEntity } = require("../modules");

const getOneTeacher = (model, teacherId) => {
    const desc = "a teacher";
    const cond = { id: teacherId };
    const attrs = [
        "id",
        "teacher_name",
        "teacher_age",
        "service_number",
        "course_id",
        "class_id",
    ];

    return getOneEntity(model.Teacher, desc, teacherId, cond, attrs);
};

module.exports = { getOneTeacher };
