const { teacherModel } = require("./teacher");
const { classModel } = require("../class-model/class");
const { courseModel } = require("../course-model/course");

const teacherAssocs = (sequelize) => {
    try {
        const Class = classModel(sequelize);
        const Course = courseModel(sequelize);
        const Teacher = teacherModel(sequelize);

        // 1. Teacher belongs to Class (belongsTo) 1:1
        Teacher.belongsTo(Class, { foreignKey: "class_id" });

        // 2. Teacher belongs to Course (belongsTo) 1:1
        Teacher.belongsTo(Course, { foreignKey: "course_id" });

        return { Teacher };
    } catch (error) {
        throw error;
    }
};

module.exports = { teacherAssocs };
