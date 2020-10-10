import Sequelize from 'sequelize';
import dbConfig from './config/mysql';
import User from './models/User';
import Comment from './models/Comment';
import Post from './models/Post';

const models = [User, Post, Comment];

const connection = new Sequelize(dbConfig);

models.map(model => model.init(connection));

Comment.associate(connection.models);
Post.associate(connection.models);


export default connection;