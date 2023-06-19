const { refreshOneEntity } = require("../modules");
const { sign, verify } = require("jsonwebtoken");
const env = process.env;

const refreshToken = async (model, cookies) => {
    const common = {
        cond: { refresh_token: cookies.jwt },
        attributes: ["id", "role", "refresh_token"],
    };

    // Check valid refresh token cookie in user table
    const adminRtParams = {
        cookies,
        model: model.User,
        ...common,
    };
    const adminUser = await refreshOneEntity(adminRtParams);

    if (adminUser) {
        // Verify the found admin refresh token cookie
        const data = verify(cookies.jwt, env.REFRESH_TOKEN_SECRET);
        if (adminUser.id !== data.id) {
            throw { status: 403, message: "Invalid token" };
        }

        // Issue a new access token
        const adminAtClaims = { id: data.id, role: adminUser.role };
        const adminAccessToken = sign(adminAtClaims, env.ACCESS_TOKEN_SECRET, {
            expiresIn: "30s",
        });
        return adminAccessToken;
    }

    // Check valid refresh token cookie in teacher table
    const tchrRtParams = {
        cookies,
        ...common,
        model: model.Teacher,
    };
    const teacherUser = await refreshOneEntity(tchrRtParams);

    if (teacherUser) {
        // Verify the found admin refresh token cookie
        const data = verify(cookies.jwt, env.REFRESH_TOKEN_SECRET);
        if (teacherUser.id !== data.id) {
            throw { status: 403, message: "Invalid token" };
        }

        // Issue a new access token
        const tchrAtClaims = { id: data.id, role: teacherUser.role };
        const tchrAcsTkn = sign(tchrAtClaims, env.ACCESS_TOKEN_SECRET, {
            expiresIn: "30s",
        });
        return tchrAcsTkn;
    }

    // Check valid refresh token cookie in student table
    const studRtParams = {
        cookies,
        ...common,
        model: model.Student,
    };
    const studentUser = await refreshOneEntity(studRtParams);

    if (studentUser) {
        // Verify the found admin refresh token cookie
        const data = verify(cookies.jwt, env.REFRESH_TOKEN_SECRET);
        if (studentUser.id !== data.id) {
            throw { status: 403, message: "Invalid token" };
        }

        // Issue a new access token
        const studAtClaims = { id: data.id, role: studentUser.role };
        const studAcsTkn = sign(studAtClaims, env.ACCESS_TOKEN_SECRET, {
            expiresIn: "30s",
        });
        return studAcsTkn;
    }
    throw { status: 403, message: "Forbidden: Invalid token" };
};

module.exports = { refreshToken };
