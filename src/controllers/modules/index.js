const handleError = require("./errorHandler");

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

const updateOneEntity = async (params) => {
    const { req, res, idName, service } = params;
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

const deleteChildId = async (req, res, parentIdName, childIdName, service) => {
    const model = req.models;
    const childId = req.params[childIdName];
    const parentId = req.params[parentIdName];

    try {
        await service(model, parentId, childId);
        res
            .status(200)
            .json({ status: "OK", message: "Record deleted successfully." });
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
    deleteChildId,
};
