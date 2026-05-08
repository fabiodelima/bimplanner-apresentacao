import '../styles/s13-closing.css';

export default function S13Closing() {
  return (
    <>
      <div className="closing-inner">
        <div className="closing-title-block">
          <h1 className="closing-obrigado">Obrigado.</h1>
          <h1 className="closing-perguntas"><em>Perguntas?</em></h1>
        </div>

        <p className="closing-lead">
          Uma patente brasileira, uma lacuna de mercado e um time multidisciplinar —<br />
          combinados em um SaaS que <strong>finalmente fala a língua do escritório AEC.</strong>
        </p>

        <a className="closing-cta" href="https://bimplanner.com.br" target="_blank" rel="noreferrer">
          <span className="closing-cta-logo">BIM<em>Planner</em></span>
          <span className="closing-cta-domain">.com.br</span>
        </a>

        <p className="closing-footer">
          PPGCI / UFRGS &nbsp;·&nbsp; PCI0031 &nbsp;·&nbsp; SUSTENTABILIDADE, CIÊNCIA E INOVAÇÃO &nbsp;·&nbsp; MAIO 2026
        </p>
      </div>
    </>
  );
}
