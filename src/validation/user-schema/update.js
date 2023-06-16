const yup = require("yup");

const updateUserSchema = yup.object({
    first_name: yup.string().required("Required"),
    middle_name: yup.string().required("Required"),
    last_name: yup.string().required("Required"),
    email: yup.string().email("Invalid email address").required("Required")
});

module.exports = { updateUserSchema };
