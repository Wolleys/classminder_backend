const { findRecord } = require("../helpers/findRecord");
const { updateOneEntity } = require("../modules");

const updateOneUser = async (model, userId, data) => {
    // Check if the given user ID exists
    const findUserId = {
        desc: "a user",
        entityId: userId,
        attributes: ["id"],
        model: model.User,
        cond: { id: userId },
    };
    await findRecord(findUserId);

    // Update one entity params
    const oneEntityParams = {
        updateData: data,
        model: model.User,
        cond: { id: userId },
    };
    updateOneEntity(oneEntityParams);
};

module.exports = { updateOneUser };
