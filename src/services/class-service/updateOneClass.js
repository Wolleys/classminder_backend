const slugify = require("slugify");
const { updateOneEntity } = require("../modules");
const classData = require("../../data-access/class");

const updateOneClass = (model, classId, data) => {
    const update = {
        class_name: data.class_name.toLowerCase(),
        slug: slugify(data.class_name).toLowerCase(),
    };

    return updateOneEntity(model, classId, update, classData.updateOneClass);
};

module.exports = { updateOneClass };
