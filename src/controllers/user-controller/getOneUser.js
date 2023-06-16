const { getOneEntity } = require("../modules");
const userService = require("../../services/user-service");

const getOneUser = (req, res) => {
    // Get one entity params
    const oneEntityParams = {
        req,
        res,
        idName: "userId",
        service: userService.getOneUser,
    };
    getOneEntity(oneEntityParams);
};

module.exports = { getOneUser };
