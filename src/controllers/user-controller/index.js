const { getOneUser } = require("./getOneUser");
const { getAllUsers } = require("./getAllUsers");
const { createNewUser } = require("./createNewUser");
const { updateOneUser } = require("./updateOneUser");
const { deleteOneUser } = require("./deleteOneUser");

module.exports = {
    getOneUser,
    getAllUsers,
    createNewUser,
    updateOneUser,
    deleteOneUser,
};
