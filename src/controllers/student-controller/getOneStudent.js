const { getOneEntity } = require("../modules");
const studentService = require("../../services/student-service");

const getOneStudent = (req, res) => {
    // Get one entity params
    const oneEntityParams = {
        req,
        res,
        idName: "studentId",
        service: studentService.getOneStudent,
    };
    getOneEntity(oneEntityParams);
};

module.exports = { getOneStudent };
