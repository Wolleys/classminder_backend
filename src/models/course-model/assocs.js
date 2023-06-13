const { courseModel } = require("./course");
const { classModel } = require("../class-model/class");
const { studentModel } = require("../student-model/student");

const courseAssocs = (sequelize) => {
    try {
        const Class = classModel(sequelize);
        const Course = courseModel(sequelize);
        const Student = studentModel(sequelize);

        // 1. Course belongs to Class (belongsTo) 1:1
        Course.belongsTo(Class, { foreignKey: "class_id" });

        // 2. Course has many Students (hasMany) 1:n
        Course.hasMany(Student, { foreignKey: "course_id" });

        return { Course };
    } catch (error) {
        throw error;
    }
};

module.exports = { courseAssocs };
