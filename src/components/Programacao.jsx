import EmailLink from './EmailLink';

export default function Programacao() {
  return (
    <>
      <div id="programacao" className="text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-md-offset-1 section-title">
              <h2>Programação</h2>
            </div>
              <pretalx-schedule
                event-url="https://talks.python.org.br/caipyra-2025/"
                locale="en"
                style={{ '--pretalx-clr-primary': '#0d6efd' }}
              />
          </div>
        </div>
      </div>
    </>
  );
}
