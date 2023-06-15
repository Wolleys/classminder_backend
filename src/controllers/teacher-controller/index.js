const { getOneTeacher } = require("./getOneTeacher");
const { getAllTeachers } = require("./getAllTeachers");
const { createNewTeacher } = require("./createNewTeacher");
const { updateOneTeacher } = require("./updateOneTeacher");
const { deleteOneTeacher } = require("./deleteOneTeacher");

module.exports = {
    getOneTeacher,
    getAllTeachers,
    createNewTeacher,
    updateOneTeacher,
    deleteOneTeacher,
};
