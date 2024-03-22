module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define(
    "Tasks",
    {
      id: {
        type: DataTypes.BIGINT(20),
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      estado: {
        type: DataTypes.TINYINT(4),
        defaultValue: 1,
      },
    },
    {
      tableName: "tasks",
      timestamps: false,
    }
  );

  return Tasks;
};
