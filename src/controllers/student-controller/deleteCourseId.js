const { deleteChildEntity } = require("../modules");
const studentService = require("../../services/student-service");

const deleteCourseId = (req, res) => {
    // Delete child entity params
    const childEntityParams = {
        req,
        res,
        childEntityId: "courseId",
        parentEntityId: "studentId",
        service: studentService.deleteCourseId,
    };
    deleteChildEntity(childEntityParams);
};

module.exports = { deleteCourseId };
