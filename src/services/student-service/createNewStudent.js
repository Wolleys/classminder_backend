const { createNewEntity } = require("../modules");
const studentData = require("../../data-access/student");

const createNewStudent = (model, newStudent) => {
    data = {
        ...newStudent,
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
