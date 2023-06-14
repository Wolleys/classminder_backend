const { getAllEntities } = require("../modules");
const studentData = require("../../data-access/student");

const getAllStudents = (model) => {
    return getAllEntities(model, studentData.getAllStudents);
};

module.exports = { getAllStudents };
