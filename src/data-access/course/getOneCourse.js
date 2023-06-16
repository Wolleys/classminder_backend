const { getOneEntity } = require("../modules");

const getOneCourse = (model, courseId) => {
    // Get one entity params
    const oneEntityParams = {
        desc: "a course",
        entityId: courseId,
        model: model.Course,
        cond: { id: courseId },
        attributes: ["id", "course_name", "slug"],
    };
    return getOneEntity(oneEntityParams);
};

module.exports = { getOneCourse };
