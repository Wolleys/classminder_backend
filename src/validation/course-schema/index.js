const yup = require("yup");

const courseSchema = yup.object({
    course_name: yup.string().required("Course name is required"),
    course_number: yup.string().required("Course number is required"),
});

module.exports = { courseSchema };
