const { deleteChildId } = require("../modules");
const studentData = require("../../data-access/student");

const deleteCourseId = async (model, parentId, childId) => {
    return deleteChildId(model, parentId, childId, studentData.deleteCourseId);
};

module.exports = { deleteCourseId };
