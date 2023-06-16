const yup = require("yup");

const classSchema = yup.object({
    class_name: yup.string().required("Class name is required"),
    stream: yup.string().required("Stream name is required"),
});

module.exports = { classSchema };
