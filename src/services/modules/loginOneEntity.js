/**
 * Retrieves a user entity by email for login.
 *
 * @param {Object} params - The parameters for retrieving a user entity.
 * @param {Sequelize.Model} params.model - The Sequelize model for the user entity.
 * @param {Object} params.newEntity - The data for the user entity.
 * @param {Function} params.dataAccess - The function to access the data layer and retrieve the user entity.
 * @returns {Object} The retrieved user entity.
 * @throws {Error} If an error occurs while retrieving the user entity.
 */

const loginOneEntity = (params) => {
    const { model, newEntity, dataAccess } = params;
    try {
        const entity = dataAccess(model, newEntity);
        return entity;
    } catch (error) {
        throw error;
    }
};

module.exports = loginOneEntity;
