const { handleError, noUserError } = require("../modules/errorHandler");

/**
 * Finds a user record in the database based on the specified conditions.
 *
 * @param {Object} props - The properties for finding a user record.
 * @param {Object} props.model - The Sequelize model to query.
 * @param {Object} props.cond - The conditions to find the user record.
 * @param {string[]} [props.attributes] - The attributes to retrieve from the user record).
 * @returns {Promise} A promise that resolves to the found user record if it exists, or throws an error.
 */

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
