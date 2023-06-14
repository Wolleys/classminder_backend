const { getOneEntity } = require("../modules");
const studentData = require("../../data-access/student");

const getOneStudent = (model, studentId) => {
    return getOneEntity(model, studentId, studentData.getOneStudent);
};

module.exports = { getOneStudent };
