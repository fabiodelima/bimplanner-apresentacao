import '../styles/s10-costs.css';

const COSTS = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="9" r="4"/>
        <path d="M4 26c0-4.418 3.582-8 8-8s8 3.582 8 8"/>
        <circle cx="22" cy="11" r="3"/>
        <path d="M22 20c2.761 0 5 2.239 5 5"/>
      </svg>
    ),
    title: 'Equipe Técnica',
    tag: 'FIXO',
    sub: 'MAIOR CUSTO',
    desc: '2 devs fullstack + 1 especialista Revit + 1 UX/design. Equity pool como retenção inicial.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="20" width="24" height="6" rx="2"/>
        <rect x="6" y="13" width="20" height="6" rx="2"/>
        <rect x="8" y="6" width="16" height="6" rx="2"/>
      </svg>
    ),
    title: 'Plugin Revit',
    tag: 'FIXO',
    sub: 'RECORRENTE',
    desc: 'Manutenção por versão Autodesk (anual). Custo previsível — planejado no roadmap.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22a6 6 0 1 1 1.5-11.8A7 7 0 1 1 24 16h-2a4 4 0 0 1-4-4"/>
        <path d="M10 22h14a4 4 0 0 0 0-8h-.5"/>
      </svg>
    ),
    title: 'Cloud Infra',
    tag: 'VARIÁVEL',
    sub: 'ESCALA',
    desc: 'AWS / Azure. Escala com base de usuários — paga pelo uso. Estimativa inicial: R$ 800–2k/mês.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="11"/>
        <path d="M16 10v7"/>
        <circle cx="16" cy="21" r="0.5" fill="currentColor"/>
      </svg>
    ),
    title: 'IA / LLM APIs',
    tag: 'VARIÁVEL',
    sub: 'POR USO',
    desc: 'APIs de LLM para priorização e alertas preditivos. Margem controlada por plano e cota.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="2,16 7,16 10,8 14,24 18,12 22,20 25,16 30,16"/>
      </svg>
    ),
    title: 'Marketing',
    tag: 'FIXO',
    sub: 'CONTEÚDO',
    desc: 'SEO técnico AEC, YouTube, feiras FEICON e BIM World Brazil. PLG reduz CAC organicamente.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h24a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H10l-6 4V8a2 2 0 0 1 2-2z"/>
      </svg>
    ),
    title: 'CS e Suporte',
    tag: 'FIXO',
    sub: 'SLA',
    desc: 'Onboarding dedicado plano Team, SLA por plano. Escala com a base — bot + humano híbrido.',
  },
];

export default function S10Costs() {
  return (
    <div className="slide-inner costs-inner">
      <div className="costs-top">
        <h2 className="head">Onde o dinheiro <em>vai</em>.</h2>
      </div>

      <div className="costs-grid">
        {COSTS.map((c) => (
          <div key={c.title} className="costs-card glass">
            <div className="costs-icon">{c.icon}</div>
            <div className="costs-card-title">{c.title}</div>
            <div className="costs-tag">
              <span className="costs-tag-type">{c.tag}</span>
              <span className="costs-tag-sep">·</span>
              <span className="costs-tag-sub">{c.sub}</span>
            </div>
            <p className="costs-desc">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="costs-footer">
        Projeções financeiras (CAC, LTV, break-even) na próxima etapa — após validação beta com 30 escritórios.
      </div>
    </div>
  );
}
