export const EXAM_HINTS: string[] = [
  "No XGH a gente não pensa muito. Aqui na Academy, pensar um pouquinho é permitido (e até recomendado).",
  "A primeira opção nem sempre é a que 'veio à mente'. Ou será que é? Leia todas antes de decidir.",
  "Se estivesse em modo XGH você já teria clicado em qualquer uma. Respira e escolhe com calma.",
  "Dica de ouro: uma das alternativas costuma ser a antítese do que o XGH prega. Elimine as que são 'a forma errada'.",
  "Demorou? Tudo bem. No mundo real, decisões apressadas viram dívida técnica. Aqui também.",
  "O enunciado está te dizendo o que NÃO fazer. A resposta certa é a que faz o oposto.",
  "XGH = 'a forma errada, só que mais rápida'. A alternativa correta é a que não é isso.",
  "Se todas parecem plausíveis, procure a que fala em testes, refatoração ou transparência.",
  "Tempo é importante, mas chutar no escuro é ainda pior. Uma leitura rápida das opções já ajuda.",
  "A Academy não julga o tempo que você leva. Só o resultado. Use isso a seu favor.",
];

const QUESTION_SUBTITLES: string[] = [
  "você está indo bem (ou não, só saberemos no final)",
  "a máquina do café fica lá atrás",
  "ainda dá tempo de voltar atrás",
  "metade do caminho é mental",
  "quase lá, mantém o ritmo",
  "última reta. Ou não. Depende de quantas faltam.",
  "a gente acredita em você. O algoritmo, nem tanto.",
  "XGH seria já ter enviado. Você está fazendo certo.",
];

export function getRandomHint(): string {
  return EXAM_HINTS[Math.floor(Math.random() * EXAM_HINTS.length)];
}

export function getQuestionSubtitle(questionIndex: number, total: number): string {
  const i = Math.min(questionIndex, QUESTION_SUBTITLES.length - 1);
  return QUESTION_SUBTITLES[i];
}
