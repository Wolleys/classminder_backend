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
                defaultValue: "Teacher",
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            service_number: {
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
            class_id: {
                type: DataTypes.JSON,
                allowNull: false,
                defaultValue: [],
                get() {
                    const classIds = JSON.parse(this.getDataValue("class_id"));
                    return classIds ? classIds.map((id) => id.toString()) : [];
                },
                set(classIds) {
                    this.setDataValue("class_id", JSON.stringify(classIds));
                },
            },
            refresh_token: {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: [],
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
            tableName: "teacher",
        }
    );

    return Teacher;
};

module.exports = { teacherModel };
