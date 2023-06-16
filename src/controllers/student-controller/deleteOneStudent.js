const { deleteOneEntity } = require("../modules");
const studentService = require("../../services/student-service");

const deleteOneStudent = (req, res) => {
    // Delete one entity params
    const oneEntityParams = {
        req,
        res,
        idName: "studentId",
        service: studentService.deleteOneStudent,
    };
    deleteOneEntity(oneEntityParams);
};

module.exports = { deleteOneStudent };
