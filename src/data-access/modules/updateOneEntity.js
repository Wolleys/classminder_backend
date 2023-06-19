const { handleError } = require("./errorHandler");

/**
 * Updates a single entity.
 *
 * @param {Object} params - The parameters for updating a single entity.
 * @param {Sequelize.Model} params.model - The Sequelize model for the entity.
 * @param {Object} params.cond - The condition to find the entity.
 * @param {Object} params.updateData - The data to update the entity.
 * @returns {Promise} A promise that resolves when the entity is updated.
 */

const updateOneEntity = async (params) => {
    const { model, cond, updateData } = params;
    try {
        await model.update({ ...updateData }, { where: cond });
    } catch (error) {
        handleError(error);
    }
};

module.exports = updateOneEntity;
