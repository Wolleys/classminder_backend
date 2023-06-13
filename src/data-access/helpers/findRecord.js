const { handleError, notFoundError } = require("../modules/errorHandler");

const findRecord = async (model, desc, entityId, cond, attributes) => {
    try {
        const recordToFind = await model.findOne({ where: cond, attributes });
        if (!recordToFind) {
            notFoundError(desc, entityId);
        }
        return recordToFind;
    } catch (error) {
        handleError(error);
    }
};

module.exports = { findRecord };
