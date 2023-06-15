const bcrypt = require("bcryptjs");

// Encrypt the supplied user password
const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (error) {
        throw error;
    }
};

// Validate the supplied user password
const validatePassword = async (password, dbPassword) => {
    try {
        const match = await bcrypt.compare(password, dbPassword);
        if (!match) {
            throw { status: 400, message: "Invalid credentials" };
        }
        return match;
    } catch (error) {
        throw error;
    }
};

module.exports = { hashPassword, validatePassword };
