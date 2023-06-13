const { findRecord } = require("../helpers/findRecord");
const { updateOneEntity } = require("../modules");

const updateOneClass = async (model, classId, data) => {
    const desc = "a class";
    const cond = { id: classId };
    const attrs = ["id"];

    await findRecord(model.Class, desc, classId, cond, attrs);
    updateOneEntity(model.Class, cond, data);
};

module.exports = { updateOneClass };
