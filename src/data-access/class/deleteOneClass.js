const { deleteOneEntity } = require("../modules");

const deleteOneClass = (model, classId) => {
    // Delete one entity params
    const oneEntityParams = {
        desc: "a class",
        entityId: classId,
        attributes: ["id"],
        model: model.Class,
        cond: { id: classId },
    };
    return deleteOneEntity(oneEntityParams);
};

module.exports = { deleteOneClass };
