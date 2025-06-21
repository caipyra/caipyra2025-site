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
              <div className="col-xs-4 col-md-4">
                <i className="fa fa-chalkboard"></i>
                <h3>19/06 - Tutoriais</h3>
                <button
                  type="button"
                  className="btn btn-custom btn-lg"
                  style={{ marginBottom: '60px' }}
                >
                  Inscrições encerradas <i className="fas fa-ticket"></i>
                </button>
              </div>
              <div className="col-xs-4 col-md-4">
                <i className="fa fa-podcast"></i>
                <h3>20/06 e 21/06 - Palestras</h3>
                <button
                  type="button"
                  className="btn btn-custom btn-lg"
                  style={{ marginBottom: '60px' }}
                >
                  Inscrições encerradas <i className="fas fa-ticket"></i>
                </button>
              </div>
              <div className="col-xs-4 col-md-4">
                <i className="fa fa-rocket"></i>
                <h3>22/06 - Sprints</h3>
                <p style={{ marginBottom: '60px' }}>
                  Atividades de sprints não necessitam de inscrição. É só vir!
                </p>
              </div>
            </div>
            <div className="row">
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
