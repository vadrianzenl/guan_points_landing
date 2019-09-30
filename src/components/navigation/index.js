import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">

      <Link href="/">
        <a className="navbar-brand logo-image"><img src="/static/images/logo.png" alt="alternative" /></a>
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-awesome fas fa-bars" />
        <span className="navbar-toggler-awesome fas fa-times" />
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#header">Inicio <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#services">Servicios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="#contact">Cont&aacute;ctenos</a>
          </li>
        </ul>
        <span className="nav-item social-icons">
                <span className="fa-stack">
                    <a href="#your-link">
                        <i className="fas fa-circle fa-stack-2x facebook"/>
                        <i className="fab fa-facebook-f fa-stack-1x"/>
                    </a>
                </span>
                <span className="fa-stack">
                    <a href="#your-link">
                        <i className="fas fa-circle fa-stack-2x twitter"/>
                        <i className="fab fa-twitter fa-stack-1x"/>
                    </a>
                </span>
            </span>
      </div>
    </nav>
  );
};

export default Navigation;