const { alreadyExists } = require("../helpers/alreadyExists");
const { createNewEntity } = require("../modules");

const createNewUser = async (model, newUser) => {
    // Check if email already exists
    const emailParams = {
        model: model.User,
        value: newUser.email,
        attributes: ["email"],
        cond: { email: newUser.email },
    };
    await alreadyExists(emailParams);

    // Create a new entity params
    const newEntityParams = {
        model: model.User,
        newEntity: newUser,
    };
    const createdEntity = await createNewEntity(newEntityParams);

    // Destructure and separate password field
    const { password, ...user } = createdEntity.toJSON();
    return user;
};

module.exports = { createNewUser };
