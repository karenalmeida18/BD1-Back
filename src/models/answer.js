const { Model, DataTypes } = require('sequelize');

class Answer extends Model {
  static init(connection) {
    super.init({
      answer: DataTypes.STRING,
    }, {
      sequelize: connection,
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
    this.belongsTo(models.Messages, { foreignKey: 'message_id', as: 'messages' });
  }
}

module.exports = Answer;