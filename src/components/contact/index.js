import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="form-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Información de Contacto</h2>
            <ul className="list-unstyled li-space-lg">
              <li className="address">
                Gana tus pimeros puntos en Guan, registrándote y compartiendo tu código
              </li>
              <li>
                <i className="fas fa-map-marker-alt" />
                22 Innovative Area, San Francisco, CA 94043, US
              </li>
              <li>
                <i className="fas fa-phone" />
                <a className="turquoise" href="tel:003024630820">
                  +81 720 2212
                </a>
              </li>
              <li>
                <i className="fas fa-envelope" />
                <a className="turquoise" href="mailto:office@evolo.com">
                  guan.peru@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form id="contactForm" data-toggle="validator" data-focus="false">
              <div className="form-group">
                <input type="text" className="form-control-input" id="cname" required />
                  <label className="label-control" htmlFor="cname">Name</label>
                  <div className="help-block with-errors"/>
              </div>
              <div className="form-group">
                <input type="email" className="form-control-input" id="cemail" required />
                  <label className="label-control" htmlFor="cemail">Email</label>
                  <div className="help-block with-errors"/>
              </div>
              <div className="form-group">
                <textarea className="form-control-textarea" id="cmessage" required/>
                <label className="label-control" htmlFor="cmessage">Your message</label>
                <div className="help-block with-errors"/>
              </div>
              <div className="form-group">
                <button type="submit" className="form-control-submit-button">SUBMIT MESSAGE</button>
              </div>
              <div className="form-message">
                <div id="cmsgSubmit" className="h3 text-center hidden"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
