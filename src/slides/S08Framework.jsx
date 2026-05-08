import { useState } from 'react';

const DIMENSIONS = [
  {
    id: 0, n: '01', icon: '💡', label: 'Inovação', badge: 'ok', badgeText: 'Atende',
    summary: 'Terminologia AEC nativa, metodologia reflexiva patenteada (INPI) e integração Revit — três diferenciais inexistentes simultaneamente em qualquer concorrente nacional. TRL 4–5, validação planejada com escritórios parceiros e incubadora Hestia/UFRGS.',
  },
  {
    id: 1, n: '02', icon: '👥', label: 'Cliente', badge: 'ok', badgeText: 'Atende',
    summary: 'Jornada completa mapeada — descoberta, conversão freemium, retenção e expansão. Dor validada: falta de planner que fale AEC. Cocriação via marketplace de templates e feedback in-app contínuo.',
  },
  {
    id: 2, n: '03', icon: '🤝', label: 'Parceiros', badge: 'ok', badgeText: 'Atende',
    summary: 'Autodesk (API Forge/Revit via ADP), UFRGS/PPGCI, incubadora Hestia/UFRGS e escritórios beta para co-desenvolvimento. Compartilhamento de infraestrutura e rede. Internacionalização via distribuidores Autodesk em Portugal, Espanha e América Latina.',
  },
  {
    id: 3, n: '04', icon: '💰', label: 'Finanças', badge: 'partial', badgeText: 'Parcial',
    summary: 'Três fontes de receita: assinatura por assento (Free/Pro/Team), marketplace de templates e implementação customizada. Modelo freemium com PLG reduz CAC. Custos mapeados — projeções detalhadas (CAC, LTV, break-even) na próxima etapa.',
  },
  {
    id: 4, n: '05', icon: '📊', label: 'Mercado', badge: 'ok', badgeText: 'Atende',
    summary: '180 mil escritórios AEC registrados. Decreto 9.983/2019 torna BIM obrigatório em obras públicas federais a partir de 2024, criando demanda regulatória. Concorrência direta escassa no Brasil. Estratégia PLG + inbound + outbound com presença em BIM World, FEICON e CAU/CREA.',
  },
  {
    id: 5, n: '06', icon: '🏆', label: 'Qualificação do time', badge: 'ok', badgeText: 'Atende',
    summary: 'Pós-graduandos PPGCI/UFRGS com formações em engenharia civil, arquitetura e gestão da inovação. Time multidisciplinar cobre as três dimensões de uma startup técnica: engenharia (Revit API), gerencial (produto/inovação) e comercial (growth e parcerias).',
  },
];

export default function S08Framework() {
  const [active, setActive] = useState(0);
  const dim = DIMENSIONS[active];

  return (
    <div
      className="slide-inner"
      style={{
        justifyContent: 'flex-start',
        padding: '44px 90px 48px',
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Header */}
      <h2 className="head" style={{ marginBottom: 10, fontSize: 52 }}>
        Framework <em>Elementos Essenciais</em> (Lago, 2022).
      </h2>
      <p style={{ fontSize: 20, color: 'var(--dim)', lineHeight: 1.5, maxWidth: 1100, marginBottom: 18 }}>
        Avaliação nas <strong>seis dimensões</strong> do framework de Elementos Essenciais para Propostas de
        Negócio de Startups (LAGO, 2022 — PPGEP/UFRGS). Selecione uma dimensão para ver o resumo.
      </p>

      {/* Body: nav + panel */}
      <div style={{
        display: 'flex',
        flex: 1,
        minHeight: 0,
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 'var(--r)',
        overflow: 'hidden',
        boxShadow: 'var(--glass-shadow)',
      }}>

        {/* Sidebar nav */}
        <nav style={{
          width: '340px',
          flexShrink: 0,
          background: 'rgba(8,18,55,0.55)',
          backdropFilter: 'var(--glass-blur)',
          WebkitBackdropFilter: 'var(--glass-blur)',
          borderRight: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {DIMENSIONS.map((d) => (
            <div
              key={d.id}
              onClick={() => setActive(d.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '0 28px',
                cursor: 'pointer',
                transition: 'background .2s, border-color .2s',
                borderLeft: `5px solid ${active === d.id ? 'var(--amber)' : 'transparent'}`,
                background: active === d.id ? 'rgba(232,201,122,0.13)' : 'transparent',
                flex: 1,
                borderBottom: d.id < 5 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              <span style={{ fontFamily: 'var(--mono)', fontSize: 13, color: active === d.id ? 'var(--amber)' : 'var(--faint)', letterSpacing: '.06em', minWidth: 24, flexShrink: 0 }}>{d.n}</span>
              <span style={{ fontSize: 26, lineHeight: 1, flexShrink: 0 }}>{d.icon}</span>
              <span style={{
                flex: 1,
                fontSize: 18,
                color: active === d.id ? 'var(--amber)' : 'rgba(248,250,255,0.8)',
                fontWeight: active === d.id ? 500 : 400,
                lineHeight: 1.3,
              }}>{d.label}</span>
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                padding: '4px 10px',
                borderRadius: 100,
                letterSpacing: '.04em',
                flexShrink: 0,
                color: d.badge === 'ok' ? 'var(--green)' : 'var(--amber)',
                background: d.badge === 'ok' ? 'rgba(107,207,127,.12)' : 'rgba(232,201,122,.12)',
                border: `1px solid ${d.badge === 'ok' ? 'rgba(107,207,127,.28)' : 'var(--amberB)'}`,
              }}>✓</span>
            </div>
          ))}
        </nav>

        {/* Content panel — só o summary, ocupa tudo */}
        <div style={{
          flex: 1,
          minWidth: 0,
          minHeight: 0,
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'var(--glass-blur)',
          WebkitBackdropFilter: 'var(--glass-blur)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '48px 64px',
          boxSizing: 'border-box',
          gap: 20,
        }}>
          <span style={{ fontSize: 56, lineHeight: 1 }}>{dim.icon}</span>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 42, lineHeight: 1.1 }}>{dim.label}</div>
          <p style={{ fontSize: 18, color: 'var(--dim)', lineHeight: 1.7, margin: 0, maxWidth: 680 }}>{dim.summary}</p>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: 'var(--mono)',
            fontSize: 12,
            padding: '6px 16px',
            borderRadius: 100,
            letterSpacing: '.06em',
            color: dim.badge === 'ok' ? 'var(--green)' : 'var(--amber)',
            background: dim.badge === 'ok' ? 'rgba(107,207,127,.1)' : 'rgba(232,201,122,.1)',
            border: `1px solid ${dim.badge === 'ok' ? 'rgba(107,207,127,.25)' : 'var(--amberB)'}`,
          }}>✓ {dim.badgeText}</span>
        </div>
      </div>
    </div>
  );
}
