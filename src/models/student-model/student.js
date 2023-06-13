const { DataTypes, Sequelize } = require("sequelize");

const studentModel = (sequelize) => {
    const Student = sequelize.define(
        "Student",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                unique: true,
            },
            student_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            student_age: {
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
            tableName: "student",
        }
    );

    return Student;
};

module.exports = { studentModel };