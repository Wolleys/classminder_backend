const { userAssocs } = require("./user-model/assocs");
const { classAssocs } = require("./class-model/assocs");
const { courseAssocs } = require("./course-model/assocs");
const { studentAssocs } = require("./student-model/assocs");
const { teacherAssocs } = require("./teacher-model/assocs");

const setupModels = (sequelize) => {
    try {
        const User = userAssocs(sequelize).User;
        const Class = classAssocs(sequelize).Class;
        const Course = courseAssocs(sequelize).Course;
        const Student = studentAssocs(sequelize).Student;
        const Teacher = teacherAssocs(sequelize).Teacher;

        return { User, Class, Course, Student, Teacher };
    } catch (err) {
        throw err;
    }
};

module.exports = { setupModels };
