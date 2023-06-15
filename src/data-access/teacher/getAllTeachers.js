const { getAllEntities } = require("../modules");

const getAllTeachers = (model) => {
    const order = [["created_at", "DESC"]];
    const attrs = [
        "id",
        "teacher_name",
        "teacher_age",
        "service_number",
        "course_id",
        "class_id",
    ];

    return getAllEntities(model.Teacher, attrs, order);
};

module.exports = { getAllTeachers };
