const { logoutOneEntity } = require("../modules");

const logout = async (model, cookies) => {
    // Check cookie in user table
    const logoutUserParams = {
        cookies,
        model: model.User,
        cond: { refresh_token: cookies.jwt },
        attributes: ["id", "refresh_token"],
    };
    const adminUser = await logoutOneEntity(logoutUserParams);

    if (adminUser) {
        await adminUser.update(
            { refresh_token: null },
            { where: { id: adminUser.id } }
        );
        return adminUser;
    }
};

module.exports = { logout };
