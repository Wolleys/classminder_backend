const { authError } = require("./errorHandler");

/**
 * Logs in a user entity.
 *
 * @param {Object} params - The parameters for logging in a user entity.
 * @param {Object} params.req - The request object.
 * @param {Object} params.res - The response object.
 * @param {Function} params.service - The service function for logging in the user entity.
 */

const loginOneEntity = async (params) => {
    const { req, res, service } = params;
    const body = req.body;
    const model = req.models;

    try {
        const entity = await service(model, body);
        let options = {
            // secure: true,
            httpOnly: true,
            // sameSite: "None",
            maxAge: 10 * 60 * 1000, // Expires in 10min
        };

        res.cookie("jwt", entity.refreshToken, options); // Create secure cookie with refresh token
        res.status(200).send({ auth: true, token: entity.accessToken }); // Send access token to user
    } catch (error) {
        authError(res, error);
    }
};

module.exports = loginOneEntity;
