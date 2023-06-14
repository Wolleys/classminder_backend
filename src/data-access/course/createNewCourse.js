const { alreadyExists } = require("../helpers/alreadyExists");
const { createNewEntity } = require("../modules");

const createNewCourse = async (model, newCourse) => {
    // Check if course name already exists
    const cond = { course_name: newCourse.course_name };
    const nameVal = newCourse.course_name;
    const attrs = ["course_name"];

    await alreadyExists(model.Course, cond, nameVal, attrs);
    return createNewEntity(model.Course, newCourse);
};

module.exports = { createNewCourse };
