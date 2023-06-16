const { deleteOneEntity } = require("../modules");

const deleteOneCourse = (model, courseId) => {
    // Delete one entity params
    const oneEntityParams = {
        desc: "a course",
        entityId: courseId,
        attributes: ["id"],
        model: model.Course,
        cond: { id: courseId },
    };
    return deleteOneEntity(oneEntityParams);
};

module.exports = { deleteOneCourse };
