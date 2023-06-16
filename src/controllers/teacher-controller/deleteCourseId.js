const { deleteChildEntity } = require("../modules");
const teacherService = require("../../services/teacher-service");

const deleteCourseId = (req, res) => {
    // Delete child entity params
    const childEntityParams = {
        req,
        res,
        childEntityId: "courseId",
        parentEntityId: "teacherId",
        service: teacherService.deleteCourseId,
    };
    deleteChildEntity(childEntityParams);
};

module.exports = { deleteCourseId };
