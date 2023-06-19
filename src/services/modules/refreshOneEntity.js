/**
 * Refreshes a user's refresh token.
 *
 * @param {Object} params - The parameters for refreshing a user entity.
 * @param {Sequelize.Model} params.model - The Sequelize model for the user entity.
 * @param {Object} params.cookies - The cookies object from the request.
 * @param {Function} params.dataAccess - The function to access the data layer and refresh the user entity.
 * @returns {Object} The refreshed user entity.
 * @throws {Error} If an error occurs while refreshing the user entity.
 */

const refreshOneEntity = (params) => {
    const { model, cookies, dataAccess } = params;
    try {
        const entity = dataAccess(model, cookies);
        return entity;
    } catch (error) {
        throw error;
    }
};

module.exports = refreshOneEntity;
