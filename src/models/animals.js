const { Model, DataTypes } = require('sequelize');

class Animals extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
      species: DataTypes.STRING,
      race: DataTypes.STRING,
      reward: DataTypes.STRING,
      description: DataTypes.STRING,
    }, {
      sequelize: connection,
    });
  }
  
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
  }
}

module.exports = Animals;