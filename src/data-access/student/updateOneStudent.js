const { findRecord } = require("../helpers/findRecord");
const { updateOneEntity } = require("../modules");

const updateOneStudent = async (model, studentId, data) => {
    // Check if the given ID exists
    const studDesc = "a student";
    const studCond = { id: studentId };
    const studAttrs = ["id"];

    await findRecord(model.Student, studDesc, studentId, studCond, studAttrs);

    // Iterate over each course ID and check if it exists
    for (const courseId of data.course_id) {
        const cosDesc = "a course";
        const cosAttrs = ["id"];
        const cosCond = { id: courseId };

        await findRecord(model.Course, cosDesc, courseId, cosCond, cosAttrs);
    }
    updateOneEntity(model.Student, studCond, data);
};

module.exports = { updateOneStudent };
