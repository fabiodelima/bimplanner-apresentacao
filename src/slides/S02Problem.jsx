import '../styles/s02-problem.css';

export default function S02Problem() {
  return (
    <>
      <div className="slide-inner">
        <div className="prob-left">
          <h2 className="head">Por que o setor AEC<br />ainda usa <em>planilha?</em></h2>
          <div className="prob-cards">
            <div className="prob-card">
              <svg className="prob-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
                <path d="M17 17h4m-2-2v4"/>
              </svg>
              <div className="prob-body">
                <div className="prob-title">Sem linguagem AEC</div>
                <p className="prob-desc">Trello, MS Project e planilhas não entendem fases de anteprojeto, disciplinas ou compatibilização BIM.</p>
              </div>
            </div>
            <div className="prob-card">
              <svg className="prob-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 12h4l3 8 4-16 3 8h4"/>
              </svg>
              <div className="prob-body">
                <div className="prob-title">Gestão por improviso</div>
                <p className="prob-desc">WhatsApp, e-mail e controle manual. Sem visibilidade de progresso em tempo real.</p>
              </div>
            </div>
            <div className="prob-card">
              <svg className="prob-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <div className="prob-body">
                <div className="prob-title">Sem integração BIM</div>
                <p className="prob-desc">O modelo 3D existe em uma ilha. As tarefas de gestão existem em outra. Zero conexão.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="prob-right">
          <div className="prob-stats">
            <div className="prob-stat">
              <span className="stat-n">180k+</span>
              <span className="stat-l">escritórios AEC no Brasil<br />sem solução vertical</span>
            </div>
            <div className="prob-stat">
              <span className="stat-n">2028</span>
              <span className="stat-l">BIM obrigatório em<br />obras públicas (Dec. 11.888)</span>
            </div>
            <div className="prob-stat highlight">
              <span className="stat-n">0</span>
              <span className="stat-l">concorrentes diretos<br />nativos BIM na América Latina</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
