import { defineConfig } from "drizzle-kit"
import * as dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  // スキーマファイルのディレクトリ
  schema: "./drizzle/schema/schema.ts",

  // マイグレーションファイルの出力先
  out: "./drizzle/migrations",

  // 指定できるのはMySQL, PostgreSQL, SQLiteの3種類 
  dialect: "postgresql",

  // 接続するDBの情報
  dbCredentials: {
    // ssl接続をオフ
    ssl: false,
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 5432,
    database: process.env.DB_NAME!,
  },
});