const { createNewEntity } = require("../modules");
const teacherData = require("../../data-access/teacher");

const createNewTeacher = (model, newTeacher) => {
    // Create a new entity params
    const newEntityParams = {
        model,
        newEntity: newTeacher,
        dataAccess: teacherData.createNewTeacher,
    };
    return createNewEntity(newEntityParams);
};

module.exports = { createNewTeacher };
