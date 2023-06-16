const { getOneEntity } = require("../modules");

const getOneClass = (model, classId) => {
    // Get one entity params
    const oneEntityParams = {
        desc: "a class",
        entityId: classId,
        model: model.Class,
        cond: { id: classId },
        attributes: ["id", "class_name", "stream"],
    };
    return getOneEntity(oneEntityParams);
};

module.exports = { getOneClass };
