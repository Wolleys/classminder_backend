const { findRecord } = require("../helpers/findRecord");
const { notFoundError, handleError } = require("./errorHandler");

/**
 * Deletes a child entity from a parent entity.
 *
 * @param {Object} params - The parameters for deleting a child entity.
 * @param {Object} params.model - The Sequelize model for the parent entity.
 * @param {string} params.desc - The description of the parent entity for error messages.
 * @param {Object} params.cond - The condition to find the parent entity.
 * @param {string[]} [params.attributes] - The attributes to include in the result.
 * @param {string} params.colName - The column name containing the child entity IDs.
 * @param {string} params.childEntityId - The ID of the child entity to delete.
 * @param {string} params.parentEntityId - The ID of the parent entity.
 * @returns {Promise} A promise that resolves when the child entity is deleted from the parent entity.
 * @throws {NotFoundError} If the child entity is not found.
 */

const deleteChildEntity = async (params, childEntityDesc) => {
    const { model, desc, cond, attributes, colName, childEntityId, parentEntityId } = params;
    try {
        const findParentEntityId = { cond, desc, model, attributes, entityId: parentEntityId };
        const record = await findRecord(findParentEntityId);
        let columnValues = record.getDataValue(colName);
        columnValues = JSON.parse(columnValues) || [];

        if (!columnValues.includes(childEntityId)) {
            notFoundError(childEntityDesc, childEntityId);
        }

        if (columnValues.length === 1) {
            throw { status: 400, message: "Field cannot remain empty" };
        }
        const updatedValues = columnValues.filter((id) => id !== childEntityId);

        await record.update({ [colName]: updatedValues });
        return record;
    } catch (error) {
        handleError(error);
    }
};

module.exports = deleteChildEntity;
