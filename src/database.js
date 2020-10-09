import Sequelize from 'sequelize';
import mysqlConfig from './configs/mysqlConfig';

class Database {
  constructor() {
    this.mySql();
  };

  async mySql() {
    const mysqlConnection = new Sequelize(mysqlConfig);
  };
};


export default new Database();