const { deleteOneEntity } = require("../modules");
const teacherService = require("../../services/teacher-service");

const deleteOneTeacher = (req, res) => {
    // Get one entity params
    const oneEntityParams = {
        req,
        res,
        idName: "teacherId",
        service: teacherService.deleteOneTeacher,
    };
    deleteOneEntity(oneEntityParams);
};

module.exports = { deleteOneTeacher };
