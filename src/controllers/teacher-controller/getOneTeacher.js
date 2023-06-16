const { getOneEntity } = require("../modules");
const teacherService = require("../../services/teacher-service");

const getOneTeacher = (req, res) => {
    // Get one entity params
    const oneEntityParams = {
        req,
        res,
        idName: "teacherId",
        service: teacherService.getOneTeacher,
    };
    getOneEntity(oneEntityParams);
};

module.exports = { getOneTeacher };
