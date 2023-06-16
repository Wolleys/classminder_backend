const { getOneEntity } = require("../modules");

const getOneUser = (model, userId) => {
    // Get one entity params
    const oneEntityParams = {
        desc: "a user",
        entityId: userId,
        model: model.User,
        cond: { id: userId },
        attributes: ["id", "first_name", "middle_name", "last_name", "email"],
    };
    return getOneEntity(oneEntityParams);
};

module.exports = { getOneUser };
