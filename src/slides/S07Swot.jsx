const QUADRANTS = [
  {
    key: 'forcas',
    label: 'Forças',
    color: '#6bcf7f',
    accent: 'rgba(107,207,127,.15)',
    border: 'rgba(107,207,127,.25)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z"
          fill="#6bcf7f" stroke="#6bcf7f" strokeWidth="1" strokeLinejoin="round" />
      </svg>
    ),
    items: [
      'Patente INPI como barreira de entrada',
      'Terminologia AEC única no mercado LATAM',
      'Integração Revit bidirecional nativa',
      'Decreto 9.983 como catalisador regulatório',
    ],
  },
  {
    key: 'fraquezas',
    label: 'Fraquezas',
    color: '#ff6b6b',
    accent: 'rgba(255,107,107,.12)',
    border: 'rgba(255,107,107,.25)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="#ff6b6b" strokeWidth="1.5" />
        <path d="M7 7L13 13M13 7L7 13" stroke="#ff6b6b" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    items: [
      'Equipe sem dev sênior full-time',
      'Dependência do ecossistema Autodesk',
      'MVP ainda não validado com usuários',
      'Pré-revenue',
    ],
  },
  {
    key: 'oportunidades',
    label: 'Oportunidades',
    color: '#e8c97a',
    accent: 'rgba(232,201,122,.12)',
    border: 'rgba(232,201,122,.28)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10 3C6.13 3 3 6.13 3 10s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7Z" stroke="#e8c97a" strokeWidth="1.5" />
        <path d="M10 7v4l2.5 2.5" stroke="#e8c97a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: [
      '180k escritórios sem solução vertical BIM',
      'PLG + efeito de rede via plano Free',
      'Marketplace de templates AEC',
      'Expansão LATAM (Portugal, Espanha)',
    ],
  },
  {
    key: 'ameacas',
    label: 'Ameaças',
    color: '#ff6b6b',
    accent: 'rgba(255,107,107,.08)',
    border: 'rgba(255,107,107,.20)',
    icon: (
      <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10 3L18 17H2L10 3Z" stroke="#ff6b6b" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 9V12" stroke="#ff6b6b" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="10" cy="14.5" r="0.9" fill="#ff6b6b" />
      </svg>
    ),
    items: [
      'Autodesk pode lançar recurso similar',
      'Resistência cultural do setor AEC',
      'Custo de manutenção por versão Revit',
      'Concorrentes internacionais entrando no BR',
    ],
  },
];

export default function S07Swot() {
  return (
    <div className="slide-inner" style={{ gap: 48 }}>
      <div>
        <h2 className="head" style={{ marginBottom: 0 }}>Análise <em>SWOT.</em></h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: 20,
        flex: 1,
        minHeight: 0,
      }}>
        {QUADRANTS.map(q => (
          <div key={q.key} className="glass" style={{
            background: q.accent,
            borderColor: q.border,
            padding: '28px 36px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}>
            {/* Cabeçalho do quadrante: ícone + label em destaque */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              paddingBottom: 14,
              borderBottom: `1px solid ${q.border}`,
            }}>
              <span style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 41,
                height: 41,
                borderRadius: 8,
                background: q.accent,
                border: `1px solid ${q.border}`,
                flexShrink: 0,
                filter: `drop-shadow(0 0 6px ${q.color}60)`,
              }}>
                {q.icon}
              </span>
              <span style={{
                fontFamily: 'var(--sans)',
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: '.10em',
                textTransform: 'uppercase',
                color: q.color,
                lineHeight: 1,
              }}>
                {q.label}
              </span>
            </div>

            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 17,
            }}>
              {q.items.map((item, i) => (
                <li key={i} style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 14,
                  fontSize: 24,
                  color: 'var(--dim)',
                  lineHeight: 1.4,
                }}>
                  <span style={{
                    width: 20, height: 1,
                    background: 'rgba(248,250,255,.25)',
                    flexShrink: 0,
                    marginTop: 2,
                    alignSelf: 'center',
                  }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
