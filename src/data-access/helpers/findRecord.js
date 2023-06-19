const { handleError, notFoundError } = require("../modules/errorHandler");

/**
 * Finds a record in the database based on the specified conditions.
 *
 * @param {Object} props - The properties for finding a record.
 * @param {Object} props.model - The Sequelize model to query.
 * @param {string} props.desc - The description of the record to be used in the error message.
 * @param {string} props.entityId - The ID of the entity being searched for (used in the error message).
 * @param {Object} props.cond - The conditions to find the record.
 * @param {string[]} [props.attributes] - The attributes to retrieve from the record.
 * @returns {Promise} A promise that resolves to the found record if it exists, or throws a notFoundError.
 */

const findRecord = async (props) => {
    const { model, desc, entityId, cond, attributes } = props;
    try {
        const recordToFind = await model.findOne({ where: cond, attributes });
        if (!recordToFind) {
            notFoundError(desc, entityId);
        }
        return recordToFind;
    } catch (error) {
        handleError(error);
    }
};

module.exports = { findRecord };
