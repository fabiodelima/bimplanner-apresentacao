const QUADRANTS = [
  {
    key: 'forcas',
    label: 'Forças',
    dot: '#6bcf7f',
    accent: 'rgba(107,207,127,.15)',
    border: 'rgba(107,207,127,.25)',
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
    dot: '#ff6b6b',
    accent: 'rgba(255,107,107,.12)',
    border: 'rgba(255,107,107,.25)',
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
    dot: '#e8c97a',
    accent: 'rgba(232,201,122,.12)',
    border: 'rgba(232,201,122,.28)',
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
    dot: '#ff6b6b',
    accent: 'rgba(255,107,107,.08)',
    border: 'rgba(255,107,107,.20)',
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
            padding: '32px 36px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--mono)',
              fontSize: 13,
              letterSpacing: '.12em',
              textTransform: 'uppercase',
              color: 'var(--faint)',
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: q.dot, flexShrink: 0,
                boxShadow: `0 0 8px ${q.dot}`,
              }} />
              {q.label}
            </div>

            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
            }}>
              {q.items.map((item, i) => (
                <li key={i} style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 14,
                  fontSize: 20,
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
