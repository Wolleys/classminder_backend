/**
 * Deletes a single entity.
 *
 * @param {Object} params - The parameters for deleting a single entity.
 * @param {Sequelize.Model} params.model - The Sequelize model for the entity.
 * @param {string} params.entityId - The ID of the entity to delete.
 * @param {Function} params.dataAccess - The function to access the data layer and delete the entity.
 * @returns {Object} The deleted entity.
 * @throws {Error} If an error occurs while deleting the entity.
 */

const deleteOneEntity = (params) => {
    const { model, entityId, dataAccess } = params;
    try {
        const entity = dataAccess(model, entityId);
        return entity;
    } catch (error) {
        throw error;
    }
};

module.exports = deleteOneEntity;
