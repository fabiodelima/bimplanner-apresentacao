import '../styles/s06-market.css';

const COMPETITORS = [
  { name: 'Procore',            type: 'Vertical AEC (enterprise)',        revenue: 'US$ 1,14B',         price: '~US$ 67k/ano/cliente', hi: false },
  { name: 'Monday.com',         type: 'Generalista',                      revenue: 'US$ 964M',          price: 'R$ 60–80/mês',     hi: false },
  { name: 'Trello (Atlassian)', type: 'Kanban genérico',             revenue: 'US$ 5,2B (grupo)',  price: 'Free / US$ 5–17',  hi: false },
  { name: 'Sienge',             type: 'Gestão obras + BIM parcial (BR)', revenue: 'n/d',           price: 'n/d',                  hi: false },
  { name: 'BIMPlanner',         type: 'Vertical AEC + BIM nativo',        revenue: '—',            price: 'R$ 89–199/mês', hi: true },
];

export default function S06Market() {
  return (
    <div className="slide-inner mkt-inner">
      <h2 className="head mkt-head">
        A oportunidade está no <em>vazio.</em>
      </h2>

      <div className="mkt-body">
        {/* ── Left: benchmark table ── */}
        <div className="mkt-left">
          <div className="mkt-label">Benchmarking competitivo</div>

          <div className="mkt-table glass">
            <div className="mkt-thead">
              <span>Ferramenta</span>
              <span>Tipo</span>
              <span>Receita anual</span>
              <span>Preço / usuário</span>
            </div>
            {COMPETITORS.map((c, i) => (
              <div key={i} className={`mkt-row${c.hi ? ' hi' : ''}`}>
                <span className="mkt-col-name">{c.name}</span>
                <span className="mkt-col-type">{c.type}</span>
                <span className="mkt-col-rev">{c.revenue}</span>
                <span className="mkt-col-price">{c.price}</span>
              </div>
            ))}
          </div>

          <div className="mkt-stats">
            <div className="mkt-stat">
              <span className="mkt-sn">180k+</span>
              <span className="mkt-sl">escritórios AEC<br />no Brasil</span>
            </div>
            <div className="mkt-sdiv" />
            <div className="mkt-stat">
              <span className="mkt-sn mkt-sn-sm">Dec. 11.888</span>
              <span className="mkt-sl">BIM obrigatório<br />obras públicas</span>
            </div>
            <div className="mkt-sdiv" />
            <div className="mkt-stat">
              <span className="mkt-sn">14x</span>
              <span className="mkt-sl">mais barato<br />que Procore</span>
            </div>
          </div>
        </div>

        {/* ── Right: positioning chart ── */}
        <div className="mkt-right">
          <div className="mkt-label">Posicionamento</div>
          <div className="mkt-chart glass">
            <svg viewBox="0 0 520 480" preserveAspectRatio="xMidYMid meet">
              {/* Quadrant shading */}
              <rect x="260" y="20" width="240" height="220" fill="rgba(232,201,122,0.04)" />

              {/* Axis lines */}
              <line x1="260" y1="20" x2="260" y2="460" stroke="rgba(248,250,255,0.15)" strokeWidth="1" />
              <line x1="20" y1="240" x2="500" y2="240" stroke="rgba(248,250,255,0.15)" strokeWidth="1" />

              {/* Axis arrow tips */}
              <polygon points="260,14 255,24 265,24" fill="rgba(248,250,255,0.2)" />
              <polygon points="260,466 255,456 265,456" fill="rgba(248,250,255,0.2)" />
              <polygon points="506,240 496,235 496,245" fill="rgba(248,250,255,0.2)" />
              <polygon points="14,240 24,235 24,245" fill="rgba(248,250,255,0.2)" />

              {/* Axis labels */}
              <text x="260" y="9" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="10.5" fill="rgba(248,250,255,0.4)" letterSpacing="1.8">BIM INTEGRADO</text>
              <text x="260" y="478" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="10.5" fill="rgba(248,250,255,0.4)" letterSpacing="1.8">SEM BIM</text>
              <text x="16" y="235" textAnchor="start" fontFamily="DM Mono, monospace" fontSize="10.5" fill="rgba(248,250,255,0.4)" letterSpacing="1.8">GENÉRICO</text>
              <text x="504" y="235" textAnchor="end" fontFamily="DM Mono, monospace" fontSize="10.5" fill="rgba(248,250,255,0.4)" letterSpacing="1.8">VERTICAL AEC</text>

              {/* Procore */}
              <circle cx="458" cy="50" r="11" fill="rgba(255,107,107,0.85)" />
              <text x="443" y="42" textAnchor="end" fontFamily="DM Mono, monospace" fontSize="12" fill="rgba(255,107,107,0.9)">Procore</text>

              {/* BIMPlanner — highlighted */}
              <circle cx="378" cy="100" r="18" fill="none" stroke="rgba(232,201,122,0.28)" strokeWidth="1.5" />
              <circle cx="378" cy="100" r="13" fill="rgba(232,201,122,0.9)" />
              <text x="358" y="92" textAnchor="end" fontFamily="DM Mono, monospace" fontSize="12" fill="rgba(232,201,122,1)" fontWeight="600">BIMPlanner</text>

              {/* Sienge */}
              <circle cx="345" cy="258" r="9" fill="rgba(168,192,224,0.45)" />
              <text x="360" y="262" fontFamily="DM Mono, monospace" fontSize="12" fill="rgba(248,250,255,0.5)">Sienge</text>

              {/* Monday */}
              <circle cx="152" cy="296" r="9" fill="rgba(168,192,224,0.35)" />
              <text x="167" y="300" fontFamily="DM Mono, monospace" fontSize="12" fill="rgba(248,250,255,0.5)">Monday</text>

              {/* Trello */}
              <circle cx="84" cy="368" r="9" fill="rgba(168,192,224,0.35)" />
              <text x="99" y="372" fontFamily="DM Mono, monospace" fontSize="12" fill="rgba(248,250,255,0.5)">Trello</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
