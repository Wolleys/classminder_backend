const { findUser } = require("../helpers/findUser");
const { findRecord } = require("../helpers/findRecord");
const { handleError, notFoundError } = require("./errorHandler");

const createNewEntity = async (params) => {
    const { model, newEntity } = params;
    try {
        const createdEntity = await model.create(newEntity);
        return createdEntity;
    } catch (error) {
        handleError(error);
    }
};

const getAllEntities = async (params) => {
    const { model, attributes, order } = params;
    try {
        const allEntities = await model.findAll({ order, attributes });
        return allEntities;
    } catch (error) {
        handleError(error);
    }
};

const getOneEntity = async (params) => {
    const { model, desc, entityId, cond, attributes } = params;
    try {
        const entity = await model.findOne({ where: cond, attributes });
        if (!entity) {
            notFoundError(desc, entityId);
        }
        return entity;
    } catch (error) {
        handleError(error);
    }
};

const updateOneEntity = async (params) => {
    const { model, cond, updateData } = params;
    try {
        await model.update({ ...updateData }, { where: cond });
    } catch (error) {
        handleError(error);
    }
};

const deleteOneEntity = async (params) => {
    const { model, desc, entityId, cond, attributes } = params;
    try {
        const entity = await model.destroy({ where: cond, attributes });
        if (!entity) {
            notFoundError(desc, entityId);
        }
        return entity;
    } catch (error) {
        handleError(error);
    }
};

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

const loginOneEntity = async (params) => {
    const { model, cond, attributes } = params;
    const findUserEmail = { model, cond, attributes };
    try {
        const user = await findUser(findUserEmail);
        return user;
    } catch (error) {
        handleError(error);
    }
};

const logoutOneEntity = async (params) => {
    const { model, cond, attributes, cookies } = params;
    try {
        const verifyCookies = !cookies?.jwt;
        if (verifyCookies) {
            throw { status: 200, message: "You are logged out!" };
        }

        // Check if user has a valid refresh token cookie in the db
        const refreshToken = { model, cond, attributes };
        const user = await findUser(refreshToken);
        return user;
    } catch (error) {
        handleError(error);
    }
};

const refreshOneEntity = async (params) => {
    const { model, cond, attributes, cookies } = params;
    try {
        const verifyCookies = !cookies?.jwt;
        if (verifyCookies) {
            throw { status: 401, message: "You are not authenticated!" };
        }

        // Check if user has a valid refresh token cookie in the db
        const refreshToken = { model, cond, attributes };
        const user = await findUser(refreshToken);
        return user;
    } catch (error) {
        handleError(error);
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
    refreshOneEntity,
};
