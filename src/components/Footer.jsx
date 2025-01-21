import EmailLink from './EmailLink';

export default function Footer() {
  return (
    <>
      <div id="footer">
        <div className="container text-center">
          <p>
            Tem alguma dúvida sobre o evento? Fale conosco em <EmailLink />
          </p>
          <p>
            Caypira is a non-profit volunteer-driven conference for promoting the
            open-source Python programming language. It is supported by the Brazilian
            Python Association (APyB).
          </p>
          <p>
            Caypira é uma conferência sem fins lucrativos, conduzida por voluntários,
            para promover a linguagem de código aberto Python. É apoiada pela Associação
            Python Brasil (APyB).
          </p>
        </div>
      </div>
    </>
  );
}
