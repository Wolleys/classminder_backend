const slugify = require("slugify");
const { createNewEntity } = require("../modules");
const courseData = require("../../data-access/course");

const createNewCourse = (model, newCourse) => {
    const data = {
        course_name: newCourse.course_name.toLowerCase(),
        slug: slugify(newCourse.course_name).toLowerCase(),
    };

    // Create a new entity params
    const newEntityParams = {
        model,
        newEntity: data,
        dataAccess: courseData.createNewCourse,
    };
    return createNewEntity(newEntityParams);
};

module.exports = { createNewCourse };
