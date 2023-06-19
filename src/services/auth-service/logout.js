const { logoutOneEntity } = require("../modules");
const authData = require("../../data-access/auth");

const logout = (model, cookies) => {
    // Logout one entity params
    const oneEntityParams = {
        model,
        cookies: cookies,
        dataAccess: authData.logout,
    };
    return logoutOneEntity(oneEntityParams);
};

module.exports = { logout };
