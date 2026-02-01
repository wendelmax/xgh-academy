import type { CertificationLevel } from "@/data/certification";
import { getSql } from "./db";

export interface CertificateRecord {
  certificateId: string;
  participantName: string;
  participantEmail: string;
  participantId: string;
  level: CertificationLevel;
  levelName: string;
  score: number;
  totalQuestions: number;
  passed: boolean;
  issuedAt: string;
}

interface CertificateRow {
  certificate_id: string;
  participant_name: string;
  participant_email: string;
  participant_id: string;
  level: string;
  level_name: string;
  score: number;
  total_questions: number;
  passed: number | boolean;
  issued_at: string;
}

function rowToRecord(row: CertificateRow): CertificateRecord {
  return {
    certificateId: row.certificate_id,
    participantName: row.participant_name,
    participantEmail: row.participant_email,
    participantId: row.participant_id,
    level: row.level as CertificationLevel,
    levelName: row.level_name,
    score: row.score,
    totalQuestions: row.total_questions,
    passed: Boolean(row.passed),
    issuedAt: row.issued_at,
  };
}

export async function saveCertificate(record: CertificateRecord): Promise<void> {
  const sql = await getSql();
  await sql`
    INSERT INTO certificates (
      certificate_id, participant_name, participant_email, participant_id,
      level, level_name, score, total_questions, passed, issued_at
    ) VALUES (
      ${record.certificateId},
      ${record.participantName},
      ${record.participantEmail},
      ${record.participantId},
      ${record.level},
      ${record.levelName},
      ${record.score},
      ${record.totalQuestions},
      ${record.passed ? 1 : 0},
      ${record.issuedAt}
    )
    ON CONFLICT (certificate_id) DO NOTHING
  `;
}

export async function findCertificateById(
  certificateId: string
): Promise<CertificateRecord | undefined> {
  const sql = await getSql();
  const q = certificateId.trim().toLowerCase();
  const rows = await sql`
    SELECT * FROM certificates
    WHERE LOWER(certificate_id) = ${q}
  `;
  const row = rows[0] as CertificateRow | undefined;
  if (!row) return undefined;
  return rowToRecord(row);
}

export async function findCertificatesByParticipant(
  participantIdOrEmail: string
): Promise<CertificateRecord[]> {
  const sql = await getSql();
  const q = participantIdOrEmail.trim().toLowerCase();
  const like = `%${q}%`;
  const rows = await sql`
    SELECT * FROM certificates
    WHERE LOWER(participant_email) = ${q}
       OR LOWER(participant_id) = ${q}
       OR LOWER(participant_name) LIKE ${like}
  `;
  return (rows as CertificateRow[]).map(rowToRecord);
}

export async function hasCertificationForLevel(
  email: string,
  level: CertificateRecord["level"]
): Promise<boolean> {
  const sql = await getSql();
  const q = email.trim().toLowerCase();
  const rows = await sql`
    SELECT 1 FROM certificates
    WHERE LOWER(participant_email) = ${q}
      AND level = ${level}
      AND passed = 1
    LIMIT 1
  `;
  return rows.length > 0;
}

export async function findCertificateByEmailAndLevel(
  email: string,
  level: CertificateRecord["level"]
): Promise<CertificateRecord | undefined> {
  const sql = await getSql();
  const q = email.trim().toLowerCase();
  const rows = await sql`
    SELECT * FROM certificates
    WHERE LOWER(participant_email) = ${q}
      AND level = ${level}
      AND passed = 1
    ORDER BY issued_at DESC
    LIMIT 1
  `;
  const row = rows[0] as CertificateRow | undefined;
  if (!row) return undefined;
  return rowToRecord(row);
}

export async function getAllCertificates(): Promise<CertificateRecord[]> {
  const sql = await getSql();
  const rows = await sql`SELECT * FROM certificates`;
  return (rows as CertificateRow[]).map(rowToRecord);
}
