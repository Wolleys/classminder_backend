const { sign, verify } = require("jsonwebtoken");
const env = process.env;

const createToken = (atclaims, rtclaims) => {
    try {
        const accessToken = sign(atclaims, env.ACCESS_TOKEN_SECRET, {
            expiresIn: "10m",
        });

        const refreshToken = sign(rtclaims, env.REFRESH_TOKEN_SECRET, {
            expiresIn: "1d",
        });
        return { accessToken, refreshToken };
    } catch (error) {
        throw error;
    }
};

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers.authorization || req.headers.Authorization;
    if (!bearerHeader?.startsWith("Bearer ")) {
        return res
            .status(401)
            .send({ auth: false, message: "You are not authenticated!" });
    }
    const bearerToken = bearerHeader.split(" ")[1];
    verify(bearerToken, env.ACCESS_TOKEN_SECRET, (err, data) => {
        if (err) {
            return res.status(403).send({ auth: false, message: "Invalid token" });
        }
        req.user = data;
        next();
    });
};

module.exports = { createToken, verifyToken };
