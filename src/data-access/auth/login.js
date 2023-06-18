const { loginOneEntity } = require("../modules");
const { noUserError } = require("../modules/errorHandler");
const { createToken } = require("../../middlewares/auth/jwt");
const { validatePassword } = require("../../middlewares/auth/bcrypt");

const login = async (model, user) => {
    const common = {
        cond: { email: user.email },
        attributes: ["id", "role", "email", "password"],
    };
    
    // Check if the user is an admin
    const loginUserParams = {
        model: model.User,
        ...common,
    };
    const adminUser = await loginOneEntity(loginUserParams);

    if (adminUser) {
        await validatePassword(user.password, adminUser.password);

        const adminAtClaims = { id: adminUser.id, role: adminUser.role };
        const adminRtClaims = { id: adminUser.id };
        const adminJwt = createToken(adminAtClaims, adminRtClaims);

        await adminUser.update(
            { refresh_token: adminJwt.refreshToken },
            { where: { id: adminUser.id } }
        );
        return adminJwt;
    }

    // Check if the user is a teacher
    const loginTeacherParams = {
        model: model.Teacher,
        ...common,
    };
    const teacherUser = await loginOneEntity(loginTeacherParams);

    if (teacherUser) {
        await validatePassword(user.password, teacherUser.password);

        const tchrAtClaims = { id: teacherUser.id, role: teacherUser.role };
        const tchrRtClaims = { id: teacherUser.id };
        const tchrJwt = createToken(tchrAtClaims, tchrRtClaims);

        await teacherUser.update(
            { refresh_token: tchrJwt.refreshToken },
            { where: { id: teacherUser.id } }
        );
        return tchrJwt;
    }

    // Check if the user is a student
    const loginStudentParams = {
        model: model.Student,
        ...common,
    };
    const studentUser = await loginOneEntity(loginStudentParams);

    if (studentUser) {
        await validatePassword(user.password, studentUser.password);

        const studAtClaims = { id: studentUser.id, role: studentUser.role };
        const studRtClaims = { id: studentUser.id };
        const studJwt = createToken(studAtClaims, studRtClaims);

        await studentUser.update(
            { refresh_token: studJwt.refreshToken },
            { where: { id: studentUser.id } }
        );
        return studJwt;
    }
    noUserError();
};

module.exports = { login };
