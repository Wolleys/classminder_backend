const { createNewEntity } = require("../modules");
const studentData = require("../../data-access/student");
const { hashPassword } = require("../../middlewares/auth/bcrypt");

const createNewStudent = async (model, newStudent) => {
    const hashedPassword = await hashPassword(newStudent.password);
    data = {
        ...newStudent,
        password: hashedPassword,
        class_id: newStudent.class_id,
    };

    // Create a new entity params
    const newEntityParams = {
        model,
        newEntity: data,
        dataAccess: studentData.createNewStudent,
    };
    return createNewEntity(newEntityParams);
};

module.exports = { createNewStudent };
