import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const Categories = () => {
  return (
    <Layout>
      <Helmet>
        <title>Categories</title>
      </Helmet>
      <h1>Categories Page</h1>
      <Link to="/about">About</Link>
    </Layout>
  );
};

export default Categories;
