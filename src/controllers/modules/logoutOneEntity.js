const { authError } = require("./errorHandler");

/**
 * Logs out a user entity.
 *
 * @param {Object} params - The parameters for logging out a user entity.
 * @param {Object} params.req - The request object.
 * @param {Object} params.res - The response object.
 * @param {Function} params.service - The service function for logging out the user entity.
 */

const logoutOneEntity = async (params) => {
    const { req, res, service } = params;
    const model = req.models;
    const cookies = req.cookies;

    try {
        const entity = await service(model, cookies);
        let options = {
            // secure: true,
            httpOnly: true,
            sameSite: "None",
        };

        if (!entity) {
            res.clearCookie("jwt", options);
            res
                .status(200)
                .send({ auth: false, message: "You are already logged out" });
        }

        res.clearCookie("jwt", options); // Delete the accessToken also on client
        res.status(200).send({ auth: false, message: "Logout successfully!" });
    } catch (error) {
        authError(res, error);
    }
};

module.exports = logoutOneEntity;
