/**
 * Handles an error by sending an appropriate response with the error status and message.
 *
 * @param {object} res - The response object to send the error response.
 * @param {object} error - The error object to handle.
 */
const handleError = (res, error) => {
    res.status(error?.status || 500).send({
        status: "FAILED",
        error: error?.message || error,
    });
};

/**
 * Handles an authentication-related error by sending an appropriate response with the error status and message.
 *
 * @param {object} res - The response object to send the error response.
 * @param {object} error - The error object to handle.
 */
const authError = (res, error) => {
    res.status(error?.status || 500).send({
        auth: false,
        error: error?.message || error,
    });
};

module.exports = { handleError, authError };
