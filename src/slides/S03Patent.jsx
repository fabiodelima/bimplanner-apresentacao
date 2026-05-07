import '../styles/s03-patent.css';

export default function S03Patent() {
  return (
    <>
      <div className="slide-inner">
        <h2 className="head">Construído sobre <em>uma patente registrada.</em></h2>
        
        <div className="patent-grid">
          {/* -- Left: Documento da Patente -- */}
          <div className="patent-left">
            <div className="patent-doc">
              <div className="carimbo">
                Concedido<br />INPI<br />BR
              </div>
              
              <h3 className="doc-title">
                Ferramenta para gerenciar atividades, tarefas, compromissos e projetos pessoais e profissionais.
              </h3>
              
              <p className="doc-body">
                O Instituto Nacional da Propriedade Industrial confere a propriedade e o direito de uso exclusivo do modelo de utilidade, 
                validando sua aplicação prática na sistematização e gestão de rotinas e projetos.
              </p>
              
              <div className="doc-fields">
                <div className="doc-field">
                  <span className="field-label">Número do Registro</span>
                  <span className="field-value">BR 20 2023 007841-4 U2</span>
                </div>
                <div className="doc-field">
                  <span className="field-label">Classificação IPC</span>
                  <span className="field-value">B42D 15/00</span>
                </div>
                <div className="doc-field">
                  <span className="field-label">Data de Depósito</span>
                  <span className="field-value">25/04/2023</span>
                </div>
                <div className="doc-field">
                  <span className="field-label">Data da Concessão</span>
                  <span className="field-value">05/11/2024</span>
                </div>
                <div className="doc-field full">
                  <span className="field-label">Titular</span>
                  <span className="field-value">Julliana Lins Cavalcanti de Melo Bezerra</span>
                </div>
              </div>
              
              <div className="barcode">
                <div className="barcode-img"></div>
                <span className="barcode-text">BR2020230078414U2</span>
              </div>
            </div>
          </div>

          {/* -- Right: Methodology -- */}
          <div className="patent-right">
            <p className="lead">
              O BIMPlanner escala a metodologia patenteada do planner físico "Há tempo no seu tempo" para o ecossistema AEC, 
              transformando organização focada e estruturada em inteligência coletiva de projeto.
            </p>

            <div className="principles">
              <div className="principle">
                <div className="princ-num">1</div>
                <div className="princ-content">
                  <div className="princ-title">Planejamento em Cascata</div>
                  <p className="princ-text">Segmentação temporal do projeto (anual, semestral, mensal, semanal, diário), conectando o prazo contratual à execução granular do dia.</p>
                </div>
              </div>

              <div className="principle">
                <div className="princ-num">2</div>
                <div className="princ-content">
                  <div className="princ-title">Priorização e Essencialismo</div>
                  <p className="princ-text">Combate à "lista infinita de tarefas" através da definição de atividades de destaque e separação clara entre compromissos fixos e tarefas flexíveis.</p>
                </div>
              </div>

              <div className="principle">
                <div className="princ-num">3</div>
                <div className="princ-content">
                  <div className="princ-title">Ciclos de Retroalimentação</div>
                  <p className="princ-text">Auditorias trimestrais embutidas no fluxo para revisar desempenhos, identificar gargalos e recalcular rotas de forma contínua.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
