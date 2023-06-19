const { notFoundError, handleError } = require("./errorHandler");

/**
 * Retrieves a single entity.
 *
 * @param {Object} params - The parameters for retrieving a single entity.
 * @param {Sequelize.Model} params.model - The Sequelize model for the entity.
 * @param {string} params.desc - The description of the entity for error messages.
 * @param {string} params.entityId - The ID of the entity.
 * @param {Object} params.cond - The condition to find the entity.
 * @param {string[]} [params.attributes] - The attributes to include in the result.
 * @returns {Promise} A promise that resolves to the retrieved entity.
 * @throws {NotFoundError} If the entity is not found.
 */

const getOneEntity = async (params) => {
    const { model, desc, entityId, cond, attributes } = params;
    try {
        const entity = await model.findOne({ where: cond, attributes });
        if (!entity) {
            notFoundError(desc, entityId);
        }
        return entity;
    } catch (error) {
        handleError(error);
    }
};

module.exports = getOneEntity;
