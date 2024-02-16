import { migrate } from "drizzle-orm/mysql2/migrator";
import { db, poolConnection } from "./db";

const migrateFunc = async () => {
  // This will run migrations on the database, skipping the ones already applied
  await migrate(db, { migrationsFolder: "./drizzle" });
  // Don't forget to close the connection, otherwise the script will hang
  await poolConnection.end();
  console.log("Done");
};

migrateFunc();
