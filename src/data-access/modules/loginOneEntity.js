const { handleError } = require("./errorHandler");
const { findUser } = require("../helpers/findUser");

/**
 * Retrieves a user entity by email for login.
 *
 * @param {Object} params - The parameters for retrieving a user entity.
 * @param {Sequelize.Model} params.model - The Sequelize model for the user entity.
 * @param {Object} params.cond - The condition to find the user entity.
 * @param {string[]} [params.attributes] - The attributes to include in the result.
 * @returns {Promise} A promise that resolves to the retrieved user entity.
 * @throws {NotFoundError} If the user entity is not found.
 */

const loginOneEntity = async (params) => {
    const { model, cond, attributes } = params;
    const findUserEmail = { model, cond, attributes };
    try {
        const user = await findUser(findUserEmail);
        return user;
    } catch (error) {
        handleError(error);
    }
};

module.exports = loginOneEntity;
