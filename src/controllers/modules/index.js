const handleError = require("./errorHandler");

const createNewEntity = async (req, res, service) => {
    const body = req.body;
    const model = req.models;

    try {
        const createdEntity = await service(model, body);
        res.status(201).send({ status: "OK", data: createdEntity });
    } catch (error) {
        handleError(res, error);
    }
};

const getAllEntities = async (req, res, service) => {
    const model = req.models;

    try {
        const allEntities = await service(model);
        res.status(200).send({ status: "OK", data: allEntities });
    } catch (error) {
        handleError(res, error);
    }
};

const getOneEntity = async (req, res, idName, service) => {
    const model = req.models;
    const entityId = req.params[idName];

    try {
        const entity = await service(model, entityId);
        res.status(200).send({ status: "OK", data: entity });
    } catch (error) {
        handleError(res, error);
    }
};

const updateOneEntity = async (req, res, idName, service) => {
    const body = req.body;
    const model = req.models;
    const entityId = req.params[idName];

    try {
        await service(model, entityId, body);
        res
            .status(200)
            .send({ status: "OK", message: "Record updated successfully." });
    } catch (error) {
        handleError(res, error);
    }
};

const deleteOneEntity = async (req, res, idName, service) => {
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

module.exports = {
    createNewEntity,
    getAllEntities,
    getOneEntity,
    updateOneEntity,
    deleteOneEntity,
};
