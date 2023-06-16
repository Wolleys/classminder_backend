const { createNewEntity } = require("../modules");
const studentService = require("../../services/student-service");

const createNewStudent = (req, res) => {
    // Create a new entity params
    const newEntityParams = {
        req,
        res,
        service: studentService.createNewStudent,
    };
    createNewEntity(newEntityParams);
};

module.exports = { createNewStudent };
