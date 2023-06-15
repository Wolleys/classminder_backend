const { updateOneEntity } = require("../modules");
const teacherData = require("../../data-access/teacher");

const updateOneTeacher = (model, teacherId, data) => {
    return updateOneEntity(model, teacherId, data, teacherData.updateOneTeacher);
};

module.exports = { updateOneTeacher };
