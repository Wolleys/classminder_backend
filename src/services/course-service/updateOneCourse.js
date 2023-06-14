const slugify = require("slugify");
const { updateOneEntity } = require("../modules");
const courseData = require("../../data-access/course");

const updateOneCourse = (model, courseId, data) => {
    const update = {
        course_name: data.course_name.toLowerCase(),
        slug: slugify(data.course_name).toLowerCase(),
    };

    return updateOneEntity(model, courseId, update, courseData.updateOneCourse);
};

module.exports = { updateOneCourse };
