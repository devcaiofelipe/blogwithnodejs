import { DataTypes, Model } from 'sequelize';


export default class User extends Model {
  static init(connection) {
    super.init({
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    }, { sequelize: connection });
    return this;
  };
};


