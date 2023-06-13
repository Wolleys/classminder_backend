const validateSchema = (schema) => async (req, res, next) => {
    const body = req.body;
    try {
        await schema.validate(body, { abortEarly: false });
        next();
    } catch (validationError) {
        const errors = {};
        validationError.inner.forEach((error) => {
            errors[error.path] = error.message;
        });
        res.status(400).send({ status: "FAILED", error: errors });
    }
};

module.exports = { validateSchema };
