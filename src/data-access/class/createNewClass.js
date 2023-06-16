const { alreadyExists } = require("../helpers/alreadyExists");
const { createNewEntity } = require("../modules");

const createNewClass = async (model, newClass) => {
    // Check if class name already exists
    const classNameParams = {
        model: model.Class,
        cond: { class_name: newClass.class_name },
        value: newClass.class_name,
        attributes: ["class_name"],
    };
    await alreadyExists(classNameParams);

    // Add a new class params
    const newClassParams = {
        model: model.Class,
        newEntity: newClass,
    };
    return createNewEntity(newClassParams);
};

module.exports = { createNewClass };
