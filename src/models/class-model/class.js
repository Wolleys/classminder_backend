const { DataTypes, Sequelize } = require("sequelize");

const classModel = (sequelize) => {
    const Class = sequelize.define(
        "Class",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                unique: true,
            },
            class_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            slug: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            paranoid: true,
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at",
            tableName: "class",
        }
    );

    return Class;
};

module.exports = { classModel };
