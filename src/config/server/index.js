const { connect } = require("../db");
const env = process.env;
const PORT = env.PORT || 3300;

// Start server and connect to MySQL DB
const server = (app) => {
    try {
        app.listen(PORT, () => {
            console.log("Server: Started on port", PORT);
            setTimeout(connect, 1000);
        });
    } catch (error) {
        console.error(error);
        process.exit();
    }
};

module.exports = server;
