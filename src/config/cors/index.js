const env = process.env;

// Return an array of all allowed origins
const allowedOrigins = env.ALLOWED_ORIGINS.split(",").map((origin) =>
    origin.trim()
);

// Configuring CORS options
const corsOptions = {
    credentials: true,
    origin: allowedOrigins,
};

module.exports = corsOptions;
