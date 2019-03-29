import PropTypes from 'prop-types';
import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

const Header = ({ location, title }) => {
  const { allMarkdownRemark, site } = useStaticQuery(
    graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/pages/" } }
          sort: { order: ASC, fields: [frontmatter___weight] }
        ) {
          edges {
            node {
              id
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
  const pageTitle = title || site.siteMetadata.title;
  const pages = allMarkdownRemark.edges;

  return (
    <div className="off-canvas-content">
      <a aria-label="Telephone Number" href="tel:628 206 8000">
        {' '}
      </a>
      <header id="header">
        <div id="primary" className="title-bar site-bar">
          <div className="row align-middle">
            <div className="title-bar-title">
              <Link to="/">
                <img src="/images/logo-zsfg.png" alt={pageTitle} />
                {/* <Img fluid={logo.childImageSharp.fluid} alt={pageTitle} /> */}
              </Link>
            </div>
            <div className="title-bar-right hide-for-large">
              <button
                className="menu-icon"
                type="button"
                data-open="offCanvas"
                aria-label="Expand Menu"
                aria-expanded="false"
                aria-controls="offCanvas"
              />
            </div>
            <div className="title-bar-right show-for-large">
              <a
                href="https://epp.ecwcloud.com/epp7/jsp/epp/epp_login.jsp"
                className="small button hollow"
                target="_blank"
                rel="noopener noreferrer"
              >
                My SF Health Login
              </a>
              <p>
                We’re Here to Help.{' '}
                <a href="tel:+6282068000">Call 628 206 8000</a>
              </p>
            </div>
          </div>
        </div>
        <div
          id="secondary"
          className="show-for-large sticky-container"
          data-sticky-container
        >
          <div
            className="top-bar-container top-bar sticky"
            data-sticky
            data-top-anchor="secondary"
            data-margin-top="0"
          >
            <div className="row">
              <div className="top-bar-left">
                <ul
                  id="menu-header-menu-1"
                  className="dropdown menu"
                  data-dropdown-menu
                  role="menubar"
                >
                  <li
                    className="icon icon-home current-menu-item current_page_item menu-item menu-item-main-menu menu-item-home"
                    data-description=""
                    role="menuitem"
                  >
                    <a
                      href="https://zuckerbergsanfranciscogeneral.org/"
                      className="menu-link sub-menu-link"
                    >
                      Home
                    </a>
                  </li>
                  {pages.map(page => {
                    const { title } = page.node.frontmatter;
                    const path = page.node.fields.slug;
                    var c = 'menu-item menu-item-main-menu';
                    if (location && path === location.pathname)
                      c = 'page-patient-visitor-resources current ' + c;

                    return (
                      <li key={path} className={c} role="menuitem">
                        <Link to={path} className="menu-link sub-menu-link">
                          {title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="top-bar-right" style={{ display: 'block' }}>
                <ul
                  id="language__selector"
                  className="dropdown menu"
                  data-dropdown-menu
                >
                  <li
                    role="menuitem"
                    className="is-dropdown-submenu-parent opens-left"
                    aria-haspopup="true"
                    aria-label="English"
                  >
                    <a className="language__select" href="#">
                      English
                    </a>
                    <ul
                      className="menu js submenu is-dropdown-submenu first-sub vertical"
                      data-submenu=""
                      role="menu"
                    >
                      <li
                        role="menuitem"
                        className="is-submenu-item is-dropdown-submenu-item"
                      >
                        <a href="https://zuckerbergsanfranciscogeneral.org/">
                          English
                        </a>
                      </li>
                      <li
                        role="menuitem"
                        className="is-submenu-item is-dropdown-submenu-item"
                      >
                        <a href="https://zuckerbergsanfranciscogeneral.org/zh-hant/">
                          Chinese (Traditional)
                        </a>
                      </li>
                      <li
                        role="menuitem"
                        className="is-submenu-item is-dropdown-submenu-item"
                      >
                        <a href="https://zuckerbergsanfranciscogeneral.org/es-us/">
                          Spanish
                        </a>
                      </li>{' '}
                      <li
                        role="menuitem"
                        className="is-submenu-item is-dropdown-submenu-item"
                      >
                        <a href="https://zuckerbergsanfranciscogeneral.org/russian/">
                          Russian
                        </a>
                      </li>
                      <li
                        role="menuitem"
                        className="is-submenu-item is-dropdown-submenu-item"
                      >
                        <a href="https://zuckerbergsanfranciscogeneral.org/tagalog/">
                          Tagalog
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form
                  className="search__container"
                  action="https://zuckerbergsanfranciscogeneral.org/"
                  role="search"
                  method="get"
                >
                  <input
                    aria-label="Site Search"
                    id="search__box"
                    type="text"
                    className="search__box"
                    name="s"
                    placeholder="How can we help care for you?"
                  />
                  <span className="icon icon-magnifier  search__icon" />
                  <input type="submit" id="search-submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired,
  title: PropTypes.string,
};

Header.defaultProps = {
  title: ``,
};

export default Header;
