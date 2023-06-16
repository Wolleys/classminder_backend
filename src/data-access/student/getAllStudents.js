const { getAllEntities } = require("../modules");

const getAllStudents = (model) => {
    // Get all entities params
    const allEntitiesParams = {
        model: model.Student,
        order: [["created_at", "DESC"]],
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
    return getAllEntities(allEntitiesParams);
};

module.exports = { getAllStudents };
