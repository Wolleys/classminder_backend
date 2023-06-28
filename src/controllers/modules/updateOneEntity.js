const { handleError } = require("./errorHandler");

/**
 * Updates a single entity.
 *
 * @param {Object} params - The parameters for updating a single entity.
 * @param {Object} params.req - The request object.
 * @param {Object} params.res - The response object.
 * @param {string} params.idName - The name of the ID parameter in the request.
 * @param {Function} params.service - The service function for updating the entity.
 */

const updateOneEntity = async (params) => {
    const { req, res, idName, service } = params;
    const body = req.body;
    const model = req.models;
    const entityId = req.params[idName];

    try {
        const updatedEntity = await service(model, entityId, body);
        res
            .status(200)
            .send({ status: "OK", data: updatedEntity });
    } catch (error) {
        handleError(res, error);
    }
};

module.exports = updateOneEntity;
