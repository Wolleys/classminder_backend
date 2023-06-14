const { getOneEntity } = require("../modules");

const getOneCourse = (model, courseId) => {
    const desc = "a course";
    const cond = { id: courseId };
    const attrs = ["id", "course_name", "slug"];

    return getOneEntity(model.Course, desc, courseId, cond, attrs);
};

module.exports = { getOneCourse };
