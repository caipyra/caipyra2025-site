export default function Local() {
  return (
    <div id="local" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Local</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p>
              Os tutoriais, palestras e sprints acontecerão na{' '}
              <b>FATEC Ribeirão Preto</b>
            </p>

            <p>
              <b>Av. Pio XII, 1255 - Vila Virginia - Ribeirão Preto/SP</b>
            </p>
          </div>
          <div className="col-md-6">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.132263018285!2d-47.83625102408651!3d-21.186904178677697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9be853fd0a0d1%3A0x72dd14d11fb17838!2sFatec%20Ribeir%C3%A3o%20Preto!5e0!3m2!1sen!2sbr!4v1737433216516!5m2!1sen!2sbr"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
