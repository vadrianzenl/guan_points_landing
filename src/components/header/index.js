import React from 'react';

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <h1><span className="turquoise">StartUp Landing</span> Page Template Free</h1>
                <p className="p-large">Use Evolo free landing page template to promote your business startup and
                  generate leads for the offered services</p>
                <a className="btn-solid-lg page-scroll" href="#services">DISCOVER</a>
              </div>
              {/* end of text-container */}
            </div>
            {/* end of col */}
            <div className="col-lg-6">
              <div className="image-container">
                <img className="img-fluid" src="/static/images/header-teamwork.svg" alt="alternative" />
              </div>
              {/* end of image-container */}
            </div>
            {/* end of col */}
          </div>
          {/* end of row */}
        </div>
        {/* end of container */}
      </div>
      {/* end of header-content */}
    </header>
  );
};

export default Header;