const { updateOneEntity } = require("../modules");
const teacherService = require("../../services/teacher-service");

const updateOneTeacher = (req, res) => {
    // Update one entity params
    const oneEntityParams = {
        req,
        res,
        idName: "teacherId",
        service: teacherService.updateOneTeacher,
    };
    updateOneEntity(oneEntityParams);
};

module.exports = { updateOneTeacher };
