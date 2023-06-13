const express = require("express");
const app = express();
require("dotenv").config();
const env = process.env;

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
    console.log("SERVER: started on port", PORT);
});
