import '../styles/s12-roadmap.css';

const PHASES = [
  {
    period: 'Mai – Jul · 2026',
    title: 'Validação dirigida',
    active: true,
  },
  {
    period: 'Ago – Dez · 2026',
    title: 'MVP web',
  },
  {
    period: '2027 · S1',
    title: 'Plugin Revit',
  },
  {
    period: '2027 · S2 +',
    title: 'Escala LATAM',
  },
];

export default function S12Roadmap() {
  return (
    <div className="slide-inner roadmap-inner">
      <div className="roadmap-head">
        <h2 className="head roadmap-title">
          Do conceito acadêmico ao <em>produto validado.</em>
        </h2>
        <p className="lead roadmap-lead">
          Quatro horizontes de execução, cada um com entregáveis acadêmicos (TRL, validação) e de
          mercado (MVP, beta, escala). Os próximos 90 dias são{' '}
          <strong>validação dirigida com escritórios parceiros</strong>; o ano fecha com o plugin
          Revit em mãos de clientes pagantes.
        </p>
      </div>

      <div className="roadmap-grid">
        {PHASES.map((phase) => (
          <div key={phase.period} className="roadmap-col">
            {phase.active && <span className="roadmap-now-badge">Agora</span>}
            <div className={`roadmap-card${phase.active ? ' roadmap-card--active' : ''}`}>
              <span className="roadmap-period">{phase.period}</span>
              <p className="roadmap-card-title">{phase.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
