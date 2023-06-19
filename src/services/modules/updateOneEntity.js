/**
 * Updates a single entity.
 *
 * @param {Object} params - The parameters for updating a single entity.
 * @param {Sequelize.Model} params.model - The Sequelize model for the entity.
 * @param {string} params.entityId - The ID of the entity to update.
 * @param {Object} params.updateData - The data to update the entity.
 * @param {Function} params.dataAccess - The function to access the data layer and update the entity.
 * @returns {Object} The updated entity.
 * @throws {Error} If an error occurs while updating the entity.
 */

const updateOneEntity = (params) => {
    const { model, entityId, updateData, dataAccess } = params;
    try {
        const entity = dataAccess(model, entityId, updateData);
        return entity;
    } catch (error) {
        throw error;
    }
};

module.exports = updateOneEntity;
