const { handleError, notFoundError } = require("../modules/errorHandler");

const findRecord = async (props) => {
    const { model, desc, entityId, cond, attributes } = props;
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
