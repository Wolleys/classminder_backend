const { updateOneEntity } = require("../modules");
const studentData = require("../../data-access/student");

const updateOneStudent = (model, courseId, data) => {
    return updateOneEntity(model, courseId, data, studentData.updateOneStudent);
};

module.exports = { updateOneStudent };
