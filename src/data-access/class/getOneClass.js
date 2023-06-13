const { getOneEntity } = require("../modules");

const getOneClass = (model, classId) => {
    const desc = "a class";
    const cond = { id: classId };
    const attrs = ["id", "class_name", "slug"];

    return getOneEntity(model.Class, desc, classId, cond, attrs);
};

module.exports = { getOneClass };
