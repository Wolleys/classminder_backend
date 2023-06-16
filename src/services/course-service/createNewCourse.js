const { createNewEntity } = require("../modules");
const courseData = require("../../data-access/course");

const createNewCourse = (model, newCourse) => {
    // Create a new entity params
    const newEntityParams = {
        model,
        newEntity: newCourse,
        dataAccess: courseData.createNewCourse,
    };
    return createNewEntity(newEntityParams);
};

module.exports = { createNewCourse };
