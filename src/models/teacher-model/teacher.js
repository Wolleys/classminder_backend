const { DataTypes, Sequelize } = require("sequelize");

const teacherModel = (sequelize) => {
    const Teacher = sequelize.define(
        "Teacher",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                unique: true,
            },
            teacher_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            teacher_age: {
                type: DataTypes.INTEGER,
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
            tableName: "teacher",
        }
    );

    return Teacher;
};

module.exports = { teacherModel };
