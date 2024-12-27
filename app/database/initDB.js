import { DataTypes, Sequelize } from "sequelize";
import loadUserModel from "./models/usersModel.js";
import { config } from "../config/env.js";

const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USERNAME,
  config.DB_PASSWORD,
  {
    host: config.DB_HOST,
    dialect: config.DB_DIALECT,
    logging: console.log,
  }
);

const UserModel = loadUserModel(sequelize, DataTypes);

const models = { UserModel };

const asserDataBaseConnection = async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log(error);
  }
};

export { sequelize, models, asserDataBaseConnection };
