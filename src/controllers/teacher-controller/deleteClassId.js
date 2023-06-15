const { deleteChildId } = require("../modules");
const teacherService = require("../../services/teacher-service");

const deleteClassId = (req, res) => {
    const childId = "classId";
    const parentId = "teacherId";
    deleteChildId(req, res, parentId, childId, teacherService.deleteClassId);
};

module.exports = { deleteClassId };
