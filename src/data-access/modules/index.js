const createNewEntity = require("./createNewEntity");
const getAllEntities = require("./getAllEntities");
const getOneEntity = require("./getOneEntity");
const updateOneEntity = require("./updateOneEntity");
const deleteOneEntity = require("./deleteOneEntity");
const deleteChildEntity = require("./deleteChildEntity");
const loginOneEntity = require("./loginOneEntity");
const logoutOneEntity = require("./logoutOneEntity");
const refreshOneEntity = require("./refreshOneEntity");

module.exports = {
    createNewEntity,
    getAllEntities,
    getOneEntity,
    updateOneEntity,
    deleteOneEntity,
    deleteChildEntity,
    loginOneEntity,
    logoutOneEntity,
    refreshOneEntity,
};
