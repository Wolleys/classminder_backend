const { findRecord } = require("../helpers/findRecord");
const { updateOneEntity } = require("../modules");

const updateOneCourse = async (model, courseId, data) => {
    const desc = "a course";
    const cond = { id: courseId };
    const attrs = ["id"];

    await findRecord(model.Course, desc, courseId, cond, attrs);
    updateOneEntity(model.Course, cond, data);
};

module.exports = { updateOneCourse };
