const { getOneCourse } = require("./getOneCourse");
const { getAllCourses } = require("./getAllCourses");
const { createNewCourse } = require("./createNewCourse");
const { updateOneCourse } = require("./updateOneCourse");
const { deleteOneCourse } = require("./deleteOneCourse");

module.exports = {
    getOneCourse,
    getAllCourses,
    createNewCourse,
    updateOneCourse,
    deleteOneCourse,
};
