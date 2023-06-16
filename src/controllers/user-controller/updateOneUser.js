const { updateOneEntity } = require("../modules");
const userService = require("../../services/user-service");

const updateOneUser = (req, res) => {
    // Update one entity params
    const oneEntityParams = {
        req,
        res,
        idName: "userId",
        service: userService.updateOneUser,
    };
    updateOneEntity(oneEntityParams);
};

module.exports = { updateOneUser };
