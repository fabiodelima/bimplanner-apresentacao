import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import '../styles/s04-product.css';

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

const Icon = ({ d, size = 24, fill = 'none', ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}
    fill={fill} stroke="currentColor" strokeWidth={1.8}
    strokeLinecap="round" strokeLinejoin="round" {...rest}>
    <path d={d} />
  </svg>
);

const IconMulti = ({ children, size = 24, ...rest }) => (
  <svg viewBox="0 0 24 24" width={size} height={size}
    fill="none" stroke="currentColor" strokeWidth={1.8}
    strokeLinecap="round" strokeLinejoin="round" {...rest}>
    {children}
  </svg>
);

const RIBBON_TABS = ['Architecture', 'Structure', 'Annotate', 'Analyze', 'Collaborate', 'View', 'BIMPlanner'];

const RIBBON_ICONS = [
  <IconMulti key="arch" size={28}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/>
    <path d="M2 22h20"/>
    <path d="M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01"/>
  </IconMulti>,
  <Icon key="struct" size={28} d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />,
  <Icon key="ann" size={28} d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />,
  <Icon key="analyze" size={28} d="M18 20V10M12 20V4M6 20v-6" />,
  <IconMulti key="collab" size={28}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </IconMulti>,
  <IconMulti key="view" size={28}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
    <circle cx="12" cy="12" r="3"/>
  </IconMulti>,
  <IconMulti key="bim" size={28}>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <path d="M9 2h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/>
    <path d="M9 12h6M9 16h4"/>
  </IconMulti>,
];

const SCALES = [0.72, 0.85, 1.0, 1.18, 1.38];

const PLUGIN_TABS = ['TAREFAS', 'FASE', 'IA', 'SYNC'];

const TASKS = [
  { done: true,  name: 'Especificação de esquadria', meta: 'Louise G. · ANTEPROJETO' },
  { done: false, name: 'Revisão de vedação e folga',  meta: 'Piero L. · em risco', risk: true },
];

function RevitMockupContent({ activeTab, setActiveTab, selectedRibbon, setSelectedRibbon, onToggleFull, scaleIdx, shrink, grow }) {
  return (
    <>
      {/* Title bar */}
      <div style={{
        background: '#2d2d30',
        borderBottom: '1px solid #333',
        padding: '14px 22px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', gap: 7 }}>
          <div
            onClick={onToggleFull}
            title="Expandir / fechar"
            style={{ width: 14, height: 14, borderRadius: '50%', background: '#ff5f57', cursor: 'pointer' }}
          />
          <div
            onClick={shrink}
            title="Reduzir escala"
            style={{ width: 14, height: 14, borderRadius: '50%', background: '#febc2e', cursor: scaleIdx > 0 ? 'pointer' : 'default', opacity: scaleIdx > 0 ? 1 : 0.4 }}
          />
          <div
            onClick={grow}
            title="Aumentar escala"
            style={{ width: 14, height: 14, borderRadius: '50%', background: '#28c840', cursor: scaleIdx < SCALES.length - 1 ? 'pointer' : 'default', opacity: scaleIdx < SCALES.length - 1 ? 1 : 0.4 }}
          />
        </div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 14, color: '#888', letterSpacing: '.06em', flex: 1, textAlign: 'center' }}>
          Autodesk Revit 2025 — Residência Alto Alegre.rvt
        </div>
        {/* Expand toggle icon */}
        <div
          onClick={onToggleFull}
          title="Expandir / fechar"
          style={{ color: '#666', cursor: 'pointer', display: 'flex', alignItems: 'center', transition: 'color .2s' }}
          onMouseEnter={e => e.currentTarget.style.color = '#aaa'}
          onMouseLeave={e => e.currentTarget.style.color = '#666'}
        >
          <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
          </svg>
        </div>
      </div>

      {/* Ribbon */}
      <div style={{
        background: '#3c3f41',
        borderBottom: '1px solid #555',
        padding: '0 22px',
        display: 'flex',
        alignItems: 'stretch',
        gap: 4,
        height: 92,
        flexShrink: 0,
      }}>
        {RIBBON_TABS.map((tab, i) => (
          <div
            key={tab}
            onClick={() => setSelectedRibbon(tab)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 20px',
              fontFamily: 'var(--mono)',
              fontSize: 13,
              color: selectedRibbon === tab
                ? (tab === 'BIMPlanner' ? 'var(--amber)' : 'var(--blue)')
                : '#aaa',
              letterSpacing: '.06em',
              cursor: 'pointer',
              borderBottom: selectedRibbon === tab
                ? `2px solid ${tab === 'BIMPlanner' ? 'var(--amber)' : 'var(--blue)'}`
                : '2px solid transparent',
              gap: 6,
              transition: 'all .2s',
            }}
          >
            <span style={{
              display: 'flex',
              color: selectedRibbon === tab
                ? (tab === 'BIMPlanner' ? 'var(--amber)' : 'var(--blue)')
                : '#aaa',
            }}>
              {RIBBON_ICONS[i]}
            </span>
            {tab}
          </div>
        ))}
      </div>

      {/* Body: Viewport + Plugin Panel */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 400px',
        flex: 1,
        minHeight: 0,
        zoom: SCALES[scaleIdx],
      }}>
        {/* Viewport */}
        <div style={{
          background: 'linear-gradient(180deg, #1a2535 0%, #0d1b2a 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Grid lines */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(100,140,180,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(100,140,180,.04) 1px,transparent 1px)',
            backgroundSize: '48px 48px',
          }} />

          {/* Floor plan overlay */}
          <div style={{
            position: 'absolute', top: 20, left: 20,
            background: 'rgba(20,40,70,.85)',
            border: '1px solid #2d4a6d',
            borderRadius: 'var(--rsm)',
            padding: 14,
            width: 200,
          }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--blue)', letterSpacing: '.08em', marginBottom: 8 }}>PLANTA · PAV. TIPO</div>
            <div style={{ width: '100%', height: 110, background: 'rgba(30,60,100,.5)', border: '1px solid #2d4a6d', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)' }}>
              <svg viewBox="0 0 24 24" width={48} height={48} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z"/>
              </svg>
            </div>
          </div>

          {/* Building schematic — floor plan cells */}
          <div style={{
            position: 'absolute',
            bottom: 70, left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(30,50,90,.7)',
            border: '1px solid rgba(126,184,247,.25)',
            borderRadius: 6,
            padding: 20,
            width: 560,
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginBottom: 10 }}>
              {[...Array(9)].map((_, i) => (
                <div key={i} style={{
                  height: 72,
                  background: i === 4 ? 'rgba(232,201,122,.35)' : 'rgba(100,140,180,.12)',
                  border: `1px solid ${i === 4 ? 'var(--amber)' : 'rgba(126,184,247,.18)'}`,
                  borderRadius: 3,
                  position: 'relative',
                }}>
                  {i === 4 && (
                    <div style={{
                      position: 'absolute', top: -28, left: '50%', transform: 'translateX(-50%)',
                      background: 'rgba(10,25,60,.95)', border: '1px solid var(--blue)',
                      borderRadius: 4, padding: '4px 12px',
                      fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--blue)',
                      whiteSpace: 'nowrap',
                    }}>Janela W-04 · AP</div>
                  )}
                </div>
              ))}
            </div>
            <div style={{
              fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--green)',
              letterSpacing: '.06em',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
              2 tarefas vinculadas
            </div>
          </div>

          {/* Selected element badge */}
          <div style={{
            position: 'absolute', bottom: 20, left: 20,
            background: 'rgba(20,40,70,.9)',
            border: '1px solid var(--blue)',
            borderRadius: 'var(--rsm)',
            padding: '12px 18px',
          }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--blue)', letterSpacing: '.08em', marginBottom: 5 }}>ELEMENTO SELECIONADO</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 15, color: '#e0e0e0' }}>Janela W-04 · Fachada Norte</div>
          </div>

          {/* Status bar */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: '#252526',
            borderTop: '1px solid #333',
            padding: '6px 20px',
            fontFamily: 'var(--mono)',
            fontSize: 12,
            color: '#666',
            letterSpacing: '.06em',
            display: 'flex',
            gap: 28,
          }}>
            <span>Modelo: Residência Alto Alegre.rvt</span>
            <span>Fase: Anteprojeto</span>
            <span style={{ color: 'var(--amber)' }}>BIMPlanner: 3 alertas ativos</span>
            <span>Sync: há 2 min</span>
          </div>
        </div>

        {/* Plugin Panel */}
        <div style={{
          background: 'rgba(10,30,80,0.7)',
          backdropFilter: 'var(--glass-blur)',
          WebkitBackdropFilter: 'var(--glass-blur)',
          borderLeft: '1px solid var(--lineB)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* amber top line */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, var(--amber), #f5d896)' }} />

          {/* Plugin header */}
          <div style={{ padding: '20px 24px 0', borderBottom: '1px solid var(--lineB)' }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 21, color: 'var(--white)', marginBottom: 3 }}>
              BIM<span style={{ color: 'var(--amber)' }}>Planner</span>
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--faint)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 14 }}>
              Assistente de Projeto
            </div>

            {/* Plugin tabs */}
            <div style={{ display: 'flex' }}>
              {PLUGIN_TABS.map(tab => (
                <div
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    flex: 1,
                    padding: '10px 4px',
                    fontFamily: 'var(--mono)',
                    fontSize: 12,
                    color: activeTab === tab ? 'var(--amber)' : 'var(--faint)',
                    textAlign: 'center',
                    cursor: 'pointer',
                    borderBottom: `2px solid ${activeTab === tab ? 'var(--amber)' : 'transparent'}`,
                    letterSpacing: '.06em',
                    transition: 'all .2s',
                  }}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>

          {/* Plugin body */}
          <div style={{ flex: 1, padding: 20, display: 'flex', flexDirection: 'column', gap: 14, overflowY: 'auto' }}>
            {activeTab === 'TAREFAS' && (
              <>
                <div style={{
                  background: 'var(--bp2)',
                  border: '1px solid var(--amberB)',
                  borderRadius: 'var(--rsm)',
                  padding: '13px 16px',
                }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--amber)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 5 }}>Elemento vinculado</div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 16, fontWeight: 500 }}>Janela W-04 · Fachada Norte</div>
                </div>

                <div style={{
                  background: 'rgba(232,201,122,.08)',
                  border: '1px solid var(--amberB)',
                  borderRadius: 'var(--rsm)',
                  padding: '13px 16px',
                  display: 'flex',
                  gap: 12,
                  alignItems: 'flex-start',
                }}>
                  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" stroke="none" style={{ color: 'var(--amber)', flexShrink: 0, marginTop: 1 }}>
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
                  </svg>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'var(--amber)', lineHeight: 1.5 }}>
                    Este elemento tem tarefa em risco: revisão de esquadria pendente há 3 dias.
                  </div>
                </div>

                <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--faint)', letterSpacing: '.1em', textTransform: 'uppercase' }}>
                  Tarefas vinculadas
                </div>

                {TASKS.map((t, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    padding: '12px 14px',
                    background: 'var(--bp2)',
                    border: `1px solid ${t.risk ? 'rgba(255,107,107,.25)' : 'var(--lineB)'}`,
                    borderRadius: 'var(--rsm)',
                    cursor: 'pointer',
                    transition: 'border-color .2s',
                  }}>
                    <div style={{
                      width: 18, height: 18,
                      border: `1.5px solid ${t.done ? 'var(--green)' : 'var(--lineC)'}`,
                      borderRadius: 4,
                      flexShrink: 0,
                      marginTop: 1,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: t.done ? 'var(--green)' : 'transparent',
                      color: 'var(--bp)',
                    }}>
                      {t.done && (
                        <svg viewBox="0 0 24 24" width={11} height={11} fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5"/>
                        </svg>
                      )}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 3, lineHeight: 1.3 }}>{t.name}</div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: t.risk ? 'rgba(255,107,107,.8)' : 'var(--faint)', letterSpacing: '.04em' }}>{t.meta}</div>
                    </div>
                  </div>
                ))}
              </>
            )}

            {activeTab === 'FASE' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--faint)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Fase atual</div>
                <div style={{ background: 'var(--bp2)', border: '1px solid var(--amberB)', borderRadius: 'var(--rsm)', padding: '16px 18px' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--amber)', letterSpacing: '.1em', marginBottom: 7 }}>ANTEPROJETO</div>
                  <div style={{ fontSize: 15, color: 'var(--dim)', lineHeight: 1.5 }}>78% concluído · 4 dias restantes</div>
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--faint)', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: 4 }}>Próxima fase</div>
                <div style={{ background: 'var(--bp2)', border: '1px solid var(--lineB)', borderRadius: 'var(--rsm)', padding: '16px 18px', opacity: .6 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--blue)', letterSpacing: '.1em', marginBottom: 7 }}>PROJETO EXECUTIVO</div>
                  <div style={{ fontSize: 15, color: 'var(--dim)', lineHeight: 1.5 }}>Início estimado: 20 mai 2026</div>
                </div>
              </div>
            )}

            {activeTab === 'IA' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--faint)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Alertas IA · elemento</div>
                <div style={{ background: 'rgba(255,107,107,.08)', border: '1px solid rgba(255,107,107,.25)', borderRadius: 'var(--rsm)', padding: '15px 16px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <svg viewBox="0 0 24 24" width={16} height={16} style={{ color: '#ff6b6b', flexShrink: 0, marginTop: 1 }}>
                    <circle cx="12" cy="12" r="9" fill="currentColor"/>
                  </svg>
                  <div style={{ fontSize: 14, color: 'var(--dim)', lineHeight: 1.5 }}>Esquadria W-04 tem especificação divergente do memorial descritivo v2.</div>
                </div>
                <div style={{ background: 'var(--amberG)', border: '1px solid var(--amberB)', borderRadius: 'var(--rsm)', padding: '15px 16px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" stroke="none" style={{ color: 'var(--amber)', flexShrink: 0, marginTop: 1 }}>
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
                  </svg>
                  <div style={{ fontSize: 14, color: 'var(--amber)', lineHeight: 1.5 }}>Verificar folga de instalação conforme NBR 10821.</div>
                </div>
              </div>
            )}

            {activeTab === 'SYNC' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--faint)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Status de sincronização</div>
                <div style={{ background: 'rgba(107,207,127,.08)', border: '1px solid rgba(107,207,127,.2)', borderRadius: 'var(--rsm)', padding: '15px 16px' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--green)', letterSpacing: '.08em', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--green)' }}>
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    </svg>
                    CONECTADO
                  </div>
                  <div style={{ fontSize: 15, color: 'var(--dim)' }}>Residência Alto Alegre.rvt</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--faint)', marginTop: 7 }}>Último sync: há 2 min · 14 elementos vinculados</div>
                </div>
              </div>
            )}
          </div>

          {/* Link button */}
          <div style={{ padding: '0 20px 20px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              background: 'var(--amberG)', border: '1px solid var(--amberB)',
              borderRadius: 'var(--rsm)', padding: 12,
              fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--amber)',
              letterSpacing: '.06em', cursor: 'pointer',
              transition: 'all .2s',
            }}>
              <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v8M8 12h8"/>
              </svg>
              Vincular nova tarefa ao elemento
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mockupShellStyle = {
  background: '#1e1e1e',
  border: '1px solid #333',
  borderRadius: 'var(--r)',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
};

export default function S05Revit() {
  const [activeTab, setActiveTab] = useState('TAREFAS');
  const [selectedRibbon, setSelectedRibbon] = useState('BIMPlanner');
  const [fullscreen, setFullscreen] = useState(false);
  const [scaleIdx, setScaleIdx] = useState(2);

  const toggleFull = () => setFullscreen(f => !f);
  const shrink = () => setScaleIdx(i => Math.max(0, i - 1));
  const grow   = () => setScaleIdx(i => Math.min(SCALES.length - 1, i + 1));

  useEffect(() => {
    if (!fullscreen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        setFullscreen(false);
      }
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [fullscreen]);

  const contentProps = { activeTab, setActiveTab, selectedRibbon, setSelectedRibbon, onToggleFull: toggleFull, scaleIdx, shrink, grow };

  return (
    <div className="slide-inner prod-slide-inner" style={{ padding: '36px 80px 36px' }}>
      {/* Header */}
      <div className="prod-head" style={{ alignItems: 'center', marginBottom: 12 }}>
        <h2 className="head" style={{ marginBottom: 0, fontSize: 52 }}>
          O BIMPlanner <em>dentro do Revit</em>.
        </h2>
        <div style={chipStyle}>Mockup funcional</div>
      </div>

      {/* Revit Window (normal) */}
      <div
        className="mockup"
        style={{ ...mockupShellStyle, flex: 1, minHeight: 0, ...(fullscreen ? { visibility: 'hidden' } : {}) }}
      >
        <RevitMockupContent {...contentProps} />
      </div>

      {/* Fullscreen portal */}
      {fullscreen && createPortal(
        <div className="s-revit" style={{ color: 'var(--white)', fontFamily: 'var(--sans)' }}>
          <div className="mockup-backdrop" onClick={toggleFull} />
          <div className="mockup mockup--popup" style={{ ...mockupShellStyle, height: 'auto' }}>
            <RevitMockupContent {...contentProps} />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
