const { studentModel } = require("./student");
const { classModel } = require("../class-model/class");
const { courseModel } = require("../course-model/course");

const studentAssocs = (sequelize) => {
    try {
        const Class = classModel(sequelize);
        const Course = courseModel(sequelize);
        const Student = studentModel(sequelize);

        // 1. Student belongs to Class (belongsTo) 1:1
        Student.belongsTo(Class, { foreignKey: "class_id" });

        // 2. Student belongs to Course (belongsTo) 1:1
        Student.belongsTo(Course, { foreignKey: "course_id" });

        return { Student };
    } catch (error) {
        throw error;
    }
};

module.exports = { studentAssocs };
