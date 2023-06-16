const { userModel } = require("./user");

const userAssocs = (sequelize) => {
    try {
        const User = userModel(sequelize);

        return { User };
    } catch (error) {
        throw error;
    }
};

module.exports = { userAssocs };
