const { DataTypes, Sequelize } = require("sequelize");

const courseModel = (sequelize) => {
    const Course = sequelize.define(
        "Course",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                unique: true,
            },
            course_name: {
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
            tableName: "course",
        }
    );

    return Course;
};

module.exports = { courseModel };
