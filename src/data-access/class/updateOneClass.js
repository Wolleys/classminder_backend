const { findRecord } = require("../helpers/findRecord");
const { updateOneEntity } = require("../modules");

const updateOneClass = async (model, classId, data) => {
    // Update one entity params
    const oneEntityParams = {
        updateData: data,
        model: model.Class,
        cond: { id: classId },
    };
    await updateOneEntity(oneEntityParams);

    // Return the updated class
    const updatedClassId = {
        desc: "a class",
        entityId: classId,
        model: model.Class,
        cond: { id: classId },
        attributes: ["id", "class_name", "stream"],
    };
    const updatedClass = await findRecord(updatedClassId);
    return updatedClass;
};

module.exports = { updateOneClass };
