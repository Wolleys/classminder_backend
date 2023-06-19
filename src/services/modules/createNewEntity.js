/**
 * Creates a new entity.
 *
 * @param {Object} params - The parameters for creating a new entity.
 * @param {Sequelize.Model} params.model - The Sequelize model for the entity.
 * @param {Object} params.newEntity - The data for the new entity.
 * @param {Function} params.dataAccess - The function to access the data layer and create the entity.
 * @returns {Object} The created entity.
 * @throws {Error} If an error occurs while creating the entity.
 */

const createNewEntity = (params) => {
    const { model, newEntity, dataAccess } = params;
    try {
        const createdEntity = dataAccess(model, newEntity);
        return createdEntity;
    } catch (error) {
        throw error;
    }
};

module.exports = createNewEntity;
