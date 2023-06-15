const { deleteChildId } = require("../modules");
const teacherData = require("../../data-access/teacher");

const deleteCourseId = (model, parentId, childId) => {
    return deleteChildId(model, parentId, childId, teacherData.deleteCourseId);
};

module.exports = { deleteCourseId };
