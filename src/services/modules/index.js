const createNewEntity = (model, newEntity, dataAccess) => {
    try {
        const createdEntity = dataAccess(model, newEntity);
        return createdEntity;
    } catch (error) {
        throw error;
    }
};

const getAllEntities = (model, dataAccess) => {
    try {
        const allEntities = dataAccess(model);
        return allEntities;
    } catch (error) {
        throw error;
    }
};

const getOneEntity = (model, entityId, dataAccess) => {
    try {
        const entity = dataAccess(model, entityId);
        return entity;
    } catch (error) {
        throw error;
    }
};

const updateOneEntity = (model, entityId, updateData, dataAccess) => {
    try {
        const entity = dataAccess(model, entityId, updateData);
        return entity;
    } catch (error) {
        throw error;
    }
};

const deleteOneEntity = async (model, entityId, dataAccess) => {
    try {
        const entity = dataAccess(model, entityId);
        return entity;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createNewEntity,
    getAllEntities,
    getOneEntity,
    updateOneEntity,
    deleteOneEntity,
};
