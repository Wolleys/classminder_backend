const { getOneEntity } = require("../modules");

const getOneStudent = (model, studentId) => {
    const desc = "a student";
    const cond = { id: studentId };
    const attrs = [
        "id",
        "student_name",
        "student_age",
        "admin_number",
        "course_id",
    ];

    return getOneEntity(model.Student, desc, studentId, cond, attrs);
};

module.exports = { getOneStudent };
