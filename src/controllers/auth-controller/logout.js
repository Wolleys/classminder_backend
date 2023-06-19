const { loginOneEntity } = require("../modules");
const authService = require("../../services/auth-service");

const logout = (req, res) => {
    // Logout one entity params
    const oneEntityParams = {
        req,
        res,
        service: authService.logout,
    };
    loginOneEntity(oneEntityParams);
};

module.exports = { logout };
