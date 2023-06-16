const { deleteOneEntity } = require("../modules");
const courseData = require("../../data-access/course");

const deleteOneCourse = (model, courseId) => {
    // Delete one entity params
    const oneEntityParams = {
        model,
        entityId: courseId,
        dataAccess: courseData.deleteOneCourse,
    };
    return deleteOneEntity(oneEntityParams);
};

module.exports = { deleteOneCourse };
