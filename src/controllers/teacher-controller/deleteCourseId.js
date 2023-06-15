const { deleteChildId } = require("../modules");
const teacherService = require("../../services/teacher-service");

const deleteCourseId = (req, res) => {
    const childId = "courseId";
    const parentId = "teacherId";
    deleteChildId(req, res, parentId, childId, teacherService.deleteCourseId);
};

module.exports = { deleteCourseId };
