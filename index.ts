import express from "express";
import { db } from "./config/db";
import { Request, Response } from "express";

import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Typescript Sequelize Express Boilerplate");
});

db.sync()
  .then(() => {
    console.log("Database synchronized");
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to synchronize database:", err);
  });
