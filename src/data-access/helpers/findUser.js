const { handleError, noUserError } = require("../modules/errorHandler");

const findUser = async (props) => {
    const { model, cond, attributes } = props;
    try {
        const user = await model.findOne({ where: cond, attributes });
        // if (!user) {
        //     noUserError();
        // }
        return user;
    } catch (error) {
        handleError(error);
    }
};

module.exports = { findUser };
