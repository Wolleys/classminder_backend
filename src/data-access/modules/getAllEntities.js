const { handleError } = require("./errorHandler");

/**
 * Retrieves all entities.
 *
 * @param {Object} params - The parameters for retrieving all entities.
 * @param {Sequelize.Model} params.model - The Sequelize model for the entity.
 * @param {string[]} [params.attributes] - The attributes to include in the result.
 * @param {string[]} [params.order] - The order in which entities should be retrieved.
 * @returns {Promise} A promise that resolves to an array of all entities.
 */

const getAllEntities = async (params) => {
    const { model, attributes, order } = params;
    try {
        const allEntities = await model.findAll({ order, attributes });
        return allEntities;
    } catch (error) {
        handleError(error);
    }
};

module.exports = getAllEntities;
