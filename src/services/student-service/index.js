const { getOneStudent } = require("./getOneStudent");
const { getAllStudents } = require("./getAllStudents");
const { deleteCourseId } = require("./deleteCourseId");
const { createNewStudent } = require("./createNewStudent");
const { updateOneStudent } = require("./updateOneStudent");
const { deleteOneStudent } = require("./deleteOneStudent");

module.exports = {
    getOneStudent,
    getAllStudents,
    deleteCourseId,
    createNewStudent,
    updateOneStudent,
    deleteOneStudent,
};
