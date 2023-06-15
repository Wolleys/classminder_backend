const { getOneEntity } = require("../modules");
const teacherData = require("../../data-access/teacher");

const getOneTeacher = (model, teacherId) => {
    return getOneEntity(model, teacherId, teacherData.getOneTeacher);
};

module.exports = { getOneTeacher };
