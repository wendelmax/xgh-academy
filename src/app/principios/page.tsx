import { principios } from "@/data/principios";
import Link from "next/link";

export const metadata = {
  title: "Os 22 Princípios do XGH | XGH Academy",
  description:
    "Lista completa dos 22 princípios do Extreme Go Horse com contraste às práticas recomendadas.",
};

export default function PrincipiosPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
        Os 22 Princípios do XGH
      </h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">
        Cada princípio descreve uma prática XGH. Em contraste, indicamos o
        anti-padrão recomendado para não repetir o erro e manter produtividade
        sustentável em POC, MVP e projetos ágeis.
      </p>

      <div className="mt-10 space-y-8">
        {principios.map((a) => (
          <article
            key={a.id}
            className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900/50"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-sm font-bold text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
                {a.id}
              </span>
              <div className="min-w-0 flex-1">
                <h2 className="font-semibold text-neutral-900 dark:text-white">
                  {a.titulo}
                </h2>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                  {a.descricao}
                </p>
                <div className="mt-4 rounded-lg border-l-4 border-teal-500 bg-teal-50/50 py-2 pl-4 dark:bg-teal-950/30">
                  <p className="text-sm font-medium text-teal-800 dark:text-teal-200">
                    Prática recomendada
                  </p>
                  <p className="mt-1 text-sm text-teal-700 dark:text-teal-300">
                    {a.antiPadrao}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/boas-praticas"
          className="rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700 dark:bg-teal-600 dark:hover:bg-teal-500"
        >
          POC, MVP e agilidade
        </Link>
        <Link
          href="/certificacao"
          className="rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          Certificação XGH
        </Link>
      </div>
    </div>
  );
}
