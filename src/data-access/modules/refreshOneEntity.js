const { handleError } = require("./errorHandler");
const { findUser } = require("../helpers/findUser");

/**
 * Refreshes a user's refresh token.
 *
 * @param {Object} params - The parameters for refreshing a user entity.
 * @param {Sequelize.Model} params.model - The Sequelize model for the user entity.
 * @param {Object} params.cond - The condition to find the user entity.
 * @param {string[]} [params.attributes] - The attributes to include in the result.
 * @param {Object} params.cookies - The cookies object from the request.
 * @returns {Promise} A promise that resolves to the refreshed user entity.
 * @throws {NotFoundError} If the user entity is not found.
 */

const refreshOneEntity = async (params) => {
    const { model, cond, attributes, cookies } = params;
    try {
        const verifyCookies = !cookies?.jwt;
        if (verifyCookies) {
            throw { status: 401, message: "You are not authenticated!" };
        }

        // Check if user has a valid refresh token cookie in the db
        const refreshToken = { model, cond, attributes };
        const user = await findUser(refreshToken);
        return user;
    } catch (error) {
        handleError(error);
    }
};

module.exports = refreshOneEntity;
