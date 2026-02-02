import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { findCertificateById } from "@/lib/certificates";
import CertificateView from "./CertificateView";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const cert = await findCertificateById(id);
  if (!cert || !cert.passed) {
    return { title: "Certificado não encontrado | XGH Academy" };
  }
  const title = `${cert.levelName} - ${cert.participantName} | XGH Academy`;
  const description = `${cert.participantName} concluiu com aprovação o exame ${cert.levelName}. ID: ${cert.certificateId}. Valide em XGH Academy.`;
  const base = process.env.NEXT_PUBLIC_BASE_URL;
  const url = base ? `${base}/certificado/${id}` : undefined;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
  };
}

export default async function CertificadoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cert = await findCertificateById(id);
  if (!cert || !cert.passed) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <CertificateView certificate={cert} certificateId={id} />
    </div>
  );
}
