/**
 * Deletes a child entity from a parent entity.
 *
 * @param {Object} params - The parameters for deleting a child entity.
 * @param {Sequelize.Model} params.model - The Sequelize model for the parent entity.
 * @param {string} params.parentEntityId - The ID of the parent entity.
 * @param {string} params.childEntityId - The ID of the child entity to delete.
 * @param {Function} params.dataAccess - The function to access the data layer and delete the child entity.
 * @returns {string} The ID of the deleted child entity.
 * @throws {Error} If an error occurs while deleting the child entity.
 */

const deleteChildEntity = (params) => {
    const { model, parentEntityId, childEntityId, dataAccess } = params;
    try {
        const deletedId = dataAccess(model, parentEntityId, childEntityId);
        return deletedId;
    } catch (error) {
        throw error;
    }
};

module.exports = deleteChildEntity;
