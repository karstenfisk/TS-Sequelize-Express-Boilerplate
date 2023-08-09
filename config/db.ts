import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const dbUrl = process.env.DB_URL;

if (!dbUrl) throw new Error("DB_URL must be defined");

// Using database url to connect to database with postgres.
export const db = new Sequelize(dbUrl, {
  dialect: "postgres",
  logging: false,
});

// Using database options to connect to database.
// export const db = new Sequelize({
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   dialect: "postgres",
//   logging: false,
// })
