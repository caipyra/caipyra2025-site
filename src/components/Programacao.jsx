import EmailLink from './EmailLink';

export default function Programacao() {
  return (
    <>
      <div id="programacao" className="text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-md-offset-1 section-title">
              <h2>Programação</h2>
              <p>
                Ajude a tornar o Caipyra 2025 um evento incrível! Proponha sua palestra,
                tutorial ou sprint clicando no botão abaixo.
              </p>
              <p>
                No caso de dúvidas, entre em contato através do e-mail <EmailLink />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-md-12">
              <a
                href="https://talks.python.org.br/caipyra-2025/cfp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-custom btn-lg">
                  Submeta a sua proposta <i className="fas fa-microphone"></i>
                </button>
              </a>
            </div>
            <div className="row" style={{ display: 'none' }}>
              <div className="col-xs-6 col-md-4">
                <i className="fa fa-chalkboard"></i>
                <h3>19/06 - Tutoriais</h3>
                <p>Grade de tutoriais a ser definida em breve</p>
              </div>
              <div className="col-xs-6 col-md-4">
                <i className="fa fa-podcast"></i>
                <h3>20/06 e 21/06 - Palestras</h3>
                <p>Grade de palestras a ser definida em breve</p>
              </div>
              <div className="col-xs-6 col-md-4">
                <i className="fa fa-rocket"></i>
                <h3>22/06 - Sprints</h3>
                <p>Atividades de sprints a serem definidas em breve</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
