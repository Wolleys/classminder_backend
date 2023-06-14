const { createNewEntity } = require("../modules");
const studentData = require("../../data-access/student");

const createNewStudent = (model, newStudent) => {
    data = {
        ...newStudent,
        class_id: newStudent.class_id,
    };

    return createNewEntity(model, data, studentData.createNewStudent);
};

module.exports = { createNewStudent };
