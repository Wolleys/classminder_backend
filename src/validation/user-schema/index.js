const yup = require("yup");

const userSchema = yup.object({
    first_name: yup.string().required("First name is required"),
    middle_name: yup.string().required("Middle name is required"),
    last_name: yup.string().required("Last name is required"),
    email: yup
        .string()
        .email("Invalid email address")
        .required("Email is required"),
    password: yup.string().min(5).max(15).required("Password is required"),
    confirm_password: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords do not match"),
});

module.exports = { userSchema };
