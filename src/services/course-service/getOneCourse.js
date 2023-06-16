const { getOneEntity } = require("../modules");
const courseData = require("../../data-access/course");

const getOneCourse = (model, courseId) => {
    // Get one entity params
    const oneEntityParams = {
        model,
        entityId: courseId,
        dataAccess: courseData.getOneCourse,
    };
    return getOneEntity(oneEntityParams);
};

module.exports = { getOneCourse };
