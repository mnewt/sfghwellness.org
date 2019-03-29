import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link, useStaticQuery } from 'gatsby';

const MobileMenu = ({ location }) => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/pages/" } }
          sort: { order: ASC, fields: [frontmatter___weight] }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );
  const pages = allMarkdownRemark.edges;

  return (
    <div
      className="off-canvas position-right off-canvas-mobile"
      id="offCanvas"
      data-off-canvas
    >
      <button
        className="close-button"
        aria-label="Close menu"
        type="button"
        data-close=""
      >
        <span aria-hidden="true">×</span>
      </button>
      <div className="menu-title">Main Menu</div>
      <ul
        id="language__selector_mobile"
        className="vertical menu accordion-menu"
        data-accordion-menu
      >
        <li>
          <a className="language__select" href="#">
            English
          </a>
          <ul className="menu vertical nested">
            <li>
              <a href="https://zuckerbergsanfranciscogeneral.org/">English</a>
            </li>
            <li>
              <a href="https://zuckerbergsanfranciscogeneral.org/zh-hant/">
                Chinese (Traditional)
              </a>
            </li>
            <li>
              <a href="https://zuckerbergsanfranciscogeneral.org/es-us/">
                Spanish
              </a>
            </li>{' '}
            <li>
              <a href="https://zuckerbergsanfranciscogeneral.org/russian/">
                Russian
              </a>
            </li>
            <li>
              <a href="https://zuckerbergsanfranciscogeneral.org/tagalog/">
                Tagalog
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <ul id="menu-header-menu" className="vertical menu" data-drilldown="">
        <li className="icon icon-home menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-223">
          <a href="https://zuckerbergsanfranciscogeneral.org/">Home</a>
        </li>
        {pages.map(page => {
          const { title } = page.node.frontmatter;
          const path = page.node.fields.slug;
          var c =
            'menu-item menu-item-type-post_type menu-item-object-page page_item';
          if (location && path === location.pathname)
            c = 'current-menu-item current_page_item' + c;

          return (
            <li key={path} className={c}>
              <Link to={path}>{title}</Link>
            </li>
          );
        })}
      </ul>{' '}
      <form
        className="search__container"
        action="https://zuckerbergsanfranciscogeneral.org/"
        role="search"
        method="get"
      >
        <input
          aria-label="Search"
          id="search__box_mobile"
          type="text"
          className="search__box"
          name="s"
          placeholder="How can we help care for you?"
        />
        <span className="icon icon-magnifier  search__icon" />
        <input type="submit" id="search-submit-btn" value="Submit" />
      </form>
      <a
        href="https://epp.ecwcloud.com/epp7/jsp/epp/epp_login.jsp"
        className="small button hollow"
        target="_blank"
      >
        My SF Health Login
      </a>
      <p className="weight-light">
        We’re Here to Help. Call{' '}
        <a aria-label="Telephone Number" href="tel:628 206 8000">
          {' '}
          628 206 8000
        </a>
      </p>
    </div>
  );
};

MobileMenu.propTypes = {
  location: PropTypes.object.isRequired,
};

export default MobileMenu;
