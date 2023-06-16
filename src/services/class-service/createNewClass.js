const slugify = require("slugify");
const { createNewEntity } = require("../modules");
const classData = require("../../data-access/class");

const createNewClass = (model, newClass) => {
    const data = {
        class_name: newClass.class_name.toLowerCase(),
        slug: slugify(newClass.class_name).toLowerCase(),
    };

    // Add a new class params
    const newClassParams = {
        model,
        newEntity: data,
        dataAccess: classData.createNewClass,
    };
    return createNewEntity(newClassParams);
};

module.exports = { createNewClass };
