const { findRecord } = require("../helpers/findRecord");
const { updateOneEntity } = require("../modules");

const updateOneCourse = async (model, courseId, data) => {
    // Check if the given course ID exists
    const findCourseId = {
        desc: "a course",
        entityId: courseId,
        attributes: ["id"],
        model: model.Course,
        cond: { id: courseId },
    };
    await findRecord(findCourseId);

    // Update one entity params
    const oneEntityParams = {
        updateData: data,
        model: model.Course,
        cond: { id: courseId },
    };
    updateOneEntity(oneEntityParams);
};

module.exports = { updateOneCourse };
