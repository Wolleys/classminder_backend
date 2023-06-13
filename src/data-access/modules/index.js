const { handleError, notFoundError } = require("./errorHandler");

const createNewEntity = async (model, newEntity) => {
    try {
        const createdEntity = await model.create(newEntity);
        return createdEntity;
    } catch (error) {
        handleError(error);
    }
};

const getAllEntities = async (model, attributes, order) => {
    try {
        const allEntities = await model.findAll({ order, attributes });
        return allEntities;
    } catch (error) {
        handleError(error);
    }
};

const getOneEntity = async (model, desc, entityId, cond, attributes) => {
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

const updateOneEntity = async (model, cond, updateData) => {
    try {
        await model.update({ ...updateData }, { where: cond });
    } catch (error) {
        handleError(error);
    }
};

const deleteOneEntity = async (model, desc, entityId, cond, attributes) => {
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

module.exports = {
    createNewEntity,
    getAllEntities,
    getOneEntity,
    updateOneEntity,
    deleteOneEntity,
};
