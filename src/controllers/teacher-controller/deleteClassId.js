const { deleteChildEntity } = require("../modules");
const teacherService = require("../../services/teacher-service");

const deleteClassId = (req, res) => {
    // Delete child entity params
    const childEntityParams = {
        req,
        res,
        childEntityId: "classId",
        parentEntityId: "teacherId",
        service: teacherService.deleteClassId,
    };
    deleteChildEntity(childEntityParams);
};

module.exports = { deleteClassId };
