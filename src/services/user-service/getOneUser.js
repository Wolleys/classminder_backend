const { getOneEntity } = require("../modules");
const userData = require("../../data-access/user");

const getOneUser = (model, userId) => {
    // Get one entity params
    const oneEntityParams = {
        model,
        entityId: userId,
        dataAccess: userData.getOneUser,
    };
    return getOneEntity(oneEntityParams);
};

module.exports = { getOneUser };
