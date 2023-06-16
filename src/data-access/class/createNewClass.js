const { alreadyExists } = require("../helpers/alreadyExists");
const { createNewEntity } = require("../modules");

const createNewClass = async (model, newClass) => {
    // Check if stream name already exists
    const classNameParams = {
        model: model.Class,
        value: newClass.stream,
        attributes: ["stream"],
        cond: { stream: newClass.stream },
    };
    await alreadyExists(classNameParams);

    // Create a new entity params
    const newEntityParams = {
        model: model.Class,
        newEntity: newClass,
    };
    return createNewEntity(newEntityParams);
};

module.exports = { createNewClass };
