import { DataTypes, Model } from 'sequelize';



export default class Comment extends Model {
  static init(connection) {
    super.init({
      content: DataTypes.STRING,
    }, { sequelize: connection });
    return this;
  };

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.Post, { foreignKey: 'post_id', as: 'post_comments' });
  };
};