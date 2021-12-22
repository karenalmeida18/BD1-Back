const { Model, DataTypes } = require('sequelize');

class User extends Model {
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
}

module.exports = User;