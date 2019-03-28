import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Oops! That page canʼt be found</h1>
    <p>It looks like nothing was found at this location. Maybe try a search?</p>
    <form
      role="search"
      method="get"
      className="search-form"
      action="https://zuckerbergsanfranciscogeneral.org/"
    >
      <label>
        <span className="screen-reader-text">Search for:</span>
        <input
          type="search"
          className="search-field"
          placeholder="Search …"
          value=""
          name="s"
        />
      </label>
      <input type="submit" className="search-submit" value="Search" />
    </form>
  </Layout>
);

export default NotFoundPage;
