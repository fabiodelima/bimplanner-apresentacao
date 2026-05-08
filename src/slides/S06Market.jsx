import '../styles/s06-market.css';

const COMPETITORS = [
  { name: 'Procore',            type: 'Vertical AEC (enterprise)',        revenue: 'US$ 1,14B',         price: '~US$ 67k/ano/cliente', hi: false },
  { name: 'Monday.com',         type: 'Generalista',                      revenue: 'US$ 964M',          price: 'R$ 60–80/mês',     hi: false },
  { name: 'Trello (Atlassian)', type: 'Kanban genérico',                  revenue: 'US$ 5,2B (grupo)',  price: 'Free / US$ 5–17',  hi: false },
  { name: 'Sienge',             type: 'Gestão obras + BIM parcial (BR)',  revenue: 'n/d',               price: 'n/d',                  hi: false },
  { name: 'BIMPlanner',         type: 'Vertical AEC + BIM nativo',        revenue: '—',                 price: 'R$ 89–199/mês',        hi: true },
];

export default function S06Market() {
  return (
    <div className="slide-inner mkt-inner">
      <h2 className="head mkt-head">
        O nicho ainda não foi <em>preenchido.</em>
      </h2>

      <div className="mkt-body">
        {/* ── Left: positioning chart ── */}
        <div className="mkt-left">
          <div className="mkt-label">Posicionamento</div>
          <div className="mkt-chart glass">
            <svg viewBox="0 0 520 490" preserveAspectRatio="xMidYMid meet">
              {/* BIMPlanner opportunity quadrant highlight */}
              <rect x="262" y="28" width="230" height="206" fill="rgba(232,201,122,0.06)" rx="4" />

              {/* Axis lines */}
              <line x1="260" y1="24" x2="260" y2="462" stroke="rgba(248,250,255,0.18)" strokeWidth="1" />
              <line x1="24" y1="244" x2="496" y2="244" stroke="rgba(248,250,255,0.18)" strokeWidth="1" />

              {/* Axis arrow tips */}
              <polygon points="260,18 254,28 266,28" fill="rgba(248,250,255,0.28)" />
              <polygon points="260,468 254,458 266,458" fill="rgba(248,250,255,0.28)" />
              <polygon points="502,244 492,238 492,250" fill="rgba(248,250,255,0.28)" />
              <polygon points="18,244 28,238 28,250" fill="rgba(248,250,255,0.28)" />

              {/* Axis labels — esmaecidas */}
              <text x="260" y="14" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="17" fill="rgba(248,250,255,0.38)" letterSpacing="2">BIM INTEGRADO</text>
              <text x="260" y="487" textAnchor="middle" fontFamily="DM Mono, monospace" fontSize="17" fill="rgba(248,250,255,0.38)" letterSpacing="2">SEM BIM</text>
              <text x="28" y="238" textAnchor="start" fontFamily="DM Mono, monospace" fontSize="17" fill="rgba(248,250,255,0.38)" letterSpacing="2">GENÉRICO</text>
              <text x="492" y="238" textAnchor="end" fontFamily="DM Mono, monospace" fontSize="17" fill="rgba(248,250,255,0.38)" letterSpacing="2">VERTICAL AEC</text>

              {/* Procore */}
              <circle cx="450" cy="58" r="12" fill="rgba(255,107,107,0.85)" />
              <text x="434" y="49" textAnchor="end" fontFamily="DM Mono, monospace" fontSize="18" fill="rgba(255,107,107,1)">Procore</text>

              {/* BIMPlanner — highlighted */}
              <circle cx="370" cy="110" r="18" fill="none" stroke="rgba(232,201,122,0.4)" strokeWidth="1.5" />
              <circle cx="370" cy="110" r="13" fill="rgba(232,201,122,0.9)" />
              <text x="348" y="100" textAnchor="end" fontFamily="DM Mono, monospace" fontSize="18" fill="rgba(232,201,122,1)" fontWeight="600">BIMPlanner</text>

              {/* Sienge — BIM parcial; deslocado para esquerda para não sobrepor VERTICAL AEC */}
              <circle cx="310" cy="195" r="10" fill="rgba(168,192,224,0.55)" />
              <text x="296" y="181" textAnchor="end" fontFamily="DM Mono, monospace" fontSize="18" fill="rgba(248,250,255,0.72)">Sienge</text>

              {/* Monday */}
              <circle cx="148" cy="302" r="10" fill="rgba(168,192,224,0.45)" />
              <text x="164" y="307" fontFamily="DM Mono, monospace" fontSize="18" fill="rgba(248,250,255,0.62)">Monday</text>

              {/* Trello */}
              <circle cx="78" cy="374" r="10" fill="rgba(168,192,224,0.45)" />
              <text x="94" y="379" fontFamily="DM Mono, monospace" fontSize="18" fill="rgba(248,250,255,0.62)">Trello</text>
            </svg>
          </div>
        </div>

        {/* ── Right: benchmark table + stats ── */}
        <div className="mkt-right">
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
            {/* TAM */}
            <div className="mkt-stat">
              <svg className="mkt-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="12" width="4" height="10"/>
                <rect x="9" y="7" width="4" height="15"/>
                <rect x="16" y="3" width="4" height="19"/>
              </svg>
              <div className="mkt-stat-text">
                <span className="mkt-sn">R$ 4,2B</span>
                <span className="mkt-sl">TAM estimado<br />Brasil (AEC SaaS)</span>
              </div>
            </div>
            <div className="mkt-sdiv" />
            {/* Crescimento */}
            <div className="mkt-stat">
              <svg className="mkt-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                <polyline points="16 7 22 7 22 13"/>
              </svg>
              <div className="mkt-stat-text">
                <span className="mkt-sn mkt-sn-sm">~15%</span>
                <span className="mkt-sl">crescimento BIM<br />software no Brasil<br /><span className="mkt-source">Cognitive Market Research</span></span>
              </div>
            </div>
            <div className="mkt-sdiv" />
            {/* Preço */}
            <div className="mkt-stat">
              <svg className="mkt-stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
              <div className="mkt-stat-text">
                <span className="mkt-sn">14x</span>
                <span className="mkt-sl">mais barato<br />que Procore</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
