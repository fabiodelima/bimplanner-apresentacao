import '../styles/s09-business.css';

const PLANS = [
  {
    name: 'Free',
    badge: null,
    price: 'R$0',
    priceSub: 'para sempre · 1 usuário',
    rationale: 'Custo zero maximiza adoção PLG. Cada autônomo no gratuito é um futuro Pro — ou um indicador dentro de um escritório que vai assinar.',
    features: [
      { on: true,  label: 'Até 3 projetos ativos' },
      { on: true,  label: 'Dashboard com fases AEC' },
      { on: true,  label: 'Gestão de tarefas por disciplina' },
      { on: true,  label: 'Alertas básicos de prazo' },
      { on: false, label: 'IA de priorização' },
      { on: false, label: 'Gestão de equipe' },
      { on: false, label: 'Plugin Revit' },
    ],
  },
  {
    name: 'Pro',
    badge: 'Mais popular · PLG',
    featured: true,
    price: 'R$89',
    priceSub: 'por usuário/mês · até 10 pessoas',
    rationale: 'R$89/usuário posiciona acima do Trello e abaixo da Asana — com diferencial vertical AEC (fases, disciplinas, IA) que nenhum competitor generalista oferece.',
    features: [
      { on: true,       label: 'Projetos ilimitados' },
      { on: true,       label: 'Dashboard com fases AEC' },
      { on: true,       label: 'Gestão de equipe e portfólio' },
      { on: true, bold: true, label: 'IA de priorização e alertas' },
      { on: true,       label: 'Cronograma contratual' },
      { on: true,       label: 'Relatórios de progresso' },
    ],
  },
  {
    name: 'Team',
    badge: null,
    price: 'R$199',
    priceSub: 'por usuário/mês · até 50 pessoas',
    rationale: 'Licenças BIM individuais custam R$400+/mês. O plano Team entrega gestão + integração Revit + auditoria pública em uma assinatura — ROI imediato para escritórios mid-market.',
    features: [
      { on: true,       label: 'Tudo do Pro' },
      { on: true, bold: true, label: 'Plugin Revit integrado' },
      { on: true,       label: 'Tarefas vinculadas ao modelo BIM' },
      { on: true,       label: 'Auditoria para contratos públicos' },
      { on: true,       label: 'Marketplace de templates' },
      { on: true,       label: 'Onboarding dedicado' },
      { on: true,       label: 'SLA de suporte prioritário' },
    ],
  },
];

export default function S09Business() {
  return (
    <div className="slide-inner">
      <div className="biz-top">
        <h2 className="head">Do autônomo ao <em>escritório</em>.</h2>
        <p className="biz-lead">
          Três fontes de receita: <strong>assinaturas recorrentes</strong> (planos Free / Pro / Team),{' '}
          <strong>marketplace de templates AEC</strong> e{' '}
          <strong>implementação corporativa</strong> para clientes sob contratos públicos.
        </p>
      </div>

      <p className="biz-hint">Passe o cursor sobre o plano para ver a justificativa do preço.</p>

      <div className="biz-plans">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`biz-plan glass${plan.featured ? ' featured' : ''}`}
          >
            {plan.badge
              ? <div className="biz-badge">{plan.badge}</div>
              : <div className="biz-badge-placeholder" />
            }

            <div className="biz-plan-name">{plan.name}</div>
            <div className="biz-price">{plan.price}</div>
            <div className="biz-price-sub">{plan.priceSub}</div>

            <div className="biz-divider" />

            <div className="biz-features">
              {plan.features.map((f, i) => (
                <div
                  key={i}
                  className={`biz-feature${f.on ? (f.bold ? ' on bold' : ' on') : ' off'}`}
                >
                  <span className="biz-feat-icon">{f.on ? '✓' : '—'}</span>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>

            <div className="biz-rationale">
              <div className="biz-rationale-label">Justificativa do preço</div>
              <p className="biz-rationale-text">{plan.rationale}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
