import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = ({ pageTitle, siteTitle }) => (
  <nav aria-label="You are here:" role="navigation" className="show-for-medium">
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
              {siteTitle}
            </a>{' '}
            / <strong className="breadcrumb_last">{pageTitle}</strong>
          </span>
        </span>
      </span>
    </div>{' '}
  </nav>
);

Breadcrumb.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  pageTitle: PropTypes.string,
};

Breadcrumb.defaultProps = {
  pageTitle: '',
};

export default Breadcrumb;
