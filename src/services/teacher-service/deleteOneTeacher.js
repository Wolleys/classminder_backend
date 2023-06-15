const { deleteOneEntity } = require("../modules");
const teacherData = require("../../data-access/teacher");

const deleteOneTeacher = (model, teacherId) => {
    return deleteOneEntity(model, teacherId, teacherData.deleteOneTeacher);
};

module.exports = { deleteOneTeacher };
