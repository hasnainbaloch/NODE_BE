import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const config = {
  //node
  PORT: process.env.PORT || 2000,
  NODE_ENV: process.env.NODE_ENV,

  // JWT
  SECRET_KEY: process.env.SECRET_KEY,

  // database
  DATABASE_URL: process.env.DATABASE_URL,
  DB_USERNAME: process.env.DATABASE_USER,
  DB_PASSWORD: process.env.DATABASE_PASSWORD,
  DB_HOST: process.env.DATABASE_HOST,
  DB_PORT: process.env.DATABASE_PORT,
  DB_NAME: process.env.DATABASE_NAME,
  DB_DIALECT: process.env.DATABASE_DIALECT,
};

export { config };
