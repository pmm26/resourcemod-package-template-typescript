import type { Config } from 'drizzle-kit';
export default {
  schema: './src/admin/db/schema.ts',
  out: './drizzle',
  driver: 'mysql2', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    host: "db.eliteportuguesa.pt",
    user: "cs2-test",
    database: "cs2-test",
    password: "12345678",
  },
} satisfies Config;