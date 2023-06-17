const { createNewEntity } = require("../modules");
const authData = require("../../data-access/auth");

const login = (model, loginUser) => {
    // Create a new entity params
    const newEntityParams = {
        model,
        newEntity: loginUser,
        dataAccess: authData.login,
    };
    return createNewEntity(newEntityParams);
};

module.exports = { login };
