const handleError = (error) => {
    const status = error.status || 500;
    const message = error.message || "Internal Server Error";
    throw { status, message };
};

const conflictError = (value) => {
    const status = 409;
    const message = `'${value}' has already been added`;
    throw { status, message };
};

const notFoundError = (desc, entityId) => {
    const status = 404;
    const message = `Can't find ${desc.toLowerCase()} with the id '${entityId}'`;
    throw { status, message };
};

module.exports = { handleError, notFoundError, conflictError };
