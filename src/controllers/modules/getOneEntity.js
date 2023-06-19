const { handleError } = require("./errorHandler");

/**
 * Retrieves a single entity.
 *
 * @param {Object} params - The parameters for retrieving a single entity.
 * @param {Object} params.req - The request object.
 * @param {Object} params.res - The response object.
 * @param {string} params.idName - The name of the ID parameter in the request.
 * @param {Function} params.service - The service function for retrieving the entity.
 */

const getOneEntity = async (params) => {
    const { req, res, idName, service } = params;
    const model = req.models;
    const entityId = req.params[idName];

    try {
        const entity = await service(model, entityId);
        res.status(200).send({ status: "OK", data: entity });
    } catch (error) {
        handleError(res, error);
    }
};

module.exports = getOneEntity;
