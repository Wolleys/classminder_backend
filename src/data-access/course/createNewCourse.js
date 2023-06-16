const { alreadyExists } = require("../helpers/alreadyExists");
const { createNewEntity } = require("../modules");

const createNewCourse = async (model, newCourse) => {
    // Check if course name already exists
    const courseNameParams = {
        model: model.Course,
        attributes: ["course_name"],
        value: newCourse.course_name,
        cond: { course_name: newCourse.course_name },
    };
    await alreadyExists(courseNameParams);

    // Create a new entity params
    const newEntityParams = {
        model: model.Course,
        newEntity: newCourse,
    };
    return createNewEntity(newEntityParams);
};

module.exports = { createNewCourse };
