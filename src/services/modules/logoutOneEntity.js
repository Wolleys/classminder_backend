/**
 * Logs out a user entity.
 *
 * @param {Object} params - The parameters for logging out a user entity.
 * @param {Sequelize.Model} params.model - The Sequelize model for the user entity.
 * @param {Object} params.cookies - The cookies object from the request.
 * @param {Function} params.dataAccess - The function to access the data layer and log out the user entity.
 * @returns {Object} The logged out user entity.
 * @throws {Error} If an error occurs while logging out the user entity.
 */

const logoutOneEntity = (params) => {
    const { model, cookies, dataAccess } = params;
    try {
        const entity = dataAccess(model, cookies);
        return entity;
    } catch (error) {
        throw error;
    }
};

module.exports = logoutOneEntity;
