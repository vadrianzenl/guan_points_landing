import React from 'react';

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <h1><span className="turquoise">Guan</span> <br />Gana en Guan</h1>
                <p className="p-large">ADS UNMSM, es una plataforma de lealtad y marketing digital que conecta tu negocio con tus clientes de una manera divertida</p>
                <a className="btn-solid-lg page-scroll" href="#services">DESCUBRIR</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-container">
                <img className="img-fluid" src="/static/images/header-teamwork.svg" alt="alternative" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;