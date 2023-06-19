/**
 * Handles an error by throwing an object with the appropriate status and message.
 *
 * @param {Error} error - The error object to handle.
 * @throws {object} An object with the status and message properties of the error.
 */
const handleError = (error) => {
    const status = error.status || 500;
    const message = error.message || "Internal Server Error";
    throw { status, message };
};

/**
 * Throws a conflict error with the specified value.
 *
 * @param {string} value - The value causing the conflict.
 * @throws {object} An object with the status and message properties of the conflict error.
 */
const conflictError = (value) => {
    const status = 409;
    const message = `'${value}' has already been added`;
    throw { status, message };
};

/**
 * Throws a not found error for the specified entity and ID.
 *
 * @param {string} desc - The description of the entity.
 * @param {string} entityId - The ID of the entity.
 * @throws {object} An object with the status and message properties of the not found error.
 */
const notFoundError = (desc, entityId) => {
    const status = 404;
    const message = `Can't find ${desc.toLowerCase()} with the id '${entityId}'`;
    throw { status, message };
};

/**
 * Throws a "user doesn't exist" error.
 *
 * @throws {object} An object with the status and message properties of the "user doesn't exist" error.
 */
const noUserError = () => {
    const status = 404;
    const message = "User doesn't exist";
    throw { status, message };
};

module.exports = { handleError, notFoundError, conflictError, noUserError };
