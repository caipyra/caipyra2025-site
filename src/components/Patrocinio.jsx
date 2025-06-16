import nic from '/img/patrocinadores/nic-cgi.png';
import psf from '/img/patrocinadores/psf.png';
import apyb from '/img/patrocinadores/apyb.png';
import fatec from '/img/patrocinadores/fatec.png';

export default function Patrocinio() {
  return (
    <>
      <div id="patrocinio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Patrocínio</h2>
            <div className="col-xs-6 col-md-12">
              <p>
                Para fazer um evento desse porte acontecer, precisamos de
                patrocinadores. Estes são nossos patrocinadores e parceiros que ajudaram
                a fornecer todo o suporte necessário para a realização do evento.
              </p>
            </div>

            <h3>Patrocinadores</h3>
            <div className="row align-items-center justify-content-center patrocinadores-row">
              <div className="col-12 col-md-4">
                <a
                  href="https://www.python.org/psf-landing/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={psf}
                    alt="Python Software Foundation"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-6 col-md-4 mb-3 mb-md-0">
                <a href="https://www.nic.br/" target="_blank" rel="noopener noreferrer">
                  <img src={nic} alt="NIC.br" className="img-fluid" />
                </a>
              </div>
            </div>
            <h3>Apoio</h3>
            <div className="row align-items-center justify-content-center patrocinadores-row">
              <div className="col-6 col-md-4 mb-3 mb-md-0">
                <a
                  href="http://www.fatecrp.edu.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={fatec} alt="FATEC" className="img-fluid" />
                </a>
              </div>
              <div className="col-12 col-md-4">
                <a
                  href="https://apyb.python.org.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={apyb}
                    alt="Imagem do logo da Associação Python Brasil representada com o seu acrônimo APyB"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
