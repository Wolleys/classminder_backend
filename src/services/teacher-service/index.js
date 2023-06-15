const { getOneTeacher } = require("./getOneTeacher");
const { getAllTeachers } = require("./getAllTeachers");
const { deleteCourseId } = require("./deleteCourseId");
const { createNewTeacher } = require("./createNewTeacher");
const { updateOneTeacher } = require("./updateOneTeacher");
const { deleteOneTeacher } = require("./deleteOneTeacher");

module.exports = {
    getOneTeacher,
    getAllTeachers,
    deleteCourseId,
    createNewTeacher,
    updateOneTeacher,
    deleteOneTeacher,
};
