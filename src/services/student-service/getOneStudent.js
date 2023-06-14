const { getOneEntity } = require("../modules");
const studentData = require("../../data-access/student");

const getOneStudent = (model, courseId) => {
    return getOneEntity(model, courseId, studentData.getOneStudent);
};

module.exports = { getOneStudent };
