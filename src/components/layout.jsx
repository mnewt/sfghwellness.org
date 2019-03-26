import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Header from './header';
import Footer from './footer';
import './layout.css';

const Layout = ({ children, location, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            keywords
            menu
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

  useEffect(() => {
    document.onload = () => {
      document.jQuery(document).foundation();
    };
  });

  return (
    <>
      <div className="off-canvas-wrapper">
        <Header location={location} siteUrl={siteUrl} title={title} />
        <section
          className="module__hero"
          data-interchange="[https://zuckerbergsanfranciscogeneral.org/wp-content/uploads/2017/05/FeetWalkingThroughDoorway_Header-1280x473.jpg, small], [https://zuckerbergsanfranciscogeneral.org/wp-content/uploads/2017/05/FeetWalkingThroughDoorway_Header-1280x473.jpg, medium], [https://zuckerbergsanfranciscogeneral.org/wp-content/uploads/2017/05/FeetWalkingThroughDoorway_Header-1920x710.jpg, large]"
        >
          <div className="module__container row">
            <div className="small-12">
              <h1>
                {siteTitle}
                {siteTitle !== pageTitle && <small>{pageTitle}</small>}
              </h1>
            </div>
          </div>
        </section>
        <section className="module__main">
          <div className="row">
            <div className="small-12 columns feature__body">
              <div className="feature__content">
                <nav
                  aria-label="You are here:"
                  role="navigation"
                  className="show-for-medium"
                >
                  <div className="breadcrumbs" id="breadcrumbs">
                    <span>
                      <span typeof="v:Breadcrumb">
                        <a
                          href="https://zuckerbergsanfranciscogeneral.org/"
                          rel="v:url"
                          property="v:title"
                        >
                          Home
                        </a>{' '}
                        /{' '}
                        <span rel="v:child" typeof="v:Breadcrumb">
                          <a href="/" rel="v:url" property="v:title">
                            Community Wellness Program
                          </a>{' '}
                          /{' '}
                          <strong className="breadcrumb_last">
                            {pageTitle}
                          </strong>
                        </span>
                      </span>
                    </span>
                  </div>{' '}
                </nav>
              </div>
              {children}
            </div>
          </div>
        </section>
        <Footer location={location} siteUrl={siteUrl} title={pageTitle} />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
  title: PropTypes.string,
};

export default Layout;
