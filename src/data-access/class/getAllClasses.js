const { getAllEntities } = require("../modules");

const getAllClasses = (model) => {
    const order = [["created_at", "DESC"]];
    const attrs = ["id", "class_name", "slug"];

    return getAllEntities(model.Class, attrs, order);
};

module.exports = { getAllClasses };
