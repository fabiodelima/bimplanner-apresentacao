import '../styles/s11-team.css';

const MEMBERS = [
  {
    name: 'Fábio de Lima',
    role: 'ENG. CIVIL · TECH LEAD',
    bio: 'Engenharia Civil e transferência de tecnologia. Lidera a arquitetura técnica e a integração com a API Revit.',
  },
  {
    name: 'Franciele Prietsch',
    role: 'ARQUITETURA · PRODUTO',
    bio: 'Especialista em ecossistemas de inovação. Responsável pela metodologia de produto e pelo roadmap.',
  },
  {
    name: 'Louise Golbert',
    role: 'ARQUITETURA · UX LEAD',
    bio: 'Arquiteta com experiência em fluxos AEC. Garante que o produto faça sentido para quem projeta.',
  },
  {
    name: 'Pâmela Wehner',
    role: 'ENG. CIVIL · GROWTH',
    bio: 'Gestão da inovação e estratégia de crescimento. Lidera aquisição de clientes e parcerias institucionais.',
  },
  {
    name: 'Piero Locatelli',
    role: 'ENG. CIVIL · BIM SPECIALIST',
    bio: 'Especialista em BIM e compatibilização. Traduz necessidades técnicas do setor em features do produto.',
  },
  {
    name: 'Valentina Moreira',
    role: 'ARQUITETURA · PESQUISA',
    bio: 'Arquitetura e pesquisa aplicada. Coordena validação metodológica com escritórios parceiros e UFRGS.',
  },
];

export default function S11Team() {
  return (
    <div className="slide-inner team-inner">
      <div className="team-head">
        <h2 className="head team-title">
          Engenheiros, arquitetos<br />e pesquisadores <em>que constroem.</em>
        </h2>
      </div>

      <div className="team-grid">
        {MEMBERS.map((m) => (
          <div key={m.name} className="team-card glass">
            <span className="team-role">{m.role}</span>
            <strong className="team-name">{m.name}</strong>
            <p className="team-bio">{m.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
