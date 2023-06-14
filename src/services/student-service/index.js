const { getOneStudent } = require("./getOneStudent");
const { getAllStudents } = require("./getAllStudents");
const { createNewStudent } = require("./createNewStudent");
const { updateOneStudent } = require("./updateOneStudent");
const { deleteOneStudent } = require("./deleteOneStudent");

module.exports = {
    getOneStudent,
    getAllStudents,
    createNewStudent,
    updateOneStudent,
    deleteOneStudent,
};
