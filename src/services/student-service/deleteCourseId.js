const { deleteChildId } = require("../modules");
const studentData = require("../../data-access/student");

const deleteCourseId = (model, parentId, childId) => {
    return deleteChildId(model, parentId, childId, studentData.deleteCourseId);
};

module.exports = { deleteCourseId };
