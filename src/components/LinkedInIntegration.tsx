"use client";

import { useState, useCallback, useEffect } from "react";

interface LinkedInIntegrationProps {
  credentialName: string;
  credentialUrl?: string;
  certificateId?: string;
}

const LINKEDIN_ADD_PROFILE = "https://www.linkedin.com/in/me/";

export default function LinkedInIntegration({
  credentialName,
  credentialUrl: credentialUrlProp,
  certificateId,
}: LinkedInIntegrationProps) {
  const [credentialUrl, setCredentialUrl] = useState(credentialUrlProp ?? "");
  const [showAddModal, setShowAddModal] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (credentialUrlProp) {
      setCredentialUrl(credentialUrlProp);
      return;
    }
    if (typeof window !== "undefined" && certificateId) {
      setCredentialUrl(`${window.location.origin}/certificado/${certificateId}`);
    }
  }, [credentialUrlProp, certificateId]);

  const handleCopyUrl = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(credentialUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }, [credentialUrl]);

  if (!credentialUrl) return null;

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center rounded-lg border border-[#0A66C2] px-4 py-2.5 text-sm font-medium text-[#0A66C2] hover:bg-[#0A66C2]/5 focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:ring-offset-2 dark:border-[#0A66C2] dark:text-[#0A66C2] dark:hover:bg-[#0A66C2]/10"
        >
          Adicionar ao perfil do LinkedIn
        </button>
      </div>

      {showAddModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="linkedin-modal-title"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowAddModal(false)}
            aria-hidden="true"
          />
          <div className="relative z-10 w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl dark:border-neutral-700 dark:bg-neutral-900">
            <h3
              id="linkedin-modal-title"
              className="text-lg font-semibold text-neutral-900 dark:text-white"
            >
              Adicionar ao perfil do LinkedIn
            </h3>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
              Para incluir esta certificação no seu perfil:
            </p>
            <ol className="mt-3 list-inside list-decimal space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li>Copie a URL da credencial abaixo.</li>
              <li>No LinkedIn, acesse Perfil e depois Adicionar seção.</li>
              <li>Escolha Licenças e certificações.</li>
              <li>Preencha: Nome = {credentialName}, Organização = XGH Academy, URL da credencial = (cole a URL copiada).</li>
              <li>Salve.</li>
            </ol>
            <div className="mt-4 flex flex-wrap gap-2">
              <input
                type="text"
                readOnly
                value={credentialUrl}
                className="flex-1 min-w-0 rounded-lg border border-neutral-300 bg-neutral-50 px-3 py-2 text-xs text-neutral-600 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
              />
              <button
                type="button"
                onClick={handleCopyUrl}
                className="shrink-0 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700 dark:bg-teal-600 dark:hover:bg-teal-500"
              >
                {copied ? "Copiado" : "Copiar URL"}
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={LINKEDIN_ADD_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg bg-[#0A66C2] px-4 py-2 text-sm font-medium text-white hover:bg-[#004182]"
              >
                Abrir perfil no LinkedIn
              </a>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
