import React from 'react';

const Footer = () => (
  <footer className="site-bar">
    <div className="row">
      <div
        className="small-12 columns"
        data-equalizer
        data-equalize-on="medium"
      >
        <div id="navigation" className="row">
          <div className="small-12 medium-6 large-4 columns text-center">
            <div className="footer__section">
              <div className="footer__content" data-equalizer-watch>
                <h4>Find Us</h4>
                <div className="map__container">
                  <div
                    id="footer-map"
                    style={{
                      width: '400px',
                      height: '300px',
                      border: '1px solid #2c2c2c',
                      margin: '20px',
                    }}
                  >
                    {/* <img src="/map.static.png" /> */}
                  </div>
                </div>
                <a
                  className="small button hollow"
                  href="https://www.google.com/maps/place/Zuckerberg+San+Francisco+General+Hospital/@37.7556605,-122.4072486,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7e4bb2d3d61b:0xc7e327c61cf31c06!8m2!3d37.7556563!4d-122.4050599?hl=en"
                >
                  Google Map
                </a>
              </div>
              <div className="footer__end">
                <address>
                  <p>
                    Zuckerberg San Francisco General
                    <br />
                    1001 Potrero Ave
                    <br />
                    San Francisco, CA 94110
                  </p>
                </address>
              </div>
            </div>
          </div>
          <div className="small-12 medium-6 large-4 columns text-center">
            <div className="footer__section">
              <div className="footer__content" data-equalizer-watch>
                <h4>About Us</h4>
                <p>
                  Zuckerberg San Francisco General Hospital and Trauma Center
                  provides world-class care for the people of San Francisco,
                  regardless of ability to pay or immigration status.
                </p>
                <a className="small button hollow" href="/about-us/careers/">
                  Careers
                </a>
                <br />
                <a className="small button hollow" href="/about-us/news">
                  News & Media
                </a>
                <br />
                <a className="small button hollow" href="/about-us/events">
                  Community Events
                </a>
                <br />
                <a
                  className="small button hollow"
                  href="/about-us/get-involved/"
                >
                  Make a Gift
                </a>
                <br />
              </div>
              <div className="footer__end">
                <p>
                  Call <a href="tel:+16282068000">628 206 8000</a> for General
                  Information
                  <br />
                  Call 911 for a Medical Emergency
                </p>
              </div>
            </div>
          </div>
          <div className="small-12 medium-12 large-4 columns text-center">
            <div className="footer__section">
              <div className="footer__content" data-equalizer-watch>
                <h4>SF Health Network</h4>

                <p>
                  The SF Health Network is a community of top-rated clinics,
                  hospitals, and programs including ZSFG, Laguna Honda, and
                  community clinics across San Francisco.
                </p>

                <a
                  className="small button hollow"
                  href="http://www.sfhealthnetwork.org"
                >
                  Learn More
                </a>
                <br />

                <img
                  alt="SF Health Network"
                  src="/images/sfhn-brand-logo-heart-only-white-sized.png"
                />
              </div>
              <div className="footer__end">
                <p>
                  Direct questions, comments or suggestions about this site to{' '}
                  <a href="mailto:Website@sfdph.org">Website@sfdph.org</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row expanded">
      <div className="small-12 columns">
        <div id="brand" className="row text-center expanded">
          <div className="small-12 columns">
            <img
              className="brand-logo"
              src="/images/brand-logo.png"
              alt=""
              title=""
            />
            <p>
              © Copyright 1998 - 2018, Department of Public Health, City and
              County of San Francisco
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
