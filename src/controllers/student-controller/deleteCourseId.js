const { deleteChildId } = require("../modules");
const studentService = require("../../services/student-service");

const deleteCourseId = (req, res) => {
    const childId = "courseId";
    const parentId = "studentId";
    deleteChildId(req, res, parentId, childId, studentService.deleteCourseId);
};

module.exports = { deleteCourseId };
