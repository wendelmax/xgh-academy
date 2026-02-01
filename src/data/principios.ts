export interface Principio {
  id: number;
  titulo: string;
  descricao: string;
  antiPadrao: string;
}

export const principios: Principio[] = [
  {
    id: 1,
    titulo: "Pensou, não é XGH",
    descricao: "XGH não pensa, faz a primeira coisa que vem à mente. Não existe segunda opção.",
    antiPadrao: "Planejamento mínimo, análise de impacto e decisão consciente antes de codificar.",
  },
  {
    id: 2,
    titulo: "Três formas de resolver",
    descricao: "A correta, a errada e a XGH — igual à errada, só que mais rápida.",
    antiPadrao: "Velocidade sustentável: entregar valor com qualidade que não gera dívida técnica.",
  },
  {
    id: 3,
    titulo: "Quanto mais XGH, mais precisará fazer",
    descricao: "Para cada problema resolvido com XGH, mais uns sete são criados.",
    antiPadrao: "Refatoração contínua e código que reduz problemas futuros.",
  },
  {
    id: 4,
    titulo: "XGH é totalmente reativo",
    descricao: "Os erros só existem quando aparecem.",
    antiPadrao: "Prevenção: testes, revisões e monitoramento proativo.",
  },
  {
    id: 5,
    titulo: "XGH vale tudo",
    descricao: "Resolveu o problema? Compilou? Commit e era isso.",
    antiPadrao: "Definition of Done: testes, revisão, documentação mínima.",
  },
  {
    id: 6,
    titulo: "Commit sempre antes de update",
    descricao: "Se der problema, sua parte estará sempre correta.",
    antiPadrao: "Integração contínua, responsabilidade compartilhada e comunicação.",
  },
  {
    id: 7,
    titulo: "XGH não tem prazo",
    descricao: "Os prazos do cliente são meros detalhes. Você sempre implementará tudo no tempo.",
    antiPadrao: "Negociação de escopo, transparência e entregas parciais reais.",
  },
  {
    id: 8,
    titulo: "Pular fora ou culpar",
    descricao: "Quando o barco afundar, esteja pronto para sair ou atribuir a culpa.",
    antiPadrao: "Ownership, post-mortems construtivos e melhoria de processo.",
  },
  {
    id: 9,
    titulo: "XGH não respeita padrões",
    descricao: "Escreva o código como bem entender.",
    antiPadrao: "Convenções de código, style guides e consistência na base.",
  },
  {
    id: 10,
    titulo: "Não existe refactoring, apenas rework",
    descricao: "Se der problema, refaça um XGH rápido. O rework vira reescrever tudo.",
    antiPadrao: "Refatoração incremental e dívida técnica controlada.",
  },
  {
    id: 11,
    titulo: "XGH é totalmente anárquico",
    descricao: "Gerente de projeto é descartável. Cada um faz o que quiser.",
    antiPadrao: "Papéis claros, alinhamento de prioridades e visibilidade do trabalho.",
  },
  {
    id: 12,
    titulo: "Iluda-se com promessas de melhoria",
    descricao: "TODO no código como promessa. O refactoring nunca será feito.",
    antiPadrao: "Backlog de dívida técnica com priorização e sprints de melhoria.",
  },
  {
    id: 13,
    titulo: "Prazo e custo absolutos, qualidade relativa",
    descricao: "Qualidade é detalhe. Pense no menor tempo de implementação.",
    antiPadrao: "Qualidade como requisito não negociável para entrega sustentável.",
  },
  {
    id: 14,
    titulo: "XGH é atemporal",
    descricao: "Scrum, XP são modinha. XGH sempre foi usado por quem despreza qualidade.",
    antiPadrao: "Adoção de práticas ágeis adaptadas ao contexto.",
  },
  {
    id: 15,
    titulo: "XGH nem sempre é POG",
    descricao: "Muitas POGs exigem raciocínio. XGH não raciocina.",
    antiPadrao: "Soluções criativas mas documentadas e mantíveis.",
  },
  {
    id: 16,
    titulo: "Não remar contra a maré",
    descricao: "Se os colegas usam XGH, esqueça fazer certo.",
    antiPadrao: "Influência positiva, exemplos e melhoria gradual do time.",
  },
  {
    id: 17,
    titulo: "XGH não é perigoso até surgir ordem",
    descricao: "Não tente por ordem no caos. O projeto afunda mais rápido.",
    antiPadrao: "Introduzir ordem gradual: métricas, ritmos e transparência.",
  },
  {
    id: 18,
    titulo: "XGH é seu brother, mas é vingativo",
    descricao: "Abandonar XGH por metodologia 'da moda' pode levar ao colapso sem refactoring.",
    antiPadrao: "Transição planejada com investimento em qualidade.",
  },
  {
    id: 19,
    titulo: "Se tiver funcionando, não mexa",
    descricao: "Nunca altere código que funciona. Refactoring não existe.",
    antiPadrao: "Melhoria contínua mesmo em código que 'funciona'.",
  },
  {
    id: 20,
    titulo: "Teste é para os fracos",
    descricao: "Se você sabe o que está fazendo, para que testar? Compilou, basta.",
    antiPadrao: "Testes automatizados como base para refatoração e entrega segura.",
  },
  {
    id: 21,
    titulo: "Fracasso iminente",
    descricao: "Sucesso e fracasso são ponto de vista. Projeto afundou mas você aprendeu? Sucesso.",
    antiPadrao: "Sucesso medido por valor entregue e sustentabilidade do produto.",
  },
  {
    id: 22,
    titulo: "O problema só é seu quando seu nome está no Doc",
    descricao: "Nunca ponha a mão numa classe cujo autor não é você.",
    antiPadrao: "Code ownership coletivo, pair programming e conhecimento compartilhado.",
  },
];
