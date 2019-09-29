import React from 'react';

const Testimonials = () => {
  return (
    <div className="slider-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="image-container">
              <img
                className="img-fluid"
                src="/static/images/testimonials-2-men-talking.svg"
                alt="alternative"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <h2>Beneficios</h2>

            <div className="slider-container">
              <div className="swiper-container card-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="card">
                      <img
                        className="card-image"
                        src="/static/images/testimonial-1.svg"
                        alt="alternative"
                      />
                      <div className="card-body">
                        <p className="testimonial-text">
                          En guan puedo personalizar mis ofertas de acuerdo a los beneficios que quiero brindar
                        </p>
                        <p className="testimonial-author">Encontrar ofertas personalizadas</p>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="card">
                      <img
                        className="card-image"
                        src="/static/images/testimonial-2.svg"
                        alt="alternative"
                      />
                      <div className="card-body">
                        <p className="testimonial-text">
                          A más puntos acumulados, más ahorro en mi proxima compra
                        </p>
                        <p className="testimonial-author">Ahorra en tus compras diarias</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
