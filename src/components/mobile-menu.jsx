import React from 'react';

const MobileMenu = () => (
  <div
    className="off-canvas position-right off-canvas-mobile is-transition-push"
    id="offCanvas"
    data-off-canvas="rcar5u-off-canvas"
    aria-hidden="true"
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
      data-accordion-menu="a92nu3-accordion-menu"
      role="menu"
      aria-multiselectable="true"
    >
      <li
        role="menuitem"
        className="is-accordion-submenu-parent"
        aria-haspopup="true"
        aria-label="English"
        aria-controls="htvp2q-acc-menu"
        aria-expanded="false"
        id="jdb7v7-acc-menu-link"
      >
        <a className="language__select" href="#">
          English
        </a>
        <ul
          className="menu vertical nested submenu is-accordion-submenu"
          data-submenu=""
          role="menu"
          aria-labelledby="jdb7v7-acc-menu-link"
          aria-hidden="true"
          id="htvp2q-acc-menu"
          style={{ display: 'none' }}
        >
          <li
            role="menuitem"
            className="is-submenu-item is-accordion-submenu-item"
          >
            <a href="https://zuckerbergsanfranciscogeneral.org/patient-visitor-resources/community-wellness-center/">
              English
            </a>
          </li>
          <li
            role="menuitem"
            className="is-submenu-item is-accordion-submenu-item"
          >
            <a href="https://zuckerbergsanfranciscogeneral.org/zh-hant/patient-visitor-resources/community-wellness-center/">
              Chinese (Traditional)
            </a>
          </li>
          <li
            role="menuitem"
            className="is-submenu-item is-accordion-submenu-item"
          >
            <a href="https://zuckerbergsanfranciscogeneral.org/es-us/patient-visitor-resources/community-wellness-center/">
              Spanish
            </a>
          </li>{' '}
          <li
            role="menuitem"
            className="is-submenu-item is-accordion-submenu-item"
          >
            <a href="https://zuckerbergsanfranciscogeneral.org/russian/">
              Russian
            </a>
          </li>
          <li
            role="menuitem"
            className="is-submenu-item is-accordion-submenu-item"
          >
            <a href="https://zuckerbergsanfranciscogeneral.org/tagalog/">
              Tagalog
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <div className="is-drilldown">
      <ul
        id="menu-header-menu"
        className="vertical menu"
        data-drilldown="grebnw-drilldown"
        role="menubar"
        data-mutate="dppolj-drilldown"
      >
        <li
          className="icon icon-home menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-223"
          role="menuitem"
        >
          <a href="https://zuckerbergsanfranciscogeneral.org/">Home</a>
        </li>
        <li
          className="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current_page_ancestor menu-item-has-children menu-item-235"
          role="menuitem"
        >
          <a href="https://zuckerbergsanfranciscogeneral.org/get-started/">
            Get Started
          </a>
        </li>
        <li
          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-232"
          role="menuitem"
        >
          <a href="https://zuckerbergsanfranciscogeneral.org/find-care/">
            Find Care
          </a>
        </li>
        <li
          className="menu-item menu-item-type-post_type menu-item-object-page current-page-ancestor current-menu-ancestor current-page-parent current_page_ancestor menu-item-has-children menu-item-237"
          role="menuitem"
        >
          <a href="https://zuckerbergsanfranciscogeneral.org/patient-visitor-resources/">
            Patient &amp; Visitor Information
          </a>
        </li>
        <li
          className="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current_page_ancestor menu-item-has-children menu-item-224"
          role="menuitem"
        >
          <a href="https://zuckerbergsanfranciscogeneral.org/about-us/">
            About Us
          </a>
        </li>
        <li
          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-231"
          role="menuitem"
        >
          <a href="https://zuckerbergsanfranciscogeneral.org/contact-us/">
            Contact
          </a>
        </li>
      </ul>
    </div>{' '}
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
      rel="noopener noreferrer"
    >
      My SF Health Login
    </a>
    <p className="weight-light">
      We’re Here to Help. Call{' '}
      <a aria-label="Telephone Number" href="tel:628 206 8000">
        {' '}
        628 206 8000 .
      </a>
    </p>
    <a aria-label="Telephone Number" href="tel:628 206 8000" />
  </div>
);

export default MobileMenu;
