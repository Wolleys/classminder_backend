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
                defaultValue: "Student",
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            admin_number: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            course_id: {
                type: DataTypes.JSON,
                allowNull: false,
                defaultValue: [],
                get() {
                    const courseIds = JSON.parse(this.getDataValue("course_id"));
                    return courseIds ? courseIds.map((id) => id.toString()) : [];
                },
                set(courseIds) {
                    this.setDataValue("course_id", JSON.stringify(courseIds));
                },
            },
            refresh_token: {
                type: DataTypes.JSON,
                allowNull: true,
                defaultValue: null,
                get() {
                    const tokens = JSON.parse(this.getDataValue("refresh_token"));
                    return tokens ? tokens.map((id) => id.toString()) : [];
                },
                set(tokens) {
                    this.setDataValue("refresh_token", JSON.stringify(tokens));
                },
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
