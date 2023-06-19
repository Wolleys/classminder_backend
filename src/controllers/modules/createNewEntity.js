const { handleError } = require("./errorHandler");

/**
 * Creates a new entity.
 *
 * @param {Object} params - The parameters for creating a new entity.
 * @param {Object} params.req - The request object.
 * @param {Object} params.res - The response object.
 * @param {Function} params.service - The service function for creating the entity.
 */

const createNewEntity = async (params) => {
    const { req, res, service } = params;
    const body = req.body;
    const model = req.models;

    try {
        const createdEntity = await service(model, body);
        res.status(201).send({ status: "OK", data: createdEntity });
    } catch (error) {
        handleError(res, error);
    }
};

module.exports = createNewEntity;
