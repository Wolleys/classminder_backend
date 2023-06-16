const yup = require("yup");

const userSchema = yup.object({
    first_name: yup.string().required("Required"),
    middle_name: yup.string().required("Required"),
    last_name: yup.string().required("Required"),
    email: yup.string().email("Invalid email address").required("Required"),
    password: yup.string().min(5).max(15).required("Required"),
    confirm_password: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords do not match"),
});

module.exports = { userSchema };
