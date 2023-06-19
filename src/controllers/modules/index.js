const { handleError, authError } = require("./errorHandler");

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

const loginOneEntity = async (params) => {
    const { req, res, service } = params;
    const body = req.body;
    const model = req.models;

    try {
        const entity = await service(model, body);
        let options = {
            // secure: true,
            httpOnly: true,
            // sameSite: "None",
            maxAge: 20 * 60 * 1000, // Expires in 20min
        };

        res.cookie("jwt", entity.refreshToken, options); // Create secure cookie with refresh token
        res.status(200).send({ auth: true, token: entity.accessToken }); // Send access token to user
    } catch (error) {
        authError(res, error);
    }
};

const logoutOneEntity = async (params) => {
    const { req, res, service } = params;
    const model = req.models;
    const cookies = req.cookies;

    try {
        const entity = await service(model, cookies);
        let options = {
            // secure: true,
            httpOnly: true,
            sameSite: "None",
        };

        if (!entity) {
            res.clearCookie("jwt", options);
            res.status(200).send({ auth: false, message: "You are already logged out" });
        }

        res.clearCookie("jwt", options); // Delete the accessToken also on client
        res.status(200).send({ auth: false, message: "Logout successfully!" });
    } catch (error) {
        authError(res, error);
    }
};

module.exports = {
    createNewEntity,
    getAllEntities,
    getOneEntity,
    updateOneEntity,
    deleteOneEntity,
    deleteChildEntity,
    loginOneEntity,
    logoutOneEntity,
};
