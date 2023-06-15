const { createNewEntity } = require("../modules");
const teacherData = require("../../data-access/teacher");

const createNewTeacher = (model, newTeacher) => {
    return createNewEntity(model, newTeacher, teacherData.createNewTeacher);
};

module.exports = { createNewTeacher };
