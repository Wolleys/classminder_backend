const createNewEntity = (params) => {
    const { model, newEntity, dataAccess } = params;
    try {
        const createdEntity = dataAccess(model, newEntity);
        return createdEntity;
    } catch (error) {
        throw error;
    }
};

const getAllEntities = (params) => {
    const { model, dataAccess } = params;
    try {
        const allEntities = dataAccess(model);
        return allEntities;
    } catch (error) {
        throw error;
    }
};

const getOneEntity = (params) => {
    const { model, entityId, dataAccess } = params;
    try {
        const entity = dataAccess(model, entityId);
        return entity;
    } catch (error) {
        throw error;
    }
};

const updateOneEntity = (params) => {
    const { model, entityId, updateData, dataAccess } = params;
    try {
        const entity = dataAccess(model, entityId, updateData);
        return entity;
    } catch (error) {
        throw error;
    }
};

const deleteOneEntity = (params) => {
    const { model, entityId, dataAccess } = params;
    try {
        const entity = dataAccess(model, entityId);
        return entity;
    } catch (error) {
        throw error;
    }
};

const deleteChildEntity = (params) => {
    const { model, parentEntityId, childEntityId, dataAccess } = params;
    try {
        const deletedId = dataAccess(model, parentEntityId, childEntityId);
        return deletedId;
    } catch (error) {
        throw error;
    }
};

const loginOneEntity = (params) => {
    const { model, newEntity, dataAccess } = params;
    try {
        const createdEntity = dataAccess(model, newEntity);
        return createdEntity;
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
    deleteChildEntity,
    loginOneEntity,
};
