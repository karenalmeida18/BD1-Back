const { Model, DataTypes } = require('sequelize');

class Messages extends Model {
  static init(connection) {
    super.init({
      message: DataTypes.STRING,
      date: DataTypes.DATE,
    }, {
      sequelize: connection,
    });
  }
  
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
    this.belongsTo(models.Animals, { foreignKey: 'animal_id', as: 'animals'});
    this.hasMany(models.Answer, { foreignKey: 'message_id', as: 'answers' });
  }
}

module.exports = Messages;