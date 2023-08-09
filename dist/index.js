"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    res.send("Typescript Sequelize Express Boilerplate");
});
db_1.db.sync()
    .then(() => {
    console.log("Database synchronized");
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
})
    .catch((err) => {
    console.error("Failed to synchronize database:", err);
});
