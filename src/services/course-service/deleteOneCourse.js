const { deleteOneEntity } = require("../modules");
const courseData = require("../../data-access/course");

const deleteOneCourse = (model, courseId) => {
    return deleteOneEntity(model, courseId, courseData.deleteOneCourse);
};

module.exports = { deleteOneCourse };
