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

const deleteChildId = async (params, childDesc) => {
    const { model, recDesc, recId, recCond, recAttrs, colName, idToDel } = params;
    try {
        const record = await findRecord(model, recDesc, recId, recCond, recAttrs);
        let columnValues = record.getDataValue(colName);
        columnValues = JSON.parse(columnValues) || [];

        if (!columnValues.includes(idToDel)) {
            notFoundError(childDesc, idToDel);
        }

        if (columnValues.length === 1) {
            throw { status: 400, message: "Field cannot remain empty" };
        }
        const updatedValues = columnValues.filter((id) => id !== idToDel);

        await record.update({ [colName]: updatedValues });
        return record;
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
    deleteChildId,
};
