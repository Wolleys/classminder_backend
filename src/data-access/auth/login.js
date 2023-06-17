const { findUser } = require("../helpers/findUser");
const { validatePassword } = require("../../middlewares/auth/bcrypt");

const login = async (model, user) => {
    // Check if the given user email exists
    const findUserEmail = {
        model: model.User,
        cond: { email: user.email },
        attributes: ["id", "role", "email", "password"],
    };
    const adminUser = await findUser(findUserEmail);
    await validatePassword(user.password, adminUser.password);

    // Destructure and separate password field
    const { password, ...adminData } = adminUser.toJSON();
    return adminData
};

module.exports = { login };
