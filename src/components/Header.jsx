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
                    href="https://www.eventbrite.com/e/caipyra-2025-tickets-1229501735789?aff=oddtdtcreator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button type="button" className="btn btn-custom btn-lg">
                      Ingressos à venda
                      <br /> <br />
                      Lote promocional <i className="fas fa-ticket"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
