import { NextRequest, NextResponse } from "next/server";
import { findCertificateByEmailAndLevel } from "@/lib/certificates";
import type { CertificationLevel } from "@/data/certification";

const VALID_LEVELS: CertificationLevel[] = ["foundation", "practitioner", "expert"];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");
    const level = searchParams.get("level");

    if (!email?.trim()) {
      return NextResponse.json(
        { error: "Informe o e-mail." },
        { status: 400 }
      );
    }
    if (!level || !VALID_LEVELS.includes(level as CertificationLevel)) {
      return NextResponse.json(
        { error: "Nível inválido." },
        { status: 400 }
      );
    }

    const cert = await findCertificateByEmailAndLevel(
      email.trim(),
      level as CertificationLevel
    );

    if (!cert) {
      return NextResponse.json({ alreadyCertified: false });
    }

    return NextResponse.json({
      alreadyCertified: true,
      certificate: {
        certificateId: cert.certificateId,
        participantName: cert.participantName,
        levelName: cert.levelName,
        issuedAt: cert.issuedAt,
      },
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Erro ao verificar certificação.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
