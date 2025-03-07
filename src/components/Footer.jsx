import EmailLink from './EmailLink';

export default function Footer() {
  return (
    <>
      <div id="footer">
        <div className="container text-center">
          <div className="social-links">
            <a
              href="https://caipyra-py.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-bluesky" />
            </a>
            <a
              href="https://instagram.com/caipyra.py"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/caipyra/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCxmUo2KbpP77n-rLgUTvM6g"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube" />
            </a>
          </div>
          <div className="credits">
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
              para promover a linguagem de código aberto Python. É apoiada pela
              Associação Python Brasil (APyB).
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
