const slugify = require("slugify");
const { updateOneEntity } = require("../modules");
const courseData = require("../../data-access/course");

const updateOneCourse = (model, courseId, data) => {
    const update = {
        course_name: data.course_name.toLowerCase(),
        slug: slugify(data.course_name).toLowerCase(),
    };

    // Update one entity params
    const oneEntityParams = {
        model,
        entityId: courseId,
        updateData: update,
        dataAccess: courseData.updateOneCourse,
    };
    return updateOneEntity(oneEntityParams);
};

module.exports = { updateOneCourse };
