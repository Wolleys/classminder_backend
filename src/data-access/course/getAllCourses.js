const { getAllEntities } = require("../modules");

const getAllCourses = (model) => {
    const order = [["created_at", "DESC"]];
    const attrs = ["id", "course_name", "slug"];

    return getAllEntities(model.Course, attrs, order);
};

module.exports = { getAllCourses };
