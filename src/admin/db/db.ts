import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

// init mysql2 Pool or Client
export const poolConnection = mysql.createPool({
  host: "db.eliteportuguesa.pt",
  user: "cs2-test",
  database: "cs2-test",
  password: "12345678",
});

export const db = drizzle(poolConnection, { schema, mode: "default" });
