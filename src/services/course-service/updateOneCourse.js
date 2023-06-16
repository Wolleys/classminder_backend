const { updateOneEntity } = require("../modules");
const courseData = require("../../data-access/course");

const updateOneCourse = (model, courseId, data) => {
    // Update one entity params
    const oneEntityParams = {
        model,
        entityId: courseId,
        updateData: data,
        dataAccess: courseData.updateOneCourse,
    };
    return updateOneEntity(oneEntityParams);
};

module.exports = { updateOneCourse };
