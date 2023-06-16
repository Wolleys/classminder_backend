const { createNewEntity } = require("../modules");
const teacherData = require("../../data-access/teacher");
const { hashPassword } = require("../../middlewares/auth/bcrypt");

const createNewTeacher = async (model, newTeacher) => {
    const hashedPassword = await hashPassword(newTeacher.password);
    const data = {
        ...newTeacher,
        password: hashedPassword,
    };
    
    // Create a new entity params
    const newEntityParams = {
        model,
        newEntity: data,
        dataAccess: teacherData.createNewTeacher,
    };
    return createNewEntity(newEntityParams);
};

module.exports = { createNewTeacher };
