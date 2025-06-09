export default function Programacao() {
  return (
    <>
      <div id="programacao" className="text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-md-offset-1 section-title">
              <h2>Programação</h2>
            </div>
            <div className="row">
              <div className="col-xs-6 col-md-6">
                <i className="fa fa-chalkboard"></i>
                <h3>19/06 - Tutoriais</h3>
                <a
                  href="https://caipyra2025.eventbrite.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button" className="btn btn-custom btn-lg">
                    Ingresso gratuito para tutoriais <i className="fas fa-ticket"></i>
                  </button>
                </a>
              </div>
              <div className="col-xs-6 col-md-6">
                <i className="fa fa-podcast"></i>
                <h3>20/06 e 21/06 - Palestras</h3>
                <a
                  href="https://caipyra2025.eventbrite.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button type="button" className="btn btn-custom btn-lg">
                    Ingressos à venda - 1º Lote <i className="fas fa-ticket"></i>
                  </button>
                </a>
              </div>
              {/* <div className="col-xs-6 col-md-4">
                <i className="fa fa-rocket"></i>
                <h3>22/06 - Sprints</h3>
                <p>Atividades de sprints a serem definidas em breve</p>
              </div> */}
            </div>
            <div className="row" style={{ marginTop: '60px' }}>
              <pretalx-schedule
                event-url="https://talks.python.org.br/caipyra-2025/"
                locale="en"
                style={{ '--pretalx-clr-primary': '#0d6efd' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
