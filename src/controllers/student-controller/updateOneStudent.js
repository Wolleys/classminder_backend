const { updateOneEntity } = require("../modules");
const studentService = require("../../services/student-service");

const updateOneStudent = (req, res) => {
    // Update one entity params
    const oneEntityParams = {
        req,
        res,
        idName: "studentId",
        service: studentService.updateOneStudent,
    };
    updateOneEntity(oneEntityParams);
};

module.exports = { updateOneStudent };
