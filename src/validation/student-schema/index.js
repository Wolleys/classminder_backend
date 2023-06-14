const yup = require("yup");

const studentSchema = yup.object({
    student_name: yup.string().required("Student name is required"),
    student_age: yup
        .number()
        .positive("Must be more than 0")
        .integer("Must be an integer number")
        .min(6, "Must be at least 6 years")
        .required("Student age is requred"),
    admin_number: yup.string().required("Admin number is required"),
    course_id: yup
        .array()
        .min(1, "You must have at least one course")
        .required("Course is required"),
    class_id: yup.string().required("Class is required"),
});

module.exports = { studentSchema };
