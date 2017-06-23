module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("todo", {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 250]
      }
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Todo.belongsTo(models.user, {
          foreignKey: {
            allowNull: true
          }
        });
      }
    }
  });
  return Todo;
};