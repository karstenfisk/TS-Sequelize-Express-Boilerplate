import {
  Model,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "sequelize";
import { db } from "../db";

// Example of model creation.
// For more detailed information visit: https://sequelize.org/docs/v6/other-topics/typescript/

export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  public id!: CreationOptional<number>;
  public email!: string;
  public username!: string;
  public password!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    sequelize: db,
    tableName: "users",
  }
);
