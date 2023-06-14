const { deleteOneEntity } = require("../modules");

const deleteOneStudent = (model, studentId) => {
    const desc = "a student";
    const cond = { id: studentId };
    const attrs = ["id"];

    return deleteOneEntity(model.Student, desc, studentId, cond, attrs);
};

module.exports = { deleteOneStudent };
