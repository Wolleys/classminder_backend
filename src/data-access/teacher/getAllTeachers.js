const { getAllEntities } = require("../modules");

const getAllTeachers = (model) => {
    // Get all entities params
    const allEntitiesParams = {
        model: model.Teacher,
        order: [["created_at", "DESC"]],
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
    return getAllEntities(allEntitiesParams);
};

module.exports = { getAllTeachers };
