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
            service_number: {
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
