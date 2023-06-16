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

const deleteChildId = async (model, parentId, childId, dataAccess) => {
    try {
        const deletedId = dataAccess(model, parentId, childId);
        return deletedId;
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
    deleteChildId,
};
