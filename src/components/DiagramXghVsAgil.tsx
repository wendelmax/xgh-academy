export default function DiagramXghVsAgil() {
  return (
    <div className="diagram-xgh-agil my-8 overflow-x-auto rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50">
      <p className="mb-4 text-center text-sm font-medium text-neutral-600 dark:text-neutral-400">
        XGH vs Práticas ágeis sustentáveis
      </p>
      <svg
        viewBox="0 0 520 200"
        className="mx-auto h-auto w-full max-w-lg"
        aria-hidden
      >
        <defs>
          <marker
            id="arrow-red"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#dc2626" />
          </marker>
          <marker
            id="arrow-teal"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#0d9488" />
          </marker>
        </defs>
        <g className="side-group cursor-pointer">
          <rect
            className="side-card"
            x="20"
            y="20"
            width="220"
            height="160"
            rx="8"
            fill="#fef2f2"
            stroke="#fecaca"
            strokeWidth="1.5"
          />
          <text x="130" y="50" textAnchor="middle" className="text-sm font-semibold" fill="#991b1b">
            XGH (anti-padrão)
          </text>
          <text x="130" y="75" textAnchor="middle" fontSize="11" fill="#b91c1c">
            Reativo, sem testes
          </text>
          <text x="130" y="95" textAnchor="middle" fontSize="11" fill="#b91c1c">
            Prazo absoluto, qualidade relativa
          </text>
          <text x="130" y="115" textAnchor="middle" fontSize="11" fill="#b91c1c">
            Sem refactoring, rework infinito
          </text>
          <text x="130" y="135" textAnchor="middle" fontSize="11" fill="#b91c1c">
            Dívida técnica crescente
          </text>
        </g>
        <g className="side-group cursor-pointer">
          <rect
            className="side-card"
            x="280"
            y="20"
            width="220"
            height="160"
            rx="8"
            fill="#f0fdfa"
            stroke="#99f6e4"
            strokeWidth="1.5"
          />
          <text x="390" y="50" textAnchor="middle" className="text-sm font-semibold" fill="#0f766e">
            Práticas sustentáveis
          </text>
          <text x="390" y="75" textAnchor="middle" fontSize="11" fill="#0d9488">
            Testes e prevenção
          </text>
          <text x="390" y="95" textAnchor="middle" fontSize="11" fill="#0d9488">
            Escopo negociado, qualidade mínima
          </text>
          <text x="390" y="115" textAnchor="middle" fontSize="11" fill="#0d9488">
            Refatoração contínua
          </text>
          <text x="390" y="135" textAnchor="middle" fontSize="11" fill="#0d9488">
            POC/MVP com visibilidade
          </text>
        </g>
        <path
          className="arrow-flow"
          d="M240 100 L270 100"
          stroke="#dc2626"
          strokeWidth="2"
          markerEnd="url(#arrow-red)"
        />
        <path
          className="arrow-pulse"
          d="M280 100 L310 100"
          stroke="#0d9488"
          strokeWidth="2"
          markerEnd="url(#arrow-teal)"
        />
        <text x="255" y="92" textAnchor="middle" fontSize="10" fill="#991b1b">
          evitar
        </text>
        <text x="295" y="92" textAnchor="middle" fontSize="10" fill="#0f766e">
          adotar
        </text>
      </svg>
    </div>
  );
}
