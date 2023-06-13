const { getAllEntities } = require("../modules");
const classData = require("../../data-access/class");

const getAllClasses = (model) => {
    return getAllEntities(model, classData.getAllClasses);
};

module.exports = { getAllClasses };
