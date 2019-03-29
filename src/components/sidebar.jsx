import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const ImageContainer = ({ images }) => {
  if (images && images.length > 0) {
    return (
      <div className="sidebar-image-container">
        {images.map(image => (
          <div className="sidebar-image-wrapper" key={image.relativePath}>
            <Img fluid={image.childImageSharp.fluid} />
          </div>
        ))}
      </div>
    );
  }
  return null;
};

ImageContainer.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

const Events = ({ events }) => {
  if (events) {
    const { title, description, sections } = events;

    return (
      <div className="callout">
        <div className="callout__content">
          <span className="icon icon-calendar schedule__icon" />
          <h3>{title}</h3>
          <p>{description}</p>
          {sections &&
            sections.map(({ title, description }) => (
              <div key={title}>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            ))}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const QuickLinks = () => (
  <div className="quick__links callout callout__borderless show-for-large">
    <h6 className="container__title">In This Section</h6>
    <div className="callout__content">
      <nav className="links">
        <div className="link__section">
          <h4 className="page__title">Getting Here</h4>
          <nav className="links">
            <a href="https://zuckerbergsanfranciscogeneral.org/patient-visitor-resources/getting-here/">
              Directions, Map, Transit, Parking
            </a>
          </nav>
        </div>
        <div className="link__section">
          <h4 className="page__title">Patient Services</h4>
          <nav className="links">
            <a href="https://zuckerbergsanfranciscogeneral.org/patient-visitor-resources/billing-insurance/">
              Billing &amp; Financial Assistance
            </a>

            <a href="https://zuckerbergsanfranciscogeneral.org/patient-visitor-resources/eligibility-and-enrollment/">
              Sign Up, Enrollment, Insurance
            </a>

            <a href="https://zuckerbergsanfranciscogeneral.org/patient-visitor-resources/outpatient-pharmacy/">
              Outpatient Pharmacy
            </a>
          </nav>
        </div>
        <div className="link__section">
          <h4 className="page__title">Patient Support</h4>
          <nav className="links">
            <a href="https://zuckerbergsanfranciscogeneral.org/patient-visitor-resources/interpreter-services/">
              Interpreter Services
            </a>

            <a href="https://zuckerbergsanfranciscogeneral.org/patient-visitor-resources/refugee-services/">
              Refugee Assistance
            </a>

            <a href="https://zuckerbergsanfranciscogeneral.org/patient-visitor-resources/spiritual-care/">
              Spiritual &amp; Emotional Care
            </a>

            <a href="https://zuckerbergsanfranciscogeneral.org/patient-visitor-resources/patient-experience/">
              Office of Patient Experience
            </a>
          </nav>
        </div>
        <div className="link__section">
          <h4 className="page__title">Health Resources</h4>
          <nav className="links">
            <a
              href="http://zsfglibrary.ucsf.edu/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Health Resource Library @UCSF.edu
            </a>
          </nav>
        </div>
      </nav>
    </div>
  </div>
);

const Contact = () => (
  <div className="callout callout__borderless locations top__image">
    <div
      className="img_4_3"
      style={{
        background: 'url(/media/BLG-5_Location-300x188.jpg) no-repeat',
      }}
      role="img"
      aria-label="Building 5"
    />

    <div className="callout__content">
      <p>
        <strong>Community Wellness Center</strong>
        <br />
        Zuckerberg San Francisco General
        <br />
        1001 Portrero Avenue
        <br />
        San Francisco, CA 94110
        <br />
        Building 5, 2nd Floor, Rm 2D35
      </p>
      <a
        href="https://www.google.com/maps/place/Zuckerberg+San+Francisco+General+Hospital/@37.7556563,-122.4061569,18z/data=!3m1!4b1!4m5!3m4!1s0x808f7e4bb2d3d61b:0xc7e327c61cf31c06!8m2!3d37.7556563!4d-122.4050599"
        className="button hollow"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Google Map
      </a>

      <ul
        className="accordion no-padding"
        data-accordion="kvrdwi-accordion"
        data-allow-all-closed="true"
        role="tablist"
      >
        <li className="accordion-item" data-accordion-item="">
          <a
            href="#"
            className="accordion-title"
            aria-controls="xq4nwr-accordion"
            role="tab"
            id="xq4nwr-accordion-label"
            aria-expanded="false"
            aria-selected="false"
          >
            Hours
          </a>
          <div
            className="accordion-content"
            data-tab-content=""
            role="tabpanel"
            aria-labelledby="xq4nwr-accordion-label"
            aria-hidden="true"
            id="xq4nwr-accordion"
          >
            <h6>Class Schedule</h6>{' '}
            <div className="hour-rows">
              <div className="row">
                <div className="small-6">Monday – Saturday</div>
                <div className="small-6 text-right" />
              </div>
            </div>
            <p>
              <a
                href="http://sfghwellness.org/cal/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Check the Schedule
              </a>
            </p>
          </div>
        </li>

        <li className="accordion-item" data-accordion-item="">
          <a
            href="#"
            className="accordion-title"
            aria-controls="6murl2-accordion"
            role="tab"
            id="6murl2-accordion-label"
            aria-expanded="false"
            aria-selected="false"
          >
            Contact
          </a>
          <div
            className="accordion-content"
            data-tab-content=""
            role="tabpanel"
            aria-labelledby="6murl2-accordion-label"
            aria-hidden="true"
            id="6murl2-accordion"
          >
            <div className="hour-rows">
              <div className="row">
                <div className="small-6">Phone</div>
                <div className="small-6 text-right">
                  <a href="tel:+16282064995">628 206 4995</a>
                </div>
              </div>
              <div className="row">
                <div className="small-6" />
                <div className="small-6 text-right" />
              </div>
            </div>

            <p>
              <a href="mailto:SFGHwellness@sfdph.org">SFGHwellness@sfdph.org</a>
            </p>
          </div>
        </li>

        <li className="accordion-item" data-accordion-item="">
          <a
            href="#"
            className="accordion-title"
            aria-controls="y0raav-accordion"
            role="tab"
            id="y0raav-accordion-label"
            aria-expanded="false"
            aria-selected="false"
          >
            Public Transport
          </a>

          <div
            className="accordion-content"
            data-tab-content=""
            role="tabpanel"
            aria-labelledby="y0raav-accordion-label"
            aria-hidden="true"
            id="y0raav-accordion"
          >
            <p>
              <strong>Muni</strong>
              <br />
              Our Main Campus is served by Muni routes 9, 10, 33, 49, and 90.
              <br />
              <a
                href="https://www.sfmta.com/getting-around/transit/routes-stops"
                rel="noopener noreferrer"
                target="_blank"
              >
                View Muni Schedule
              </a>
            </p>
            <p>
              <a
                href="http://511.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Plan Your Trip
              </a>
            </p>
            <p>
              <strong>BART</strong>
              <br />
              The closest BART stop is the 24th Street Mission station.
              <br />
              <a
                href="https://www.bart.gov/"
                rel="noopener noreferrer"
                target="_blank"
              >
                View BART Schedule
              </a>
            </p>
            <p>
              <a
                href="http://511.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Plan Your Trip
              </a>
            </p>
            <p>
              <strong>Free Shuttles</strong>
              <br />
              <strong>UCSF Shuttle</strong>
              <br />
              Free shuttle to UCSF locations in the city, including our Main
              Campus.
            </p>
            <p>
              <a
                href="http://campuslifeservices.ucsf.edu/transportation/services/shuttles/routes_timetables"
                rel="noopener noreferrer"
                target="_blank"
              >
                View Shuttle Map &amp; Schedule
              </a>
            </p>
            <p>
              <strong>ZSFG Shuttle</strong>
              <br />
              Free shuttle to the 24th Street Mission BART station during peak
              commute times.
              <br />
              <a href="https://zuckerbergsanfranciscogeneral.org/wp-content/uploads/2018/09/shuttletoBART_online_092518.pdf">
                View Shuttle Map &amp; Schedule (pdf)
              </a>
            </p>
          </div>
        </li>

        <li className="accordion-item" data-accordion-item="">
          <a
            href="#"
            className="accordion-title"
            aria-controls="aq6b74-accordion"
            role="tab"
            id="aq6b74-accordion-label"
            aria-expanded="false"
            aria-selected="false"
          >
            Parking
          </a>

          <div
            className="accordion-content"
            data-tab-content=""
            role="tabpanel"
            aria-labelledby="aq6b74-accordion-label"
            aria-hidden="true"
            id="aq6b74-accordion"
          >
            <p>
              <strong> On Campus</strong>
              <br />
              Enter hospital campus driveway and turn right into the surface
              lot.
            </p>
            <p>
              <strong>23rd Street Parking Garage</strong>
              <br />
              Enter from 24th Street (during the day) and 23rd Street (in the
              evening).
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

const AdditionalResources = () => (
  <div className="quick__links related callout callout__borderless">
    <h3 className="container__title">Additional Resources </h3>

    <div className="callout__content">
      <nav className="links">
        <a
          href="https://zuckerbergsanfranciscogeneral.org/wp-content/uploads/2019/01/Wellness-Waiver_ENG_2019.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Sign Up</p>
          <p>Registration Form</p>
        </a>
        <a href="https://zuckerbergsanfranciscogeneral.org/wp-content/uploads/2018/08/ZSFG-Community-Wellness-Program-Tri-fold-rev-2017-12-19.pdf">
          <p>Read Our Brochure</p>
        </a>
        <a href="https://zuckerbergsanfranciscogeneral.org/wp-content/uploads/2019/01/WOW-Winter-Spring-2019-En-Sp-Ch.pdf">
          <p>Class Schedule</p>
        </a>
        <a href="https://zuckerbergsanfranciscogeneral.org/wp-content/uploads/2019/02/ZSFG-Wellness-Navigator-Application.pdf">
          <p>Intern/Volunteer Opportunities</p>
          <p>Review the application</p>
        </a>
      </nav>
    </div>
  </div>
);

const Sidebar = ({ events, images }) => (
  <div className="side__bar small-12 large-4 columns">
    <div className="row">
      <ImageContainer images={images} />
      <div className="small-12 columns">
        <Events events={events} />
        <Contact />
        <AdditionalResources />
      </div>
    </div>
  </div>
);

Sidebar.propTypes = {
  events: PropTypes.object,
  images: PropTypes.arrayOf(PropTypes.object),
};

Sidebar.defaultProps = {
  images: [],
};

export { ImageContainer, Events, QuickLinks, Contact, AdditionalResources };

export default Sidebar;
