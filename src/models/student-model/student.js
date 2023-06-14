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
            admin_number: {
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
