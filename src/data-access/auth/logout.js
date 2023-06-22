const { logoutOneEntity } = require("../modules");

const logout = async (model, cookies) => {
    const common = {
        cookies,
        cond: { refresh_token: cookies.jwt },
        attributes: ["id", "refresh_token"],
    };

    // Check cookie in user table
    const logoutUserParams = {
        model: model.User,
        ...common,
    };
    const adminUser = await logoutOneEntity(logoutUserParams);

    if (adminUser) {
        await adminUser.update(
            { refresh_token: null },
            { where: { id: adminUser.id } }
        );
        return adminUser;
    }

    // Check cookie in teacher table
    const logoutTeacherParams = {
        model: model.Teacher,
        ...common,
    };
    const teacherUser = await logoutOneEntity(logoutTeacherParams);

    if (teacherUser) {
        await teacherUser.update(
            { refresh_token: null },
            { where: { id: teacherUser.id } }
        );
        return teacherUser;
    }

    // Check cookie in student table
    const logoutStudentParams = {
        model: model.Student,
        ...common,
    };
    const studentUser = await logoutOneEntity(logoutStudentParams);

    if (studentUser) {
        await studentUser.update(
            { refresh_token: null },
            { where: { id: studentUser.id } }
        );
        return studentUser;
    }
};

module.exports = { logout };
