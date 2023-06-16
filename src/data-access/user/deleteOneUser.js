const { deleteOneEntity } = require("../modules");

const deleteOneUser = (model, userId) => {
    // Delete one entity params
    const oneEntityParams = {
        desc: "a user",
        entityId: userId,
        attributes: ["id"],
        model: model.User,
        cond: { id: userId },
    };
    return deleteOneEntity(oneEntityParams);
};

module.exports = { deleteOneUser };
