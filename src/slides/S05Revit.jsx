import { useState } from 'react';
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

const RIBBON_TABS = ['Architecture', 'Structure', 'Annotate', 'Analyze', 'Collaborate', 'View', 'BIMPlanner'];
const RIBBON_ICONS = ['🏛', '⬡', '✏️', '📊', '🤝', '👁', '📋'];

const PLUGIN_TABS = ['TAREFAS', 'FASE', 'IA', 'SYNC'];

const TASKS = [
  { done: true,  name: 'Especificação de esquadria', meta: 'Louise G. · ANTEPROJETO' },
  { done: false, name: 'Revisão de vedação e folga',  meta: 'Piero L. · em risco', risk: true },
];

export default function S05Revit() {
  const [activeTab, setActiveTab] = useState('TAREFAS');
  const [selectedRibbon, setSelectedRibbon] = useState('BIMPlanner');

  return (
    <div className="slide-inner prod-slide-inner">
      {/* Header */}
      <div className="prod-head" style={{ alignItems: 'center' }}>
        <h2 className="head" style={{ marginBottom: 0 }}>
          O BIMPlanner <em>dentro do Revit</em>.
        </h2>
        <div style={chipStyle}>Mockup funcional</div>
      </div>

      {/* Revit Window */}
      <div
        className="mockup"
        style={{
          background: '#1e1e1e',
          border: '1px solid #333',
          borderRadius: 'var(--r)',
          overflow: 'hidden',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: 0,
        }}
      >
        {/* Title bar */}
        <div style={{
          background: '#2d2d30',
          borderBottom: '1px solid #333',
          padding: '10px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', gap: 6 }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 12, color: '#888', letterSpacing: '.06em', flex: 1, textAlign: 'center' }}>
            Autodesk Revit 2025 — Residência Alto Alegre.rvt
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
          height: 72,
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
                padding: '0 16px',
                fontFamily: 'var(--mono)',
                fontSize: 11,
                color: selectedRibbon === tab
                  ? (tab === 'BIMPlanner' ? 'var(--amber)' : 'var(--blue)')
                  : '#aaa',
                letterSpacing: '.06em',
                cursor: 'pointer',
                borderBottom: selectedRibbon === tab
                  ? `2px solid ${tab === 'BIMPlanner' ? 'var(--amber)' : 'var(--blue)'}`
                  : '2px solid transparent',
                gap: 5,
                transition: 'all .2s',
              }}
            >
              <span style={{ fontSize: 20 }}>{RIBBON_ICONS[i]}</span>
              {tab}
            </div>
          ))}
        </div>

        {/* Body: Viewport + Plugin Panel */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 320px',
          flex: 1,
          minHeight: 0,
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
              padding: 12,
              width: 160,
            }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--blue)', letterSpacing: '.08em', marginBottom: 6 }}>PLANTA · PAV. TIPO</div>
              <div style={{ width: '100%', height: 80, background: 'rgba(30,60,100,.5)', border: '1px solid #2d4a6d', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28 }}>📐</div>
            </div>

            {/* Building schematic — floor plan cells */}
            <div style={{
              position: 'absolute',
              bottom: 60, left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(30,50,90,.7)',
              border: '1px solid rgba(126,184,247,.25)',
              borderRadius: 6,
              padding: 14,
              width: 220,
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6, marginBottom: 6 }}>
                {[...Array(9)].map((_, i) => (
                  <div key={i} style={{
                    height: 28,
                    background: i === 4 ? 'rgba(232,201,122,.35)' : 'rgba(100,140,180,.12)',
                    border: `1px solid ${i === 4 ? 'var(--amber)' : 'rgba(126,184,247,.18)'}`,
                    borderRadius: 3,
                    position: 'relative',
                  }}>
                    {i === 4 && (
                      <div style={{
                        position: 'absolute', top: -22, left: '50%', transform: 'translateX(-50%)',
                        background: 'rgba(10,25,60,.95)', border: '1px solid var(--blue)',
                        borderRadius: 4, padding: '2px 8px',
                        fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--blue)',
                        whiteSpace: 'nowrap',
                      }}>Janela W-04 · AP</div>
                    )}
                  </div>
                ))}
              </div>
              <div style={{
                fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--green)',
                letterSpacing: '.06em',
              }}>✓ 2 tarefas</div>
            </div>

            {/* Selected element badge */}
            <div style={{
              position: 'absolute', bottom: 16, left: 20,
              background: 'rgba(20,40,70,.9)',
              border: '1px solid var(--blue)',
              borderRadius: 'var(--rsm)',
              padding: '10px 14px',
            }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--blue)', letterSpacing: '.08em', marginBottom: 4 }}>ELEMENTO SELECIONADO</div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: '#e0e0e0' }}>Janela W-04 · Fachada Norte</div>
            </div>

            {/* Status bar */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: '#252526',
              borderTop: '1px solid #333',
              padding: '5px 20px',
              fontFamily: 'var(--mono)',
              fontSize: 10,
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
            <div style={{ padding: '16px 20px 0', borderBottom: '1px solid var(--lineB)' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 17, color: 'var(--white)', marginBottom: 2 }}>
                BIM<span style={{ color: 'var(--amber)' }}>Planner</span>
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--faint)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 12 }}>
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
                      padding: '8px 4px',
                      fontFamily: 'var(--mono)',
                      fontSize: 10,
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
            <div style={{ flex: 1, padding: 16, display: 'flex', flexDirection: 'column', gap: 12, overflowY: 'auto' }}>
              {activeTab === 'TAREFAS' && (
                <>
                  {/* Context card */}
                  <div style={{
                    background: 'var(--bp2)',
                    border: '1px solid var(--amberB)',
                    borderRadius: 'var(--rsm)',
                    padding: '11px 14px',
                  }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--amber)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: 4 }}>Elemento vinculado</div>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 500 }}>Janela W-04 · Fachada Norte</div>
                  </div>

                  {/* AI alert */}
                  <div style={{
                    background: 'rgba(232,201,122,.08)',
                    border: '1px solid var(--amberB)',
                    borderRadius: 'var(--rsm)',
                    padding: '11px 14px',
                    display: 'flex',
                    gap: 10,
                  }}>
                    <span style={{ fontSize: 13, flexShrink: 0 }}>✦</span>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--amber)', lineHeight: 1.5 }}>
                      Este elemento tem tarefa em risco: revisão de esquadria pendente há 3 dias.
                    </div>
                  </div>

                  {/* Tasks label */}
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--faint)', letterSpacing: '.1em', textTransform: 'uppercase' }}>
                    Tarefas vinculadas
                  </div>

                  {/* Task list */}
                  {TASKS.map((t, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      padding: '10px 12px',
                      background: 'var(--bp2)',
                      border: `1px solid ${t.risk ? 'rgba(255,107,107,.25)' : 'var(--lineB)'}`,
                      borderRadius: 'var(--rsm)',
                      cursor: 'pointer',
                      transition: 'border-color .2s',
                    }}>
                      <div style={{
                        width: 16, height: 16,
                        border: `1.5px solid ${t.done ? 'var(--green)' : 'var(--lineC)'}`,
                        borderRadius: 4,
                        flexShrink: 0,
                        marginTop: 1,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 9,
                        background: t.done ? 'var(--green)' : 'transparent',
                        color: 'var(--bp)',
                      }}>
                        {t.done ? '✓' : ''}
                      </div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 500, marginBottom: 2, lineHeight: 1.3 }}>{t.name}</div>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: t.risk ? 'rgba(255,107,107,.8)' : 'var(--faint)', letterSpacing: '.04em' }}>{t.meta}</div>
                      </div>
                    </div>
                  ))}
                </>
              )}

              {activeTab === 'FASE' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--faint)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Fase atual</div>
                  <div style={{ background: 'var(--bp2)', border: '1px solid var(--amberB)', borderRadius: 'var(--rsm)', padding: '14px 16px' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--amber)', letterSpacing: '.1em', marginBottom: 6 }}>ANTEPROJETO</div>
                    <div style={{ fontSize: 13, color: 'var(--dim)', lineHeight: 1.5 }}>78% concluído · 4 dias restantes</div>
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--faint)', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: 4 }}>Próxima fase</div>
                  <div style={{ background: 'var(--bp2)', border: '1px solid var(--lineB)', borderRadius: 'var(--rsm)', padding: '14px 16px', opacity: .6 }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--blue)', letterSpacing: '.1em', marginBottom: 6 }}>PROJETO EXECUTIVO</div>
                    <div style={{ fontSize: 13, color: 'var(--dim)', lineHeight: 1.5 }}>Início estimado: 20 mai 2026</div>
                  </div>
                </div>
              )}

              {activeTab === 'IA' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--faint)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Alertas IA · elemento</div>
                  <div style={{ background: 'rgba(255,107,107,.08)', border: '1px solid rgba(255,107,107,.25)', borderRadius: 'var(--rsm)', padding: '13px 14px', display: 'flex', gap: 10 }}>
                    <span style={{ flexShrink: 0 }}>🔴</span>
                    <div style={{ fontSize: 12, color: 'var(--dim)', lineHeight: 1.5 }}>Esquadria W-04 tem especificação divergente do memorial descritivo v2.</div>
                  </div>
                  <div style={{ background: 'var(--amberG)', border: '1px solid var(--amberB)', borderRadius: 'var(--rsm)', padding: '13px 14px', display: 'flex', gap: 10 }}>
                    <span style={{ flexShrink: 0 }}>✦</span>
                    <div style={{ fontSize: 12, color: 'var(--amber)', lineHeight: 1.5 }}>Verificar folga de instalação conforme NBR 10821.</div>
                  </div>
                </div>
              )}

              {activeTab === 'SYNC' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--faint)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Status de sincronização</div>
                  <div style={{ background: 'rgba(107,207,127,.08)', border: '1px solid rgba(107,207,127,.2)', borderRadius: 'var(--rsm)', padding: '13px 14px' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--green)', letterSpacing: '.08em', marginBottom: 5 }}>⬡ CONECTADO</div>
                    <div style={{ fontSize: 13, color: 'var(--dim)' }}>Residência Alto Alegre.rvt</div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--faint)', marginTop: 6 }}>Último sync: há 2 min · 14 elementos vinculados</div>
                  </div>
                </div>
              )}
            </div>

            {/* Link button */}
            <div style={{ padding: '0 16px 16px' }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                background: 'var(--amberG)', border: '1px solid var(--amberB)',
                borderRadius: 'var(--rsm)', padding: 10,
                fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--amber)',
                letterSpacing: '.06em', cursor: 'pointer',
                transition: 'all .2s',
              }}>
                ⊕ Vincular nova tarefa ao elemento
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
