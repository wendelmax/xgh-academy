import Link from "next/link";

export const metadata = {
  title: "Manifesto Extreme Go Horse | XDH Academy",
  description:
    "Manifesto para o Desenvolvimento de Software eXtreme Go Horse (XGH): valores e princípios documentados. Sátira às más práticas.",
};

const values = [
  {
    left: "Velocidade imediata",
    right: "qualidade sustentável",
  },
  {
    left: "Reação ao problema",
    right: "prevenção de erros",
  },
  {
    left: "Commit antes do update",
    right: "integração e responsabilidade compartilhada",
  },
  {
    left: "Caos criativo e ausência de dono",
    right: "processos, documentação e ownership claro",
  },
];

const principles = [
  "A única forma de resolver um problema é a mais rápida; se pensou, não é XGH.",
  "Prazo e custo são absolutos; qualidade é relativa e negociável.",
  "Erros só existem quando aparecem; prevenção é perda de tempo.",
  "Não existe refactoring, apenas rework — de preferência rápido e sem testes.",
  "Se compilou e commitou, está entregue; Definition of Done é frescura.",
  "Gerente de projeto é descartável; cada um faz o que quiser quando o problema surgir.",
  "Código funcionando não se mexe; melhoria contínua é risco desnecessário.",
  "O problema só é seu quando seu nome está no Doc da classe.",
  "TODO no código é promessa de melhoria; o refactoring nunca será feito.",
  "Quando o barco afundar, esteja pronto para pular fora ou atribuir a culpa.",
  "Scrum, XP e metodologias da moda são modinha; XGH é atemporal.",
  "Para cada problema resolvido com XGH, mais sete surgirão — todos resolvidos com XGH.",
];

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <section className="border-b-4 border-neutral-900 bg-neutral-900 px-4 py-16 text-white dark:border-teal-600 dark:bg-neutral-900">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-400 dark:text-teal-300">
            Declaração de princípios
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Manifesto para o Desenvolvimento de Software
          </h1>
          <p className="mt-4 text-2xl font-semibold text-teal-400 dark:text-teal-300">
            eXtreme Go Horse
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <blockquote className="border-l-4 border-neutral-900 pl-6 text-lg italic text-neutral-700 dark:border-teal-500 dark:text-neutral-300">
          Estamos documentando formas mais rápidas de desenvolver software
          fazendo a primeira coisa que vier à cabeça e ajudando outros a fazer o
          mesmo. Com este trabalho passamos a valorizar:
        </blockquote>

        <section className="mt-12 space-y-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50 sm:flex-row sm:items-center sm:gap-4"
            >
              <span className="font-bold text-neutral-900 dark:text-white sm:w-2/5">
                {v.left}
              </span>
              <span className="hidden shrink-0 text-neutral-400 sm:inline">
                sobre
              </span>
              <span className="text-neutral-600 dark:text-neutral-400 sm:w-2/5">
                {v.right}
              </span>
            </div>
          ))}
        </section>

        <p className="mt-10 text-center text-neutral-600 dark:text-neutral-400">
          Ou seja, embora haja valor nos itens da direita, valorizamos mais os
          itens da esquerda.
        </p>

        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Princípios do eXtreme Go Horse
          </h2>
          <ol className="mt-6 list-inside list-decimal space-y-4 text-neutral-700 dark:text-neutral-300">
            {principles.map((p, i) => (
              <li key={i} className="pl-2">
                {p}
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14 rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/50 dark:bg-amber-950/30">
          <h3 className="font-semibold text-amber-900 dark:text-amber-100">
            Sobre este manifesto
          </h3>
          <p className="mt-2 text-sm text-amber-800 dark:text-amber-200">
            O Manifesto eXtreme Go Horse é uma sátira às más práticas de
            desenvolvimento. Ele não deve ser adotado literalmente; serve para
            reconhecer anti-padrões e, por contraste, valorizar qualidade,
            testes, refatoração e colaboração. Para as práticas que recomendamos
            em oposição ao XGH, consulte as páginas de POC, MVP e Agilidade e os
            22 princípios com suas alternativas saudáveis.
          </p>
        </section>

        <footer className="mt-14 border-t border-neutral-200 pt-8 dark:border-neutral-800">
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Inspirado na cultura XGH documentada em comunidades brasileiras de
            desenvolvimento. Esta declaração pode ser copiada e compartilhada
            livremente. Referência:{" "}
            <a
              href="https://gohorse.com.br/extreme-go-horse-manifesto.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-600 underline hover:text-teal-700 dark:text-teal-400"
            >
              gohorse.com.br
            </a>
            . Manifesto Ágil:{" "}
            <a
              href="https://agilemanifesto.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-600 underline hover:text-teal-700 dark:text-teal-400"
            >
              agilemanifesto.org
            </a>
            .
          </p>
        </footer>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/principios"
            className="rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-700 dark:bg-teal-600 dark:hover:bg-teal-500"
          >
            Ver os 22 princípios
          </Link>
          <Link
            href="/boas-praticas"
            className="rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            POC, MVP e práticas recomendadas
          </Link>
        </div>
      </div>
    </div>
  );
}
