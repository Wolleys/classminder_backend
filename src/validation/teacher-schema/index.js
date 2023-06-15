const yup = require("yup");

const teacherSchema = yup.object({
    teacher_name: yup.string().required("Teacher name is required"),
    teacher_age: yup
        .number()
        .positive("Must be more than 0")
        .integer("Must be an integer number")
        .min(18, "Must be at least 18 years")
        .required("Teacher age is requred"),
    service_number: yup.string().required("Service number is required"),
    course_id: yup
        .array()
        .min(1, "You must have at least one course")
        .required("Course is required"),
    class_id: yup
        .array()
        .min(1, "You must have at least one class")
        .required("Class is required"),
});

module.exports = { teacherSchema };
