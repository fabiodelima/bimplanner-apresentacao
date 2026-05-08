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
    id: 0, icon: 'lightbulb', label: 'Inovação', badge: 'ok', badgeText: 'Atende',
    summary: 'Terminologia AEC nativa, metodologia reflexiva patenteada (INPI) e integração Revit. Nenhum concorrente nacional reúne os três simultaneamente. TRL 4–5, validação planejada com escritórios parceiros e incubadora Hestia/UFRGS.',
    qa: [
      { n: 'P1', q: 'Inovação superior aos concorrentes?', a: 'Ferramentas como Trello e Asana oferecem gestão genérica. O BIMPlanner combina três diferenciais inexistentes simultaneamente: terminologia e fluxos nativos AEC, metodologia reflexiva baseada em patente registrada no INPI, e integração direta com o Revit. Nenhum concorrente direto no Brasil reúne os três.' },
      { n: 'P2', q: 'Incorpora IA e tecnologias emergentes?', a: 'Sim. IA para sugestão de prioridades e alertas preditivos de atraso, com base em cronograma e dependências de tarefas. TRL estimado em 4–5 — protótipo em desenvolvimento, com validação planejada junto a escritórios parceiros e a incubadora Hestia/UFRGS.' },
      { n: 'P3', q: 'Sustentabilidade econômica, social e ambiental?', a: 'Economicamente, o modelo freemium reduz a barreira de entrada. Socialmente, democratiza gestão profissional para autônomos e estudantes. Ambientalmente, digitaliza fluxos e reduz impressão de documentos e deslocamentos para reuniões de alinhamento.' },
      { n: 'P4', q: 'Mecanismos de apropriabilidade?', a: 'Base metodológica protegida pela patente BR 202023007841-4 U2 (modelo de utilidade, INPI). O software será protegido por registro de programa de computador. Contratos de confidencialidade com parceiros beta cobrem o desenvolvimento inicial.' },
      { n: 'P5', q: 'Estratégia em relação ao pagamento de royalties?', a: 'A metodologia da patente é usada como base intelectual. A estratégia de royalties será definida em negociação com a detentora — podendo ser licenciamento por uso ou acordo de parceria com participação nos resultados.', partial: false },
      { n: 'P6', q: 'Infraestrutura necessária para operar o negócio?', a: 'Infraestrutura central em nuvem (AWS ou Azure), backend escalável por microsserviços e frontend web. O plugin Revit requer Windows com Revit instalado. Equipe mínima viável: dois devs fullstack, um UX/UI e um especialista em API Autodesk.' },
      { n: 'P7', q: 'Validação com stakeholders?', a: 'Em andamento. Proposta desenvolvida com base no relatório de análise da patente e na SWOT do contexto AEC. Próxima etapa: validação com escritórios parceiros e com a incubadora Hestia/UFRGS.' },
    ],
  },
  {
    id: 1, icon: 'users', label: 'Cliente', badge: 'ok', badgeText: 'Atende',
    summary: 'Jornada completa mapeada — descoberta, conversão freemium, retenção e expansão. Dor validada: falta de um planner que fale AEC. Cocriação via marketplace de templates e feedback in-app contínuo.',
    qa: [
      { n: 'P8',  q: 'Canais de interação com o cliente?', a: 'Canais cobrem toda a jornada: descoberta (conteúdo orgânico, feiras, conselhos profissionais), conversão (freemium, trial guiado), ativação (onboarding estruturado), retenção (chat, webinars, cursos) e expansão (upgrade por crescimento da equipe).' },
      { n: 'P9',  q: 'Conhecimento aprofundado do cliente?', a: 'Cliente primário: coordenador de projetos AEC, com foco na visibilidade de múltiplos projetos e perda de tempo em alinhamentos manuais. Cliente secundário: arquiteto/engenheiro autônomo que precisa de controle sem complexidade. Ambos frustrados com ferramentas genéricas.' },
      { n: 'P10', q: 'Feedback e cocriação de valor?', a: 'Modelo freemium gera base ativa de usuários desde o início. Roadmap alimentado por feedback in-app, entrevistas com escritórios parceiros e análise de uso. Templates do marketplace poderão ser criados pela própria comunidade — cocriação ativa.' },
      { n: 'P11', q: 'Orientação clara para o cliente?', a: 'Cada decisão de produto parte de uma dor real: a falta de um planner que entenda fases AEC, conecte tarefas ao modelo BIM e ajude equipes a priorizar sem sobrecarga cognitiva.' },
    ],
  },
  {
    id: 2, icon: 'link2', label: 'Parceiros', badge: 'ok', badgeText: 'Atende',
    summary: 'Autodesk (API Forge/Revit via ADP), UFRGS/PPGCI, incubadora Hestia/UFRGS e escritórios beta. Compartilhamento de infraestrutura e rede. Internacionalização via distribuidores Autodesk em Portugal, Espanha e América Latina.',
    qa: [
      { n: 'P12', q: 'Interação com parceiros estratégicos?', a: 'Com a Autodesk: via Programa de Desenvolvedores (ADP) e uso da API Forge/Revit. Com universidades e incubadoras: acordos de cooperação técnica. Com escritórios parceiros: programa beta com acesso antecipado e co-desenvolvimento de funcionalidades.' },
      { n: 'P13', q: 'Colaboração com centros de P&D?', a: 'UFRGS/PPGCI é parceira de pesquisa e validação metodológica, com acesso à rede de pesquisadores em gestão da inovação, engenharia de produção e construção civil.' },
      { n: 'P14', q: 'Colaboração com outras empresas?', a: 'Autodesk é parceira tecnológica central. Escritórios de projeto são parceiros de validação e distribuição. Empresas de software complementares (plataformas de gestão de obras) são parceiros potenciais de integração futura.' },
      { n: 'P15', q: 'Colaboração com cadeia de suprimentos?', a: 'Parcialmente. A cadeia inclui fornecedores de infraestrutura cloud e serviços de IA. As relações são transacionais no MVP, com potencial de parceria estratégica na escalagem — a ser validado com o desenvolvimento dos serviços de IA e nuvem.', partial: true },
      { n: 'P16', q: 'Parcerias internacionais?', a: 'Roadmap futuro: Portugal, Espanha e América Latina — mercados AEC com crescente adoção de BIM. Parceria com distribuidores Autodesk nesses mercados é o caminho natural de internacionalização.' },
      { n: 'P17', q: 'Compartilhamento de recursos?', a: 'Hestia/UFRGS oferece infraestrutura física e rede de mentores. A parceria com universidades oferece acesso a pesquisadores e estudantes como early adopters e testadores.' },
    ],
  },
  {
    id: 3, icon: 'dollar', label: 'Finanças', badge: 'partial', badgeText: 'Parcial',
    summary: 'Três fontes de receita: assinatura por assento (Free/Pro/Team), marketplace de templates e implementação customizada. Modelo freemium com PLG reduz CAC. Custos mapeados. Projeções detalhadas na próxima etapa.',
    qa: [
      { n: 'P18', q: 'Investimento em capital humano?', a: 'Equipe mínima viável: dois devs fullstack, um especialista em API Revit, um UX/UI designer e um profissional de CS/marketing. Custos de pessoal representam o maior custo fixo da operação.' },
      { n: 'P19', q: 'Detalhamento de custos e planejamento financeiro?', a: 'Principais custos mapeados: infraestrutura cloud, salários, manutenção do plugin Revit, marketing e suporte. Planejamento financeiro detalhado (projeções de receita, CAC, LTV, break-even) será desenvolvido na próxima etapa.', partial: true },
      { n: 'P20', q: 'Modelo de monetização?', a: 'Assinatura recorrente (mensal ou anual) por assento: Free, Pro R$89 e Team R$199/usuário/mês. Fontes complementares: marketplace de templates e implementação customizada para clientes corporativos e órgãos públicos.' },
      { n: 'P21', q: 'Métodos de transação financeira?', a: 'Cartão de crédito ou boleto bancário para planos recorrentes. Contratos e NF-e para implementações customizadas e órgãos públicos (processo licitatório quando aplicável).' },
      { n: 'P22', q: 'Diferentes canais de receita?', a: 'Sim. Assinatura recorrente (receita previsível), marketplace de templates (receita variável com crescimento da comunidade) e implementação customizada (receita por projeto, margens maiores).' },
      { n: 'P23', q: 'Análise de viabilidade e riscos?', a: 'Riscos mapeados na SWOT: concorrência de players consolidados, custo de manutenção do plugin por versão Revit, resistência cultural e riscos jurídicos sobre a proteção da patente. Viabilidade sustentada pela lacuna de mercado e pelo Decreto BIM 9.983/2019.', partial: true },
    ],
  },
  {
    id: 4, icon: 'barchart', label: 'Mercado', badge: 'ok', badgeText: 'Atende',
    summary: '180 mil escritórios AEC registrados. Decreto 9.983/2019 torna BIM obrigatório em obras públicas federais a partir de 2024. Concorrência direta escassa no Brasil. Estratégia PLG + inbound + outbound com presença em BIM World, FEICON e CAU/CREA.',
    qa: [
      { n: 'P24', q: 'Proposta de valor simples e compreensível?', a: 'Em uma frase: o BIMPlanner é o único planner de projetos que fala a língua do arquiteto e do engenheiro, com gestão do macro ao micro e integração direta com o Revit. Compreensível para usuário técnico e para investidores.' },
      { n: 'P25', q: 'Estratégia de vendas e marketing?', a: 'Combina inbound (conteúdo orgânico no TikTok e LinkedIn com foco em produtividade AEC), outbound (feiras: BIM World, FEICON, CONCRETA; conselhos CAU/CREA) e PLG — Product-Led Growth — via freemium que incentiva o usuário a convidar a equipe.' },
      { n: 'P26', q: 'Conhecimento e orientação ao mercado?', a: 'Mais de 180 mil escritórios AEC registrados no Brasil (CAU/CREA). Decreto 9.983/2019 torna BIM obrigatório em obras públicas federais a partir de 2024, criando demanda regulatória por ferramentas compatíveis. Concorrentes diretos com foco AEC+BIM no Brasil são escassos.' },
      { n: 'P27', q: 'Canais de marketing e distribuição?', a: 'Conteúdo orgânico (TikTok, LinkedIn, YouTube), feiras do setor, conselhos profissionais, parceiros de co-marketing e o próprio produto como canal — convite de colaboradores dentro da plataforma gera crescimento viral.' },
      { n: 'P28', q: 'Replicação em larga escala?', a: 'O modelo SaaS é nativamente escalável: custo marginal de adicionar um usuário é próximo de zero. Marketplace e comunidade criam efeitos de rede. Expansão natural para Portugal, Espanha e América Latina.' },
      { n: 'P29', q: 'Teste de validação da proposta?', a: 'Validação planejada em duas etapas: (1) programa beta com escritórios parceiros para validar fluxos e usabilidade; (2) piloto com órgão público para validar integração BIM e modelo de implementação customizada.' },
    ],
  },
  {
    id: 5, icon: 'award', label: 'Qualificação do time', badge: 'ok', badgeText: 'Atende',
    summary: 'Pós-graduandos PPGCI/UFRGS com formações em engenharia civil, arquitetura e gestão da inovação. Time multidisciplinar cobre as três dimensões necessárias em uma startup técnica: engenharia (Revit API), gestão de produto e comercial.',
    qa: [
      { n: 'P30', q: 'Experiência executiva do time?', a: 'Grupo formado por pós-graduandos PPGCI/UFRGS com formações em engenharia civil (Fábio, Piero, Pâmela), arquitetura (Franciele, Louise, Valentina) e gestão da inovação e transferência de tecnologia. Experiência em projetos AEC, BIM e inovação é o ativo central do time fundador.' },
      { n: 'P31', q: 'Habilidades técnicas do time?', a: 'Time reúne competências em engenharia civil, arquitetura, gestão da inovação e transferência de tecnologia. A multidisciplinaridade cobre as três dimensões necessárias: técnica (Revit API, dev), gerencial (gestão de produto e inovação) e comercial (growth e parcerias institucionais).' },
      { n: 'P32', q: 'Capacidade de trabalho em conjunto?', a: 'Grupo já opera colaborativamente na disciplina PCI0031, com divisão de tarefas, entregas conjuntas e alinhamento metodológico. A proposta foi construída coletivamente a partir da análise da patente, da SWOT e do BMC.' },
      { n: 'P33', q: 'Espírito empreendedor do time?', a: 'A escolha de transpor uma patente de papelaria para um produto de software AEC — identificando uma lacuna de mercado não óbvia — demonstra pensamento lateral, orientação à inovação e disposição para construir algo novo sobre uma base metodológica já validada.' },
    ],
  },
];

export default function S08Framework() {
  const [active, setActive] = useState(0);
  const dim = DIMENSIONS[active];

  return (
    <div className="slide-inner" style={{ justifyContent: 'flex-start', padding: '52px 90px 60px', display: 'flex', flexDirection: 'column', gap: 0 }}>

      {/* Header */}
      <h2 className="head" style={{ marginBottom: 8, fontSize: 44 }}>
        Framework <em>Elementos Essenciais</em> (Lago, 2022).
      </h2>
      <p style={{ fontSize: 17, color: 'var(--dim)', lineHeight: 1.5, maxWidth: 960, marginBottom: 14 }}>
        Avaliação nas <strong>seis dimensões</strong> do framework de Elementos Essenciais para Propostas de
        Negócio de Startups (LAGO, 2022 — PPGEP/UFRGS). Selecione uma dimensão para ver as perguntas e respostas.
      </p>

      {/* Body: nav + panel */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '300px 1fr',
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
              <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center', color: 'var(--amber)' }}>
                <Icon name={d.icon} size={32} color="currentColor" />
              </span>
              <span style={{
                flex: 1,
                fontSize: 21,
                color: active === d.id ? 'var(--amber)' : 'rgba(248,250,255,0.8)',
                fontWeight: active === d.id ? 600 : 400,
                lineHeight: 1.25,
              }}>{d.label}</span>
              <span style={{
                fontFamily: 'var(--mono)',
                fontSize: 12,
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

        {/* Content panel */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'var(--glass-blur)',
          WebkitBackdropFilter: 'var(--glass-blur)',
          display: 'flex',
          flexDirection: 'column',
          minHeight: 0,
        }}>
          {/* Pane header — fixed, centered */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '28px 56px 22px',
            borderBottom: '1px solid rgba(255,255,255,0.09)',
            flexShrink: 0,
            background: 'rgba(255,255,255,0.02)',
            gap: 8,
          }}>
            <span style={{ display: 'flex', alignItems: 'center', color: 'var(--amber)' }}>
              <Icon name={dim.icon} size={48} color="currentColor" />
            </span>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 46, lineHeight: 1.05 }}>{dim.label}</div>
            <p style={{ fontSize: 16, color: 'var(--dim)', lineHeight: 1.55, maxWidth: 720, margin: 0 }}>{dim.summary}</p>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: 'var(--mono)',
              fontSize: 13,
              padding: '5px 14px',
              borderRadius: 100,
              letterSpacing: '.06em',
              color: dim.badge === 'ok' ? 'var(--green)' : 'var(--amber)',
              background: dim.badge === 'ok' ? 'rgba(107,207,127,.1)' : 'rgba(232,201,122,.1)',
              border: `1px solid ${dim.badge === 'ok' ? 'rgba(107,207,127,.25)' : 'var(--amberB)'}`,
            }}>✓ {dim.badgeText}</span>
          </div>

          {/* Q&A list — scrollable */}
          <div style={{ display: 'flex', flexDirection: 'column', overflowY: 'auto', flex: 1, minHeight: 0 }}>
            {dim.qa.map((item) => (
              <div
                key={item.n}
                style={{
                  padding: '18px 48px',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  borderLeft: `3px solid ${item.partial ? 'var(--amberD)' : 'transparent'}`,
                  background: item.partial ? 'rgba(232,201,122,0.04)' : 'transparent',
                  cursor: 'default',
                  flexShrink: 0,
                }}
              >
                <div style={{
                  fontFamily: 'var(--sans)',
                  fontSize: 16,
                  fontWeight: 600,
                  color: item.partial ? 'var(--amber)' : 'rgba(248,250,255,0.92)',
                  marginBottom: 7,
                  display: 'flex',
                  gap: 10,
                  alignItems: 'center',
                  textAlign: 'left',
                }}>
                  <span style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    background: item.partial ? 'rgba(232,201,122,.18)' : 'rgba(92,230,200,.15)',
                    border: `1px solid ${item.partial ? 'var(--amberB)' : 'rgba(92,230,200,.4)'}`,
                    color: item.partial ? 'var(--amber)' : '#5ce6c8',
                    padding: '3px 7px',
                    borderRadius: 4,
                    flexShrink: 0,
                    letterSpacing: '.06em',
                    lineHeight: 1,
                  }}>{item.n}</span>
                  {item.q}
                </div>
                <p style={{ fontSize: 14, color: 'var(--dim)', lineHeight: 1.65, margin: 0, textAlign: 'left' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
