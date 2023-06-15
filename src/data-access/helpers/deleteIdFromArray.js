const { findRecord } = require("./findRecord");
const { handleError, notFoundError } = require("../modules/errorHandler");

const deleteIdFromArray = async (params) => {
    const { model, recDesc, recId, recCond, recAttrs, colName, idToDel } = params;
    try {
        // Find the record by ID
        const record = await findRecord(model, recDesc, recId, recCond, recAttrs);

        // Get the current values of the column
        let columnValues = record.getDataValue(colName);

        // Parse the JSON string into an array
        columnValues = JSON.parse(columnValues) || [];

        // Check if idToDelete is present in columnValues
        if (!columnValues.includes(idToDel)) {
            notFoundError("an item", idToDel);
        }

        // Check if the length of the column values is 1
        if (columnValues.length === 1) {
            throw { status: 400, message: "Field cannot remain empty" };
        }

        // Remove the specified ID from the column values
        const updatedValues = columnValues.filter((id) => id !== idToDel);

        // Update the record with the modified column values
        await record.update({ [colName]: updatedValues });
        return record;
    } catch (error) {
        handleError(error);
    }
};

module.exports = { deleteIdFromArray };
