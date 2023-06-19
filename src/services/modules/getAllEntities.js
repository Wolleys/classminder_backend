/**
 * Retrieves all entities.
 *
 * @param {Object} params - The parameters for retrieving all entities.
 * @param {Sequelize.Model} params.model - The Sequelize model for the entity.
 * @param {Function} params.dataAccess - The function to access the data layer and retrieve all entities.
 * @returns {Object[]} An array of all entities.
 * @throws {Error} If an error occurs while retrieving the entities.
 */

const getAllEntities = (params) => {
    const { model, dataAccess } = params;
    try {
        const allEntities = dataAccess(model);
        return allEntities;
    } catch (error) {
        throw error;
    }
};

module.exports = getAllEntities;
