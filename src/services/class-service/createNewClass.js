const { createNewEntity } = require("../modules");
const classData = require("../../data-access/class");

const createNewClass = (model, newClass) => {
    // Create a new entity params
    const newEntityParams = {
        model,
        newEntity: newClass,
        dataAccess: classData.createNewClass,
    };
    return createNewEntity(newEntityParams);
};

module.exports = { createNewClass };
