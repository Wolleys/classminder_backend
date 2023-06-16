const { deleteOneEntity } = require("../modules");
const userService = require("../../services/user-service");

const deleteOneUser = (req, res) => {
    // Delete one entity params
    const oneEntityParams = {
        req,
        res,
        idName: "userId",
        service: userService.deleteOneUser,
    };
    deleteOneEntity(oneEntityParams);
};

module.exports = { deleteOneUser };
