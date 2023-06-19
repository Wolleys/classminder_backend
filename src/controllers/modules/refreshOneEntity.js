const { authError } = require("./errorHandler");

/**
 * Refreshes a user entity.
 *
 * @param {Object} params - The parameters for refreshing a user entity.
 * @param {Object} params.req - The request object.
 * @param {Object} params.res - The response object.
 * @param {Function} params.service - The service function for refreshing the user entity.
 */

const refreshOneEntity = async (params) => {
    const { req, res, service } = params;
    const model = req.models;
    const cookies = req.cookies;

    try {
        const accessToken = await service(model, cookies);
        res.status(200).send({ auth: true, token: accessToken });
    } catch (error) {
        authError(res, error);
    }
};

module.exports = refreshOneEntity;
