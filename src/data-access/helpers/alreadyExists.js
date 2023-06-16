const { handleError, conflictError } = require("../modules/errorHandler");

const alreadyExists = async (params) => {
    const { model, cond, value, attributes } = params;
    try {
        const recordToCheck = await model.findOne({ where: cond, attributes });
        if (recordToCheck) {
            conflictError(value);
        }
        return recordToCheck;
    } catch (error) {
        handleError(error);
    }
};

module.exports = { alreadyExists };
