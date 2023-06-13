const { deleteOneEntity } = require("../modules");

const deleteOneClass = (model, classId) => {
    const desc = "a class";
    const cond = { id: classId };
    const attrs = ["id"];

    return deleteOneEntity(model.Class, desc, classId, cond, attrs);
};

module.exports = { deleteOneClass };
