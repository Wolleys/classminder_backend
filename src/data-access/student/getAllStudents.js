const { getAllEntities } = require("../modules");

const getAllStudents = (model) => {
    const order = [["created_at", "DESC"]];
    const attrs = [
        "id",
        "student_name",
        "student_age",
        "admin_number",
        "course_id",
    ];

    return getAllEntities(model.Student, attrs, order);
};

module.exports = { getAllStudents };
