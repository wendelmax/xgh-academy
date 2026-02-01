import { neon } from "@neondatabase/serverless";

const connectionString =
  process.env.DATABASE_URL ?? process.env.POSTGRES_URL ?? null;
const sql = connectionString ? neon(connectionString) : null;

let schemaPromise: Promise<void> | null = null;

async function ensureSchema(): Promise<void> {
  if (!sql) return;
  if (schemaPromise) return schemaPromise;
  schemaPromise = (async () => {
    await sql`
      CREATE TABLE IF NOT EXISTS certificates (
        certificate_id TEXT PRIMARY KEY,
        participant_name TEXT NOT NULL,
        participant_email TEXT NOT NULL,
        participant_id TEXT NOT NULL,
        level TEXT NOT NULL,
        level_name TEXT NOT NULL,
        score INTEGER NOT NULL,
        total_questions INTEGER NOT NULL,
        passed INTEGER NOT NULL,
        issued_at TEXT NOT NULL
      )
    `;
    await sql`
      CREATE INDEX IF NOT EXISTS idx_certificates_email
      ON certificates(participant_email)
    `;
    await sql`
      CREATE INDEX IF NOT EXISTS idx_certificates_participant_id
      ON certificates(participant_id)
    `;
  })();
  return schemaPromise;
}

export async function getSql() {
  if (!sql)
    throw new Error(
      "DATABASE_URL or POSTGRES_URL must be set in the environment."
    );
  await ensureSchema();
  return sql;
}
