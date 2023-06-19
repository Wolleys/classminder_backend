const { handleError, conflictError } = require("../modules/errorHandler");

/**
 * Checks if a record already exists based on the given condition.
 * If the record exists, a conflict error is thrown.
 *
 * @param {Object} params - The parameters for checking if a record already exists.
 * @param {Object} params.model - The Sequelize model to query.
 * @param {Object} params.cond - The condition to search for the record.
 * @param {string} params.value - The value causing the conflict.
 * @param {string[]} params.attributes - The attributes to select from the record.
 * @returns {Promise} - The found record if it exists, otherwise null.
 * @throws {Error} - Throws a conflict error if the record already exists.
 */

const alreadyExists = async (params) => {
    const { model, cond, value, attributes } = params;
    try {
        const recordToCheck = await model.findOne({ where: cond, attributes });
        if (recordToCheck) {
            conflictError(value);
        }
        return recordToCheck;
    } catch (error) {
        handleError(error);
    }
};

module.exports = { alreadyExists };
