const { findRecord } = require("../helpers/findRecord");
const { updateOneEntity } = require("../modules");

const updateOneClass = async (model, classId, data) => {
    // Check if the given class ID exists
    const findClassId = {
        desc: "a class",
        entityId: classId,
        attributes: ["id"],
        model: model.Class,
        cond: { id: classId },
    };
    await findRecord(findClassId);

    // Update one entity params
    const oneEntityParams = {
        updateData: data,
        model: model.Class,
        cond: { id: classId },
    };
    updateOneEntity(oneEntityParams);
};

module.exports = { updateOneClass };
