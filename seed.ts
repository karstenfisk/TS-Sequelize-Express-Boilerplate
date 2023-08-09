import { db, User } from "./config";

// Example of seeding database with data.
const seed = async () => {
  try {
    await db.sync({ alter: true });
    await User.create({
      email: "gi",
      username: "gi",
      password: "gi",
    });
  } catch (err) {
    console.error(err);
  }
};

seed();
