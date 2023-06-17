const { createNewEntity } = require("../modules");
const authService = require("../../services/auth-service");

const login = (req, res) => {
    // Create a new entity params
    const newEntityParams = {
        req,
        res,
        service: authService.login,
    };
    createNewEntity(newEntityParams);
};

module.exports = { login };
