import { NextRequest, NextResponse } from "next/server";
import {
  certificationLevels,
  examQuestions,
  type CertificationLevel,
} from "@/data/certification";
import { saveCertificate, hasCertificationForLevel } from "@/lib/certificates";

function generateCertificateId(): string {
  const prefix = "XGH";
  const segment = () =>
    Math.random().toString(36).replace(/[^a-z0-9]/g, "").slice(0, 6).toUpperCase();
  return `${prefix}-${segment()}-${segment()}-${segment()}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      level,
      participantName,
      participantEmail,
      answers,
    }: {
      level: CertificationLevel;
      participantName: string;
      participantEmail: string;
      answers: Record<string, number>;
    } = body;

    if (
      !level ||
      !participantName?.trim() ||
      !participantEmail?.trim() ||
      typeof answers !== "object"
    ) {
      return NextResponse.json(
        { error: "level, participantName, participantEmail e answers são obrigatórios." },
        { status: 400 }
      );
    }

    const levelInfo = certificationLevels.find((l) => l.id === level);
    if (!levelInfo) {
      return NextResponse.json({ error: "Nível inválido." }, { status: 400 });
    }

    const emailNorm = participantEmail.trim().toLowerCase();
    if (await hasCertificationForLevel(emailNorm, level)) {
      return NextResponse.json(
        { error: "Você já possui certificação neste nível. Não é possível certificar-se novamente." },
        { status: 409 }
      );
    }

    const questionIds = Object.keys(answers);
    let correct = 0;
    let total = 0;
    for (const qid of questionIds) {
      const q = examQuestions.find((x) => x.id === qid && x.level === level);
      if (!q) continue;
      total++;
      if (answers[qid] === q.correctIndex) correct++;
    }
    const score = total > 0 ? Math.round((correct / total) * 100) : 0;
    const passed = score >= levelInfo.minScore;

    const certificateId = generateCertificateId();
    const participantId = participantEmail.trim().toLowerCase().replace(/\s+/g, ".");

    const record = {
      certificateId,
      participantName: participantName.trim(),
      participantEmail: participantEmail.trim(),
      participantId,
      level,
      levelName: levelInfo.name,
      score,
      totalQuestions: total,
      passed,
      issuedAt: new Date().toISOString(),
    };

    await saveCertificate(record);

    return NextResponse.json({
      passed,
      score,
      totalQuestions: total,
      minScore: levelInfo.minScore,
      certificate: passed
        ? {
            certificateId: record.certificateId,
            participantName: record.participantName,
            levelName: record.levelName,
            issuedAt: record.issuedAt,
          }
        : null,
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Erro ao processar exame.";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
