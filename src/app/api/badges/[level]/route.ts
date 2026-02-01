import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

const VALID_LEVELS = ["foundation", "practitioner", "expert"];

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ level: string }> }
) {
  const { level } = await params;
  if (!VALID_LEVELS.includes(level)) {
    return NextResponse.json({ error: "Nível inválido." }, { status: 400 });
  }
  try {
    const svgPath = path.join(process.cwd(), "public", "badges", `${level}.svg`);
    const svg = await fs.readFile(svgPath, "utf-8");
    return new NextResponse(svg, {
      status: 200,
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Badge não encontrado." },
      { status: 404 }
    );
  }
}
