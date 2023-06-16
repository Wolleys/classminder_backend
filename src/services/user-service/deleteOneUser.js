const { deleteOneEntity } = require("../modules");
const userData = require("../../data-access/user");

const deleteOneUser = (model, userId) => {
    // Delete one entity params
    const oneEntityParams = {
        model,
        entityId: userId,
        dataAccess: userData.deleteOneUser,
    };
    return deleteOneEntity(oneEntityParams);
};

module.exports = { deleteOneUser };
