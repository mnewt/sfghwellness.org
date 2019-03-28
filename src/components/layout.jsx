import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import jQuery from 'jquery';

import MobileMenu from './mobile-menu';
import Header from './header';
import Footer from './footer';
import Hero from './hero';
import Breadcrumb from './breadcrumb';
import Events from './events';
import Sidebar from './sidebar';

import './layout.css';

const initFoundation = () => {
  // if (
  //   typeof jQuery !== 'undefined' &&
  //   typeof Foundation !== 'undefined' &&
  //   typeof Foundation.DropdownMenu !== 'undefined'
  // ) {
  //   // Tell foundation to initialize only after React has rendered the DOM and
  //   // jQuery and Foundation have been loaded.
  //   jQuery(document).foundation();
  //   console.log('initialized foundation.');
  // } else {
  //   setTimeout(initFoundation, 10);
  // }

  require('foundation-sites');

  jQuery(document).foundation();
};

const Layout = ({
  children,
  pageEvents,
  sidebarEvents,
  images,
  location,
  title,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteUrl
            title
          }
        }
      }
    `
  );
  const { siteUrl } = site.siteMetadata;
  const siteTitle = site.siteMetadata.title;
  const pageTitle = title || siteTitle;

  useEffect(initFoundation);

  return (
    <div className="off-canvas-wrapper">
      <MobileMenu />
      <Header location={location} siteUrl={siteUrl} title={title} />
      <Hero pageTitle={pageTitle} />
      <section className="module__main">
        <div className="row">
          <div className="main__container small-12 large-8 columns">
            <div className="row">
              <div className="small-12 columns feature__body">
                <div className="feature__content">
                  <Breadcrumb pageTitle={pageTitle} siteTitle={siteTitle} />
                  {children}
                </div>
              </div>
              <Events events={pageEvents} />
            </div>
          </div>
          <Sidebar events={sidebarEvents} images={images} />
        </div>
      </section>
      <Footer location={location} siteUrl={siteUrl} title={pageTitle} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageEvents: PropTypes.object,
  sidebarEvents: PropTypes.object,
  images: PropTypes.array,
  location: PropTypes.object.isRequired,
  title: PropTypes.string,
};

export default Layout;
