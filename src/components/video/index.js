import React from 'react';

const Video = () => {
  return (
    <div className="basic-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Mira nuestro Video</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="image-container">
              <div className="video-wrapper">
                <a
                  className="popup-youtube"
                  href="https://www.youtube.com/watch?v=_6ARzIxi1m0"
                  data-effect="fadeIn"
                >
                  <img
                    className="img-fluid"
                    src="/static/images/video-frame.svg"
                    alt="alternative"
                  />
                  <span className="video-play-button">
                    <span/>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
