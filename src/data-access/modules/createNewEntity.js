const { handleError } = require("./errorHandler");

/**
 * Creates a new entity.
 *
 * @param {Object} params - The parameters for creating a new entity.
 * @param {Sequelize.Model} params.model - The Sequelize model for the entity.
 * @param {Object} params.newEntity - The data for the new entity.
 * @returns {Promise} A promise that resolves to the created entity.
 */

const createNewEntity = async (params) => {
    const { model, newEntity } = params;
    try {
        const createdEntity = await model.create(newEntity);
        return createdEntity;
    } catch (error) {
        handleError(error);
    }
};

module.exports = createNewEntity;
