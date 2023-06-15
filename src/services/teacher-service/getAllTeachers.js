const { getAllEntities } = require("../modules");
const teacherData = require("../../data-access/teacher");

const getAllTeachers = (model) => {
    return getAllEntities(model, teacherData.getAllTeachers);
};

module.exports = { getAllTeachers };
