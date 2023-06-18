const { loginOneEntity } = require("../modules");
const { createToken } = require("../../middlewares/auth/jwt");
const { validatePassword } = require("../../middlewares/auth/bcrypt");

const login = async (model, user) => {
    // Login entity params
    const loginUserParams = {
        model: model.User,
        cond: { email: user.email },
        attributes: ["id", "role", "email", "password"],
    };
    const adminUser = await loginOneEntity(loginUserParams);
    await validatePassword(user.password, adminUser.password);

    const accTknClaims = { id: adminUser.id, role: adminUser.user_role };
    const rfrshTknlaims = { id: adminUser.id };
    const jwt = createToken(accTknClaims, rfrshTknlaims); // Serialize user using the secrect key

    // Save refreshToken with current user
    await adminUser.update(
        { refresh_token: jwt.refreshToken },
        { where: { id: adminUser.id } }
    );

    return jwt;
};

module.exports = { login };
