const { refreshOneEntity } = require("../modules");
const authService = require("../../services/auth-service");

const refreshToken = async (req, res) => {
    // Refresh one entity params
    const oneEntityParams = {
        req,
        res,
        service: authService.refreshToken,
    };
    refreshOneEntity(oneEntityParams);
};

module.exports = { refreshToken };
