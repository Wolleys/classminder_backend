const { updateOneEntity } = require("../modules");
const studentData = require("../../data-access/student");

const updateOneStudent = (model, studentId, data) => {
    return updateOneEntity(model, studentId, data, studentData.updateOneStudent);
};

module.exports = { updateOneStudent };
