const { logoutOneEntity } = require("../modules");
const authService = require("../../services/auth-service");

const logout = (req, res) => {
    // Logout one entity params
    const oneEntityParams = {
        req,
        res,
        service: authService.logout,
    };
    logoutOneEntity(oneEntityParams);
};

module.exports = { logout };
