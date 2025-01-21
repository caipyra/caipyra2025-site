import EmailLink from './EmailLink';

export default function Patrocinio() {
  return (
    <>
      <div id="patrocinio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Patrocinadores</h2>
            <div className="col-xs-6 col-md-12">
              <p>
                Para fazer um evento desse porte acontecer, precisamos de
                patrocinadores. Se você ou sua empresa tem interesse em nos ajudar a
                fazer esse evento acontecer, entre em contato conosco através do e-mail
              </p>
              <EmailLink />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-md-12">
              <a
                href="docs/CartaPatrocinio_Caipyra2025_PT.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-custom btn-lg">
                  Proposta de patrocínio (pt){' '}
                  <i className="fa fa-arrow-up-right-from-square"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
