const { updateOneEntity } = require("../modules");
const userData = require("../../data-access/user");

const updateOneUser = (model, userId, data) => {
    // Update one entity params
    const oneEntityParams = {
        model,
        entityId: userId,
        updateData: data,
        dataAccess: userData.updateOneUser,
    };
    return updateOneEntity(oneEntityParams);
};

module.exports = { updateOneUser };
