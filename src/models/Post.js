import { DataTypes, Model } from 'sequelize';


export default class Post extends Model {
  static init(connection) {
    super.init({
      content: DataTypes.STRING,
      title: DataTypes.STRING,
      subtitle: DataTypes.STRING
    }, { sequelize: connection });
    return this;
  };

  static associate(models) {
    this.hasMany(models.Comment, { foreignKey: 'user_id', as: 'comments' });
  };
};