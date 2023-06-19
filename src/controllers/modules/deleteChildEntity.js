const { handleError } = require("./errorHandler");

/**
 * Deletes a child entity from a parent entity.
 *
 * @param {Object} params - The parameters for deleting a child entity.
 * @param {Object} params.req - The request object.
 * @param {Object} params.res - The response object.
 * @param {string} params.parentEntityId - The name of the parent entity ID parameter in the request.
 * @param {string} params.childEntityId - The name of the child entity ID parameter in the request.
 * @param {Function} params.service - The service function for deleting the child entity.
 */

const deleteChildEntity = async (params) => {
    const { req, res, parentEntityId, childEntityId, service } = params;
    const model = req.models;
    const childEntity = req.params[childEntityId];
    const parentEntity = req.params[parentEntityId];

    try {
        await service(model, parentEntity, childEntity);
        res
            .status(200)
            .json({ status: "OK", message: "Record deleted successfully." });
    } catch (error) {
        handleError(res, error);
    }
};

module.exports = deleteChildEntity;
