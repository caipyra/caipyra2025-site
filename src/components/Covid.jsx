export default function Covid() {
  return (
    <>
      <div id="covid" className="text-center">
        <div className="container">
          <div className="col-md-12 section-title">
            <h2>Medidas sobre a COVID-19</h2>
          </div>
          <div className="row">
            <div className="col-xs-6 col-md-4">
              <h3>Vacine-se!</h3>
              <p>
                Acesse site do Conecte SUS e procure uma unidade básica de saúde
                para atualizar seu cartão de vacina.
              </p>
            </div>
            <div className="col-xs-6 col-md-4">
              <h3>Recomendação do uso de máscaras</h3>
              <p>
                Caso algum participante seja testado positivo para Covid, o uso
                de máscaras passará a ser obrigatório
              </p>
            </div>
            <div className="col-xs-6 col-md-4">
              <h3>Código de Conduta</h3>
              <p>
                Fique atento ao código de conduta. Nosso objetivo é criar um
                ambiente seguro para todas as pessoas
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
