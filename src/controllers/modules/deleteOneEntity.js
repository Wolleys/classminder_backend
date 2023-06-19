const { handleError } = require("./errorHandler");

/**
 * Deletes a single entity.
 *
 * @param {Object} params - The parameters for deleting a single entity.
 * @param {Object} params.req - The request object.
 * @param {Object} params.res - The response object.
 * @param {string} params.idName - The name of the ID parameter in the request.
 * @param {Function} params.service - The service function for deleting the entity.
 */

const deleteOneEntity = async (params) => {
    const { req, res, idName, service } = params;
    const model = req.models;
    const entityId = req.params[idName];

    try {
        await service(model, entityId);
        res
            .status(200)
            .send({ status: "OK", message: "Record deleted successfully." });
    } catch (error) {
        handleError(res, error);
    }
};

module.exports = deleteOneEntity;
