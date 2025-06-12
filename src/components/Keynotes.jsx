import teo from '/img/keynotes/teo.jpeg';
import patymori from '/img/keynotes/patymori.jpeg';
import roberta from '/img/keynotes/roberta.jpeg';
import seocam from '/img/keynotes/seocam.jpeg';

export default function Keynotes() {
  return (
    <div id="keynotes">
      <div className="container">
        <div className="section-title text-center">
          <h2>Conheça nossos keynotes</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="keynote">
              <div className="keynote-image">
                <img src={teo} alt="Téo" />
              </div>
              <div className="keynote-meta">
                <h3>Téo Calvo</h3>
              </div>
              <div className="keynote-content">
                <p>
                  Téo tem como propósito o compartilhamento de conhecimento. Durante
                  esses mais de 10 anos de experiência na área de dados e tecnologia,
                  passou por empresas relevantes no mercado, criando soluções de Machine
                  Learning e parques analíticos. Teve a chance de construir e liderar
                  áreas de dados completas, impactando diretamente o negócio. Atualmente
                  se dedica integralmente na área da educação, trazendo todo esse
                  conhecimento de forma acessível e didática para a comunidade em seu
                  canal, Téo Me Why.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="keynote">
              <div className="keynote-image">
                <img src={patymori} alt="" />
              </div>
              <div className="keynote-meta">
                <h3>Paty Morimoto</h3>
              </div>
              <div className="keynote-content">
                <p>
                  PatyMori é feminista interseccional, trabalha com tecnologia há mais
                  de 20 anos, nas mais diversas áreas. Também em diferentes ramos, de
                  empresas à organizações da sociedade civil. Colaborou com GruPy SP,
                  PyLadies SP e Just Python. hoje atua em uma ONG que promove discussões
                  sobre gênero, tecnologias e política.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="keynote">
              <div className="keynote-image">
                <img src={roberta} alt="" />
              </div>
              <div className="keynote-meta">
                <h3>Roberta Duarte</h3>
              </div>
              <div className="keynote-content">
                <p>
                  Roberta Duarte é física e doutora em Astrofísica pela USP. Fez a
                  Primeira Simulação de um Buraco Negro por um Inteligência Artificial e
                  trabalha utilizando métodos de IA dentro da Física e Astronomia.
                  Atualmente seu foco está na compreensão de turbulência em meios
                  astrofísicos usando técnicas de FNO. Divulga Astronomia e IA nas redes
                  sociais e é roteirista do canal Ciência Todo Dia. Também escreve
                  colunas semanais na Meteored.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="keynote">
              <div className="keynote-image">
                <img src={seocam} alt="" />
              </div>
              <div className="keynote-meta">
                <h3>Sergio Oliveira</h3>
              </div>
              <div className="keynote-content">
                <p>
                  Com quase 20 anos de experiência em desenvolvimento de software e
                  liderança técnica, Sérgio, ou Seocam, já passou por empresas como Red
                  Hat e Liber Capital, contribuindo para tornar plataformas mais
                  robustas, escaláveis e com processos mais eficientes. Atualmente está
                  na Uber, onde atua na evolução das APIs que conectam comerciantes e
                  integradores à plataforma Uber Eats.
                  <br />É cofundador da Associação Python Brasil e ex-Mozilla
                  Representative, além de ter um longo histórico de envolvimento com
                  comunidades de software livre.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
