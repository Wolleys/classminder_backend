const slugify = require("slugify");
const { updateOneEntity } = require("../modules");
const classData = require("../../data-access/class");

const updateOneClass = (model, classId, data) => {
    const editedData = {
        class_name: data.class_name.toLowerCase(),
        slug: slugify(data.class_name).toLowerCase(),
    };

    return updateOneEntity(model, classId, editedData, classData.updateOneClass);
};

module.exports = { updateOneClass };
