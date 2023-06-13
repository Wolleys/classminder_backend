const { getOneEntity } = require("../modules");
const classData = require("../../data-access/class");

const getOneClass = (model, classId) => {
    return getOneEntity(model, classId, classData.getOneClass);
};

module.exports = { getOneClass };
