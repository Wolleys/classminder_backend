const { classModel } = require("./class");
const { courseModel } = require("../course-model/course");
const { studentModel } = require("../student-model/student");

const classAssocs = (sequelize) => {
    try {
        const Class = classModel(sequelize);
        const Course = courseModel(sequelize);
        const Student = studentModel(sequelize);

        // 1. Class has many Courses (hasMany) 1:n
        Class.hasMany(Course, { onDelete: "CASCADE", foreignKey: "class_id" });

        // 2. Class has many Students (hasMany) 1:n
        Class.hasMany(Student, { onDelete: "CASCADE", foreignKey: "class_id" });

        return { Class };
    } catch (error) {
        throw error;
    }
};

module.exports = { classAssocs };
