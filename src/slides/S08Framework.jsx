import { useState } from 'react';

function Icon({ name, size = 28, color = 'currentColor' }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'lightbulb': return <svg {...p}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>;
    case 'users': return <svg {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    case 'link2': return <svg {...p}><path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/></svg>;
    case 'dollar': return <svg {...p}><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
    case 'barchart': return <svg {...p}><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>;
    case 'award': return <svg {...p}><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>;
    default: return null;
  }
}

const DIMENSIONS = [
  {
    id: 0, n: '01', icon: 'lightbulb', label: 'Inovação', badge: 'ok', badgeText: 'Atende',
    summary: 'Diferencial tecnológico, patenteabilidade, sustentabilidade e infraestrutura validados. TRL 4–5.',
    qa: [
      { n: 'P1', q: 'Inovação superior aos concorrentes?', a: 'Sim. Nenhum concorrente nacional reúne simultaneamente: terminologia AEC nativa, metodologia reflexiva patenteada e integração Revit. Os três juntos criam um diferencial defensável.' },
      { n: 'P2', q: 'Incorpora IA e tecnologias emergentes?', a: 'Sim. IA para priorização e alertas preditivos. TRL estimado em 4–5, validação planejada com escritórios parceiros e a incubadora Hestia/UFRGS.' },
      { n: 'P3', q: 'Sustentabilidade econômica, social e ambiental?', a: 'Freemium democratiza acesso para autônomos. Digitalização reduz impressão e deslocamentos. SaaS é economicamente escalável.' },
      { n: 'P4', q: 'Mecanismos de apropriabilidade?', a: 'Patente INPI (base metodológica) + registro de software + contratos de confidencialidade com parceiros beta.' },
      { n: 'P7', q: 'Validação com stakeholders?', a: 'Em andamento. Beta planejado com escritórios parceiros e piloto com órgão público para validação BIM.' },
    ],
  },
  {
    id: 1, n: '02', icon: 'users', label: 'Cliente', badge: 'ok', badgeText: 'Atende',
    summary: 'Jornada completa mapeada, dor validada, cocriação via marketplace e feedback in-app.',
    qa: [
      { n: 'P8',  q: 'Canais de interação detalhados?', a: 'Jornada completa: descoberta (conteúdo, feiras, conselhos profissionais) → conversão freemium → retenção (chat, webinars, cursos) → expansão (upgrade de plano).' },
      { n: 'P9',  q: 'Conhecimento aprofundado do cliente?', a: 'Cliente primário: coordenador de projetos AEC com dor em visibilidade. Cliente secundário: arquiteto/engenheiro autônomo que precisa de controle sem complexidade.' },
      { n: 'P10', q: 'Feedback e cocriação de valor?', a: 'Feedback via in-app. Marketplace de templates permite que a comunidade crie e comercialize conteúdo especializado — cocriação ativa.' },
      { n: 'P11', q: 'Orientação clara para o cliente?', a: 'Cada feature parte de uma dor documentada: ausência de planner que entenda fases AEC, conecte tarefas ao BIM e auxilie priorização.' },
    ],
  },
  {
    id: 2, n: '03', icon: 'link2', label: 'Parceiros', badge: 'ok', badgeText: 'Atende',
    summary: 'Ecossistema com Autodesk, UFRGS, Hestia e escritórios beta. Internacionalização como roadmap.',
    qa: [
      { n: 'P12', q: 'Interação com parceiros estratégicos?', a: 'Autodesk via Programa de Desenvolvedores (ADP / API Forge/Revit). Escritórios parceiros via programa beta com acesso antecipado e co-desenvolvimento.' },
      { n: 'P13', q: 'Colaboração com centros de P&D?', a: 'UFRGS/PPGCI como parceira de pesquisa e validação metodológica. Incubadora Hestia/UFRGS para mentoria, infraestrutura e rede de contatos.' },
      { n: 'P14', q: 'Colaboração com outras empresas?', a: 'Autodesk como parceira tecnológica central. Empresas de gestão de obras como parceiras potenciais de integração futura no ecossistema AEC.' },
      { n: 'P16', q: 'Parcerias internacionais?', a: 'Roadmap futuro: Portugal, Espanha e América Latina — mercados AEC com crescente adoção de BIM.' },
    ],
  },
  {
    id: 3, n: '04', icon: 'dollar', label: 'Finanças', badge: 'partial', badgeText: 'Parcial',
    summary: '3 fontes de receita, modelo freemium com PLG, custos mapeados. Projeções na próxima etapa.',
    qa: [
      { n: 'P18', q: 'Investimento em capital humano?', a: 'Equipe mínima: 2 devs fullstack + especialista API Revit + UX/UI + CS/marketing. Maior custo fixo da operação.' },
      { n: 'P20', q: 'Modelo de monetização?', a: 'Assinatura recorrente Free · Pro R$89 · Team R$199 por usuário/mês + marketplace de templates + implementação customizada para corporativo e setor público.' },
      { n: 'P21', q: 'Transações com clientes?', a: 'Cartão e boleto para planos recorrentes. Contratos formais e NF-e para implementações corporativas e licitações públicas.' },
      { n: 'P23', q: 'Análise de viabilidade e riscos?', a: 'Riscos mapeados na SWOT: custo do plugin por versão Revit, concorrência da Autodesk, resistência cultural. Viabilidade sustentada pela lacuna de mercado e pelo Decreto BIM 9.983/2019. Projeções CAC, LTV, break-even na próxima etapa.', partial: true },
    ],
  },
  {
    id: 4, n: '05', icon: 'barchart', label: 'Mercado', badge: 'ok', badgeText: 'Atende',
    summary: '180 mil escritórios, BIM obrigatório por decreto, estratégia PLG + inbound + outbound definida.',
    qa: [
      { n: 'P24', q: 'Proposta de valor simples e clara?', a: 'O único planner que fala a língua do arquiteto e do engenheiro, com gestão macro-micro e integração direta com o Revit. Compreensível para usuário técnico e investidores.' },
      { n: 'P25', q: 'Estratégia de vendas e marketing?', a: 'Inbound (conteúdo AEC) + outbound (feiras BIM World, FEICON, conselhos CAU/CREA) + PLG via freemium com convite de colaboradores.' },
      { n: 'P26', q: 'Orientação ao mercado?', a: '180 mil escritórios AEC. Decreto 9.983/2019 cria demanda regulatória por ferramentas compatíveis. Concorrência direta escassa no mercado nacional.' },
      { n: 'P28', q: 'Escalabilidade e replicação?', a: 'Modelo SaaS: custo marginal próximo de zero por novo usuário. Marketplace cria efeitos de rede. Expansão natural para Portugal, Espanha e América Latina.' },
    ],
  },
  {
    id: 5, n: '06', icon: 'award', label: 'Qualificação do time', badge: 'ok', badgeText: 'Atende',
    summary: 'Multidisciplinar PPGCI/UFRGS — engenharia civil, arquitetura, gestão da inovação e transferência de tecnologia.',
    qa: [
      { n: 'P30', q: 'Experiência executiva do time?', a: 'Pós-graduandos PPGCI/UFRGS com formações em engenharia civil (Fábio, Piero, Pâmela), arquitetura (Franciele, Louise, Valentina) e gestão da inovação (Franciele, Pâmela).' },
      { n: 'P31', q: 'Habilidades técnicas necessárias?', a: 'Time cobre as três dimensões de uma startup técnica: engenharia (Revit API), gerencial (gestão da inovação/produto) e comercial (growth + parcerias institucionais).' },
      { n: 'P32', q: 'Capacidade de trabalho conjunto?', a: 'Grupo já opera colaborativamente na disciplina PCI0031, com divisão de tarefas, entregas conjuntas e alinhamento metodológico ao longo do semestre.' },
      { n: 'P33', q: 'Espírito empreendedor?', a: 'Transpor uma patente de papelaria para software AEC — identificando uma lacuna não óbvia — demonstra pensamento lateral e orientação à inovação aplicada.' },
    ],
  },
];

export default function S08Framework() {
  const [active, setActive] = useState(0);
  const dim = DIMENSIONS[active];

  return (
    <div className="slide-inner" style={{ justifyContent: 'flex-start', padding: '68px 90px 76px', display: 'flex', flexDirection: 'column', gap: 0 }}>

      {/* Header */}
      <h2 className="head" style={{ marginBottom: 12, fontSize: 74 }}>
        Framework <em>Elementos Essenciais</em> (Lago, 2022).
      </h2>
      <p style={{ fontSize: 27, color: 'var(--dim)', lineHeight: 1.6, maxWidth: 960, marginBottom: 22 }}>
        Avaliação nas <strong>seis dimensões</strong> do framework de Elementos Essenciais para Propostas de
        Negócio de Startups (LAGO, 2022 — PPGEP/UFRGS). Selecione uma dimensão para ver as perguntas e respostas.
      </p>

      {/* Body: nav + panel */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '340px 1fr',
        flex: 1,
        minHeight: 0,
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 'var(--r)',
        overflow: 'hidden',
        boxShadow: 'var(--glass-shadow)',
      }}>

        {/* Sidebar nav */}
        <nav style={{
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
                gap: 14,
                padding: '0 24px',
                cursor: 'pointer',
                transition: 'background .2s, border-color .2s',
                borderLeft: `5px solid ${active === d.id ? 'var(--amber)' : 'transparent'}`,
                background: active === d.id ? 'rgba(232,201,122,0.13)' : 'transparent',
                flex: 1,
                borderBottom: d.id < 5 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}
            >
              <span style={{ fontFamily: 'var(--mono)', fontSize: 22, color: active === d.id ? 'var(--amber)' : 'var(--faint)', letterSpacing: '.06em', minWidth: 28, flexShrink: 0 }}>{d.n}</span>
              <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center', color: 'var(--amber)' }}>
                <Icon name={d.icon} size={26} color="currentColor" />
              </span>
              <span style={{
                flex: 1,
                fontSize: 23,
                color: active === d.id ? 'var(--amber)' : 'rgba(248,250,255,0.8)',
                fontWeight: active === d.id ? 500 : 400,
                lineHeight: 1.3,
              }}>{d.label}</span>
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: 18,
                padding: '5px 13px',
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

        {/* Content panel */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'var(--glass-blur)',
          WebkitBackdropFilter: 'var(--glass-blur)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
        }}>
          {/* Pane header — centered */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '32px 48px 24px',
            borderBottom: '1px solid rgba(255,255,255,0.09)',
            flexShrink: 0,
            background: 'rgba(255,255,255,0.02)',
            gap: 10,
          }}>
            <span style={{ display: 'flex', alignItems: 'center', color: 'var(--amber)' }}>
              <Icon name={dim.icon} size={56} color="currentColor" />
            </span>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 62, lineHeight: 1.05 }}>{dim.label}</div>
            <p style={{ fontSize: 26, color: 'var(--dim)', lineHeight: 1.6, maxWidth: 640, margin: 0 }}>{dim.summary}</p>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: 'var(--mono)',
              fontSize: 21,
              padding: '7px 18px',
              borderRadius: 100,
              letterSpacing: '.06em',
              color: dim.badge === 'ok' ? 'var(--green)' : 'var(--amber)',
              background: dim.badge === 'ok' ? 'rgba(107,207,127,.1)' : 'rgba(232,201,122,.1)',
              border: `1px solid ${dim.badge === 'ok' ? 'rgba(107,207,127,.25)' : 'var(--amberB)'}`,
            }}>✓ {dim.badgeText}</span>
          </div>

          {/* Q&A list */}
          <div style={{ display: 'flex', flexDirection: 'column', overflowY: 'auto', flex: 1 }}>
            {dim.qa.map((item) => (
              <div
                key={item.n}
                style={{
                  padding: '22px 48px',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  borderLeft: `3px solid ${item.partial ? 'var(--amberD)' : 'transparent'}`,
                  background: item.partial ? 'rgba(232,201,122,0.04)' : 'transparent',
                  cursor: 'default',
                }}
              >
                <div style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 25,
                  fontWeight: 600,
                  color: item.partial ? 'var(--amber)' : 'rgba(248,250,255,0.92)',
                  marginBottom: 10,
                  display: 'flex',
                  gap: 10,
                  alignItems: 'center',
                }}>
                  <span style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 17,
                    background: item.partial ? 'rgba(232,201,122,.18)' : 'rgba(92,230,200,.15)',
                    border: `1px solid ${item.partial ? 'var(--amberB)' : 'rgba(92,230,200,.4)'}`,
                    color: item.partial ? 'var(--amber)' : '#5ce6c8',
                    padding: '4px 9px',
                    borderRadius: 4,
                    flexShrink: 0,
                    letterSpacing: '.06em',
                    lineHeight: 1,
                  }}>{item.n}</span>
                  {item.q}
                </div>
                <p style={{ fontSize: 22, color: 'var(--dim)', lineHeight: 1.7, margin: 0 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
