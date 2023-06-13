const { createNewEntity } = require("../modules");
const classData = require("../../data-access/class");

const createNewClass = (model, newClass) => {
    return createNewEntity(model, newClass, classData.createNewClass);
};

module.exports = { createNewClass };
