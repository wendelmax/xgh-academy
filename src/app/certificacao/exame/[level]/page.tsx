import { notFound } from "next/navigation";
import { certificationLevels, type CertificationLevel } from "@/data/certification";
import ExameClient from "./ExameClient";

export async function generateStaticParams() {
  return certificationLevels.map((l) => ({ level: l.id }));
}

export default async function ExamePage({
  params,
}: {
  params: Promise<{ level: string }>;
}) {
  const { level } = await params;
  const valid = certificationLevels.some(
    (l) => l.id === (level as CertificationLevel)
  );
  if (!valid) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <ExameClient level={level as CertificationLevel} />
    </div>
  );
}
