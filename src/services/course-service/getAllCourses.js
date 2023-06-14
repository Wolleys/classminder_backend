const { getAllEntities } = require("../modules");
const courseData = require("../../data-access/course");

const getAllCourses = (model) => {
    return getAllEntities(model, courseData.getAllCourses);
};

module.exports = { getAllCourses };
