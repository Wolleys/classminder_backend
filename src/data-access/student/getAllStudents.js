const { getAllEntities } = require("../modules");

const getAllStudents = (model) => {
    // Get all entities params
    const allEntitiesParams = {
        model: model.Student,
        order: [["created_at", "DESC"]],
        attributes: [
            "id",
            "student_name",
            "student_age",
            "admin_number",
            "course_id",
        ],
    };
    return getAllEntities(allEntitiesParams);
};

module.exports = { getAllStudents };
