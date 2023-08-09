"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbUrl = process.env.DB_URL;
if (!dbUrl)
    throw new Error("DB_URL must be defined");
// Using database url to connect to database with postgres.
exports.db = new sequelize_1.Sequelize(dbUrl, {
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
