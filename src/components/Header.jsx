import logo from '/img/logo-caipyra.png';

export default function Header() {
  return (
    <>
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="intro-text">
                  <img src={logo} alt="Caipyra" className="logo" />
                  <h1>
                    <p>O único evento de Python com quentão e paçoquinha!</p>
                  </h1>
                  <a
                    href="https://caipyra2025.eventbrite.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button type="button" className="btn btn-custom btn-lg">
                      Ingressos à venda
                      <br /> <br />
                      2º Lote <i className="fas fa-ticket"></i>
                    </button>
                  </a>
                  <p className="ingresso-social">
                    Caso você não possa arcar com um ingresso, você pode pleitear um
                    ingresso social clicando{' '}
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdWCHmJZoQyxUhMzx6unVPpbL89xZ_kEPBxCkGL5mrttcKmBg/viewform?usp=sharing&ouid=113101013161831270197"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      aqui
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
