const { createNewEntity } = require("../modules");
const studentData = require("../../data-access/student");

const createNewStudent = (model, newStudent) => {
    return createNewEntity(model, newStudent, studentData.createNewStudent);
};

module.exports = { createNewStudent };
