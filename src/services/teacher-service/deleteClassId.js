const { deleteChildId } = require("../modules");
const teacherData = require("../../data-access/teacher");

const deleteClassId = (model, parentId, childId) => {
    return deleteChildId(model, parentId, childId, teacherData.deleteClassId);
};

module.exports = { deleteClassId };
