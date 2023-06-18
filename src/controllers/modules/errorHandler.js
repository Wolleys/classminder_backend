const handleError = (res, error) => {
    res.status(error?.status || 500).send({
        status: "FAILED",
        error: error?.message || error,
    });
};

const authError = (res, error) => {
    res.status(error?.status || 500).send({
        auth: false,
        error: error?.message || error,
    });
};

module.exports = { handleError, authError };
