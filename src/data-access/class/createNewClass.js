const { alreadyExists } = require("../helpers/alreadyExists");
const { createNewEntity } = require("../modules");

const createNewClass = async (model, newClass) => {
    // Check if class name already exists
    const cond = { class_name: newClass.class_name };
    const nameVal = newClass.class_name;
    const attrs = ["class_name"];

    await alreadyExists(model.Class, cond, nameVal, attrs);
    return createNewEntity(model.Class, newClass);
};

module.exports = { createNewClass };
