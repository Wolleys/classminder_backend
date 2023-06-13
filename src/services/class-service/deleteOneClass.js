const { deleteOneEntity } = require("../modules");
const classData = require("../../data-access/class");

const deleteOneClass = (model, classId) => {
    return deleteOneEntity(model, classId, classData.deleteOneClass);
};

module.exports = { deleteOneClass };
