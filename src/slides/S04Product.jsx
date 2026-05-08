import { useState, useEffect, useRef } from 'react';
import '../styles/s04-product.css';

const URL_LABELS = {
  dashboard:  'app.bimplanner.com.br / dashboard',
  projetos:   'app.bimplanner.com.br / projetos',
  tarefas:    'app.bimplanner.com.br / tarefas',
  cronograma: 'app.bimplanner.com.br / cronograma',
  clientes:   'app.bimplanner.com.br / clientes',
  revit:      'app.bimplanner.com.br / revit-sync',
  ia:         'app.bimplanner.com.br / ia-insights',
};

const GANTT_ROWS = [
  { label: 'ARQ · Planta baixa',   start: 0, len: 4, color: 'rgba(168,192,224,.4)'  },
  { label: 'EST · Detalhamento',   start: 2, len: 5, color: 'rgba(255,107,107,.4)'  },
  { label: 'HID · Compatibiliz.',  start: 5, len: 4, color: 'rgba(232,201,122,.45)' },
  { label: 'ARQ · Revisão fachad', start: 6, len: 3, color: 'rgba(168,192,224,.3)'  },
  { label: 'ARQ · Memorial v2',    start: 1, len: 3, color: 'rgba(107,207,127,.45)' },
  { label: 'GEST · Relatório',     start: 8, len: 4, color: 'rgba(168,192,224,.25)' },
];

const chipStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  fontFamily: 'var(--mono)',
  fontSize: 13,
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  color: 'var(--blue)',
  background: 'rgba(168,192,224,0.15)',
  border: '1px solid rgba(168,192,224,0.3)',
  padding: '6px 16px',
  borderRadius: 100,
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
  whiteSpace: 'nowrap',
};

export default function S04Product() {
  const [view, setView] = useState('dashboard');
  const ganttRef = useRef(null);

  useEffect(() => {
    const container = ganttRef.current;
    if (!container) return;
    container.innerHTML = '';
    const total = 12;
    GANTT_ROWS.forEach(r => {
      const row = document.createElement('div');
      row.style.cssText = 'display:grid;grid-template-columns:160px 1fr;gap:0;align-items:center;';
      const label = document.createElement('div');
      label.style.cssText = 'font-family:var(--mono);font-size:11px;color:var(--faint);letter-spacing:.04em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-right:10px;';
      label.textContent = r.label;
      const track = document.createElement('div');
      track.style.cssText = 'position:relative;height:22px;background:rgba(255,255,255,.04);border-radius:4px;';
      const bar = document.createElement('div');
      bar.style.cssText = `position:absolute;top:3px;bottom:3px;left:${(r.start / total) * 100}%;width:${(r.len / total) * 100}%;background:${r.color};border-radius:3px;`;
      const today = document.createElement('div');
      today.style.cssText = 'position:absolute;top:0;bottom:0;left:28%;width:1px;background:rgba(232,201,122,.5);';
      track.appendChild(bar);
      track.appendChild(today);
      row.appendChild(label);
      row.appendChild(track);
      container.appendChild(row);
    });
  }, []);

  return (
    <>
      <div className="slide-inner prod-slide-inner">
        <div className="prod-head" style={{ alignItems: 'center' }}>
          <h2 className="head" style={{ marginBottom: 0 }}>Dashboard <em>feito para AEC</em>.</h2>
          <div style={chipStyle}>Mockup funcional</div>
        </div>

        <div className="mockup">
          {/* Browser bar */}
          <div className="mock-bar">
            <div className="mock-dots">
              <div className="mock-dot" />
              <div className="mock-dot" />
              <div className="mock-dot" />
            </div>
            <div className="mock-url">{URL_LABELS[view]}</div>
          </div>

          {/* App body */}
          <div className="mock-body">
            {/* Sidebar */}
            <div className="mock-sb">
              <div className="mock-sb-logo">BIM<span>Planner</span></div>
              {[
                { id: 'dashboard',  label: '◈ Dashboard' },
                { id: 'projetos',   label: '◻ Projetos' },
                { id: 'tarefas',    label: '✓ Tarefas' },
                { id: 'cronograma', label: '◷ Cronograma' },
                { id: 'clientes',   label: '◑ Clientes' },
                { id: 'revit',      label: '⬡ Revit Sync' },
                { id: 'ia',         label: '✦ IA Insights' },
              ].map(nav => (
                <div
                  key={nav.id}
                  className={`mock-nav${view === nav.id ? ' on' : ''}`}
                  onClick={() => setView(nav.id)}
                >
                  {nav.label}
                </div>
              ))}
            </div>

            {/* ── DASHBOARD ── */}
            {view === 'dashboard' && (
              <div className="mock-main mock-view">
                <div className="mock-top">
                  <div className="mock-pname">Residência Alto Alegre</div>
                  <div className="mock-phase">● Anteprojeto</div>
                </div>
                <div className="mock-kpis">
                  <div className="mock-kpi"><div className="mock-kv">78%</div><div className="mock-kl">Conclusão da fase</div></div>
                  <div className="mock-kpi"><div className="mock-kv">12</div><div className="mock-kl">Tarefas abertas</div></div>
                  <div className="mock-kpi"><div className="mock-kv">3</div><div className="mock-kl">Alertas IA</div></div>
                  <div className="mock-kpi"><div className="mock-kv">+4d</div><div className="mock-kl">Prazo restante</div></div>
                </div>
                <div className="mock-ai">
                  <span className="mock-ai-icon">✦</span>
                  <span className="mock-ai-text">IA detectou risco: "Compatibilização hidráulica" está bloqueada pela entrega estrutural (2 dias de atraso potencial). Reagendar revisão de fachada para liberar o fluxo?</span>
                </div>
                <div className="mock-tasks">
                  <div className="mock-th"><span>Tarefa</span><span>Fase</span><span>Responsável</span><span>Status</span></div>
                  <div className="mock-task"><span>Planta baixa definitiva</span><span className="mock-tph">ANTEPROJETO</span><span className="mock-town">Louise G.</span><span className="sc sc-ok">✓ ok</span></div>
                  <div className="mock-task"><span>Compatibilização hidráulica</span><span className="mock-tph">ANTEPROJETO</span><span className="mock-town">Piero L.</span><span className="sc sc-w">⚠ risco</span></div>
                  <div className="mock-task"><span>Detalhamento estrutural</span><span className="mock-tph">ANTEPROJETO</span><span className="mock-town">Fábio L.</span><span className="sc sc-l">✕ atraso</span></div>
                  <div className="mock-task"><span>Memorial descritivo v2</span><span className="mock-tph">ANTEPROJETO</span><span className="mock-town">Valentina M.</span><span className="sc sc-ok">✓ ok</span></div>
                </div>
              </div>
            )}

            {/* ── PROJETOS ── */}
            {view === 'projetos' && (
              <div className="mock-main mock-view">
                <div className="mock-top"><div className="mock-pname">Todos os projetos</div><div className="mock-phase">5 ativos</div></div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 140px 130px 100px 90px', gap: 12, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--faint)', letterSpacing: '.1em', textTransform: 'uppercase', padding: '0 18px 8px', borderBottom: '1px solid var(--line)' }}>
                    <span>Projeto</span><span>Cliente</span><span>Fase</span><span>Prazo</span><span>Status</span>
                  </div>
                  {[
                    { nome: 'Residência Alto Alegre',   cliente: 'Fam. Oliveira',     fase: 'ANTEPROJETO',  prazo: '18 mai', sc: 'sc-w',  label: '⚠ risco' },
                    { nome: 'Ed. Comercial Moinhos',    cliente: 'Construtora ABC',   fase: 'PROJ. EXEC.',  prazo: '02 jun', sc: 'sc-ok', label: '✓ ok' },
                    { nome: 'UBS Jardim Floresta',      cliente: 'Pref. Municipal',   fase: 'EST. PRELIM.', prazo: '30 mai', sc: 'sc-ok', label: '✓ ok' },
                    { nome: 'Reforma Escritório Centro',cliente: 'Escritório XYZ',    fase: 'ANTEPROJETO',  prazo: '10 jun', sc: 'sc-l',  label: '✕ atraso' },
                    { nome: 'Galpão Industrial RS-020', cliente: 'Indústria Sulina',  fase: 'PROJ. EXEC.',  prazo: '25 jun', sc: 'sc-ok', label: '✓ ok' },
                  ].map((p, i) => (
                    <div key={i} className="mock-task" style={{ gridTemplateColumns: '1fr 140px 130px 100px 90px' }}>
                      <span style={{ fontWeight: 500 }}>{p.nome}</span>
                      <span className="mock-town">{p.cliente}</span>
                      <span className="mock-tph">{p.fase}</span>
                      <span className="mock-town">{p.prazo}</span>
                      <span className={`sc ${p.sc}`}>{p.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── TAREFAS (kanban) ── */}
            {view === 'tarefas' && (
              <div className="mock-main mock-view">
                <div className="mock-top"><div className="mock-pname">Tarefas · Residência Alto Alegre</div><div className="mock-phase">● Anteprojeto</div></div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, flex: 1, minHeight: 0 }}>
                  <div style={{ background: 'var(--bp3)', border: '1px solid var(--lineB)', borderRadius: 'var(--rsm)', padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--faint)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 4 }}>A FAZER · 4</div>
                    {['Maquete eletrônica', 'Detalhamento hidráulico', 'Relatório de sondagem'].map((t, i) => (
                      <div key={i} style={{ background: 'var(--bp2)', border: '1px solid var(--lineB)', borderRadius: 5, padding: '11px 13px' }}>
                        <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>{t}</div>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--faint)' }}>{['Louise G. · ARQ', 'Piero L. · HID', 'Fábio L. · EST'][i]}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: 'var(--bp3)', border: '1px solid var(--amberB)', borderRadius: 'var(--rsm)', padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--amber)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 4 }}>EM ANDAMENTO · 3</div>
                    <div style={{ background: 'var(--bp2)', border: '1px solid var(--amberB)', borderRadius: 5, padding: '11px 13px' }}>
                      <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>Planta baixa definitiva</div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--faint)' }}>Louise G. · ARQ</div>
                    </div>
                    <div style={{ background: 'var(--bp2)', border: '1px solid rgba(255,107,107,.3)', borderRadius: 5, padding: '11px 13px' }}>
                      <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>Compat. hidráulica <span style={{ color: 'var(--red)', fontSize: 11 }}>⚠</span></div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--faint)' }}>Piero L. · HID</div>
                    </div>
                    <div style={{ background: 'var(--bp2)', border: '1px solid var(--lineB)', borderRadius: 5, padding: '11px 13px' }}>
                      <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>Memorial descritivo v2</div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--faint)' }}>Valentina M. · ARQ</div>
                    </div>
                  </div>
                  <div style={{ background: 'var(--bp3)', border: '1px solid rgba(107,207,127,.15)', borderRadius: 'var(--rsm)', padding: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--green)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 4 }}>CONCLUÍDO · 5</div>
                    {['Levantamento topográfico', 'Programa de necessidades', 'Estudo de viabilidade'].map((t, i) => (
                      <div key={i} style={{ background: 'var(--bp2)', border: '1px solid rgba(107,207,127,.15)', borderRadius: 5, padding: '11px 13px', opacity: .7 }}>
                        <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>{t}</div>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--faint)' }}>{['Fábio L. · EST', 'Louise G. · ARQ', 'Pâmela W. · GEST'][i]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── CRONOGRAMA ── */}
            {view === 'cronograma' && (
              <div className="mock-main mock-view">
                <div className="mock-top"><div className="mock-pname">Cronograma · Residência Alto Alegre</div><div className="mock-phase">Mai – Jul 2026</div></div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 0, marginBottom: 6 }}>
                    <div />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)' }}>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--faint)', textAlign: 'center', gridColumn: '1/5' }}>MAIO</div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--faint)', textAlign: 'center', gridColumn: '5/9' }}>JUNHO</div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--faint)', textAlign: 'center', gridColumn: '9/13' }}>JULHO</div>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 0, marginBottom: 4 }}>
                    <div />
                    <div style={{ position: 'relative', height: 14 }}>
                      <div style={{ position: 'absolute', left: '28%', top: 0, bottom: 0, width: 1, background: 'var(--amber)', opacity: .6 }} />
                      <div style={{ position: 'absolute', left: '25%', top: 0, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--amber)', whiteSpace: 'nowrap' }}>hoje</div>
                    </div>
                  </div>
                  <div ref={ganttRef} style={{ display: 'flex', flexDirection: 'column', gap: 6 }} />
                </div>
              </div>
            )}

            {/* ── CLIENTES ── */}
            {view === 'clientes' && (
              <div className="mock-main mock-view">
                <div className="mock-top"><div className="mock-pname">Clientes</div><div className="mock-phase">6 cadastrados</div></div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 110px 110px 90px', gap: 12, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--faint)', letterSpacing: '.1em', textTransform: 'uppercase', padding: '0 18px 8px', borderBottom: '1px solid var(--line)' }}>
                    <span>Cliente</span><span>Projetos</span><span>Em aberto</span><span>Status</span>
                  </div>
                  {[
                    { nome: 'Família Oliveira',           proj: 2, aberto: 1, sc: 'sc-w',  label: 'ativo' },
                    { nome: 'Construtora ABC Ltda.',      proj: 5, aberto: 3, sc: 'sc-ok', label: 'ativo' },
                    { nome: 'Pref. Mun. de Porto Alegre', proj: 3, aberto: 1, sc: 'sc-ok', label: 'ativo' },
                    { nome: 'Escritório XYZ Design',      proj: 1, aberto: 1, sc: 'sc-l',  label: 'atraso' },
                    { nome: 'Indústria Sulina S.A.',      proj: 2, aberto: 1, sc: 'sc-ok', label: 'ativo' },
                  ].map((c, i) => (
                    <div key={i} className="mock-task" style={{ gridTemplateColumns: '1fr 110px 110px 90px' }}>
                      <span style={{ fontWeight: 500 }}>{c.nome}</span>
                      <span className="mock-town" style={{ textAlign: 'center' }}>{c.proj}</span>
                      <span className="mock-town" style={{ textAlign: 'center' }}>{c.aberto}</span>
                      <span className={`sc ${c.sc}`}>{c.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── REVIT SYNC ── */}
            {view === 'revit' && (
              <div className="mock-main mock-view">
                <div className="mock-top"><div className="mock-pname">Revit Sync</div><span className="sc sc-ok" style={{ fontSize: 13 }}>⬡ Conectado</span></div>
                <div style={{ background: 'var(--bp3)', border: '1px solid rgba(107,207,127,.2)', borderRadius: 'var(--rsm)', padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--faint)', letterSpacing: '.08em', marginBottom: 5 }}>MODELO ATIVO</div>
                    <div style={{ fontSize: 16, fontWeight: 500 }}>Residência Alto Alegre.rvt</div>
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--green)' }}>Sync há 4 min</div>
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--faint)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Elementos vinculados a tarefas</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    { icon: '🪟', elem: 'Janela W-04', loc: 'Fachada Norte',    qtd: '2 tarefas', sc: 'sc-w',  label: '⚠ risco' },
                    { icon: '🧱', elem: 'Parede P-12', loc: 'Suíte master',     qtd: '1 tarefa',  sc: 'sc-ok', label: '✓ ok' },
                    { icon: '🏗️', elem: 'Laje L-01',   loc: 'Pavimento térreo', qtd: '3 tarefas', sc: 'sc-l',  label: '✕ atraso' },
                    { icon: '🚪', elem: 'Porta P-08',  loc: 'Área de serviço',  qtd: '1 tarefa',  sc: 'sc-ok', label: '✓ ok' },
                  ].map((el, i) => (
                    <div key={i} className="mock-task" style={{ gridTemplateColumns: '36px 1fr 130px 90px' }}>
                      <span style={{ fontSize: 20 }}>{el.icon}</span>
                      <span><span style={{ fontWeight: 500 }}>{el.elem}</span> · {el.loc}</span>
                      <span className="mock-tph">{el.qtd}</span>
                      <span className={`sc ${el.sc}`}>{el.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── IA INSIGHTS ── */}
            {view === 'ia' && (
              <div className="mock-main mock-view">
                <div className="mock-top"><div className="mock-pname">✦ IA Insights</div><div className="mock-phase">3 alertas · 2 sugestões</div></div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--faint)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Alertas ativos</div>
                <div style={{ background: 'rgba(255,107,107,.08)', border: '1px solid rgba(255,107,107,.2)', borderRadius: 'var(--rsm)', padding: '16px 18px', display: 'flex', gap: 14 }}>
                  <span style={{ fontSize: 18, flexShrink: 0 }}>🔴</span>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--red)', marginBottom: 4 }}>Atraso crítico detectado</div>
                    <div style={{ fontSize: 14, color: 'var(--dim)', lineHeight: 1.5 }}>"Detalhamento estrutural" está 2 dias atrasado e bloqueia a compatibilização hidráulica — risco de cascata para o prazo de entrega.</div>
                  </div>
                </div>
                <div style={{ background: 'var(--amberG)', border: '1px solid var(--amberB)', borderRadius: 'var(--rsm)', padding: '16px 18px', display: 'flex', gap: 14 }}>
                  <span style={{ fontSize: 18, flexShrink: 0 }}>🟡</span>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--amber)', marginBottom: 4 }}>Risco de prazo — 4 dias</div>
                    <div style={{ fontSize: 14, color: 'var(--dim)', lineHeight: 1.5 }}>Revisão de fachada tem prazo em 4 dias e ainda não foi iniciada. Verificar disponibilidade de Louise G.</div>
                  </div>
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--faint)', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: 6 }}>Sugestões da IA</div>
                <div style={{ background: 'var(--blueG)', border: '1px solid rgba(126,184,247,.2)', borderRadius: 'var(--rsm)', padding: '16px 18px', display: 'flex', gap: 14 }}>
                  <span style={{ fontSize: 18, flexShrink: 0 }}>✦</span>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--blue)', marginBottom: 4 }}>Redistribuição sugerida</div>
                    <div style={{ fontSize: 14, color: 'var(--dim)', lineHeight: 1.5 }}>Mover "Maquete eletrônica" para após compatibilização. Libera Piero L. para focar no estrutural sem conflito de agenda.</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
