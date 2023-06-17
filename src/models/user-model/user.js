const { DataTypes, Sequelize } = require("sequelize");

const userModel = (sequelize) => {
    const User = sequelize.define(
        "User",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                unique: true,
            },
            first_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            middle_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            role: {
                type: DataTypes.STRING,
                defaultValue: "Admin",
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            refresh_token: {
                type: DataTypes.JSON,
                allowNull: true,
                defaultValue: null,
                get() {
                    const tokens = this.getDataValue("refresh_token");
                    return tokens ? tokens.map((id) => id.toString()) : [];
                },
                set(tokens) {
                    this.setDataValue("refresh_token", tokens);
                },
            },
        },
        {
            paranoid: true,
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at",
            tableName: "user",
        }
    );

    return User;
};

module.exports = { userModel };
