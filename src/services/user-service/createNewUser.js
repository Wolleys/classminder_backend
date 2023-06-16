const { createNewEntity } = require("../modules");
const userData = require("../../data-access/user");
const { hashPassword } = require("../../middlewares/auth/bcrypt");

const createNewUser = async (model, newUser) => {
    const hashedPassword = await hashPassword(newUser.password);
    const data = {
        ...newUser,
        password: hashedPassword,
    };

    // Create a new entity params
    const newEntityParams = {
        model,
        newEntity: data,
        dataAccess: userData.createNewUser,
    };
    return createNewEntity(newEntityParams);
};

module.exports = { createNewUser };
