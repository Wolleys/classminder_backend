const { Sequelize } = require("sequelize");
const { setupModels } = require("../../models");

const env = process.env;
const sequelize = new Sequelize(
    `mysql://${env.DB_USER}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`
);

// Connect to MySQL DB and manage models
let models;
const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log("MySQL: Connection successfull");
        models = setupModels(sequelize);
        await sequelize.sync({ force: false });
        return models;
    } catch (err) {
        throw new Error("MySQL: Connection not successfull", err);
    }
};

const getModels = () => {
    return models;
};

module.exports = { connect, getModels, sequelize };
