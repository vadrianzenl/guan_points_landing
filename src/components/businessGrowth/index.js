import React from 'react';

const BusinessGrowth = () => {
  return (
    <div id="services" className="cards-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>¿Cómo funciona Guan?</h2>
            <p className="p-heading p-large">
              Acumula puntos y ahorra pagando con tus puntos Guan, ademas obten miles de descuentos en tus lugares favoritos
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card col-lg-4">
              <img
                className="card-image"
                src="/static/images/services-icon-1.png"
                alt="alternative"
              />
              <div className="card-body">
                <h4 className="card-title">Compra</h4>
                <p>
                  Compra en tu lugar favorito
                </p>
              </div>
            </div>
            <div className="card col-lg-4">
              <img
                className="card-image"
                src="/static/images/services-icon-2.png"
                alt="alternative"
              />
              <div className="card-body">
                <h4 className="card-title">Gana puntos</h4>
                <p>
                  Escanea el código QR de tu boleta electrónica y gana puntos Guan todos los días
                </p>
              </div>
            </div>

            <div className="card col-lg-4">
              <img
                className="card-image"
                src="/static/images/services-icon-3.png"
                alt="alternative"
              />
              <div className="card-body">
                <h4 className="card-title">Paga con puntos</h4>
                <p>
                  Paga tu próxima compra con tus puntos Guan y ¡Ahorra!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessGrowth;
