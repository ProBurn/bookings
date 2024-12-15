import { defineConfig } from "drizzle-kit"
import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' });

export default defineConfig({
  schema: "./src/drizzle/schema.ts",
  out: "./src/drizzle/migrations",
  dialect: "postgresql",
  strict: true,
  verbose: true,
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
})
