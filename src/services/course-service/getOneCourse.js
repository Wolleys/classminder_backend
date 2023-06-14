const { getOneEntity } = require("../modules");
const courseData = require("../../data-access/course");

const getOneCourse = (model, courseId) => {
    return getOneEntity(model, courseId, courseData.getOneCourse);
};

module.exports = { getOneCourse };
