const { deleteOneEntity } = require("../modules");

const deleteOneCourse = (model, courseId) => {
    const desc = "a course";
    const cond = { id: courseId };
    const attrs = ["id"];

    return deleteOneEntity(model.Course, desc, courseId, cond, attrs);
};

module.exports = { deleteOneCourse };
