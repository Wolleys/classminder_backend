const { handleError } = require("./errorHandler");

/**
 * Retrieves all entities.
 *
 * @param {Object} params - The parameters for retrieving all entities.
 * @param {Object} params.req - The request object.
 * @param {Object} params.res - The response object.
 * @param {Function} params.service - The service function for retrieving all entities.
 */

const getAllEntities = async (params) => {
    const { req, res, service } = params;
    const model = req.models;

    try {
        const allEntities = await service(model);
        res.status(200).send({ status: "OK", data: allEntities });
    } catch (error) {
        handleError(res, error);
    }
};

module.exports = getAllEntities;
