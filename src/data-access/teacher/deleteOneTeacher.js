const { deleteOneEntity } = require("../modules");

const deleteOneTeacher = (model, teacherId) => {
    const desc = "a teacher";
    const cond = { id: teacherId };
    const attrs = ["id"];

    return deleteOneEntity(model.Teacher, desc, teacherId, cond, attrs);
};

module.exports = { deleteOneTeacher };
