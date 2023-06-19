/**
 * Retrieves a single entity.
 *
 * @param {Object} params - The parameters for retrieving a single entity.
 * @param {Sequelize.Model} params.model - The Sequelize model for the entity.
 * @param {string} params.entityId - The ID of the entity to retrieve.
 * @param {Function} params.dataAccess - The function to access the data layer and retrieve the entity.
 * @returns {Object} The retrieved entity.
 * @throws {Error} If an error occurs while retrieving the entity.
 */

const getOneEntity = (params) => {
    const { model, entityId, dataAccess } = params;
    try {
        const entity = dataAccess(model, entityId);
        return entity;
    } catch (error) {
        throw error;
    }
};

module.exports = getOneEntity;
