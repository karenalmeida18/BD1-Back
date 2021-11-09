const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(connection) {
    super.init({
      usp_code: DataTypes.INTEGER,
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      telephone: DataTypes.STRING,
      password: DataTypes.STRING,
    }, {
      sequelize: connection,
    });
  }
}

module.exports = User;