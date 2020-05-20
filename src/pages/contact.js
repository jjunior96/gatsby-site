import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <h1>Contact</h1>
      <Link to="/about">About</Link>
    </Layout>
  );
};

export default Contact;
