const { deleteOneEntity } = require("../modules");
const studentData = require("../../data-access/student");

const deleteOneStudent = (model, studentId) => {
    return deleteOneEntity(model, studentId, studentData.deleteOneStudent);
};

module.exports = { deleteOneStudent };
