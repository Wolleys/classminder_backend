const { refreshOneEntity } = require("../modules");
const authData = require("../../data-access/auth");

const refreshToken = (model, cookies) => {
    // Refresh one entity params
    const oneEntityParams = {
        model,
        cookies,
        dataAccess: authData.refreshToken,
    };
    return refreshOneEntity(oneEntityParams);
};

module.exports = { refreshToken };
