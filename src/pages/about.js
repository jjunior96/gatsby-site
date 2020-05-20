import React from 'react';
import { Helmet } from 'react-helmet';

import { Link } from 'gatsby';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <Helmet>
        <title>About - Screen</title>
      </Helmet>
      <h1>About</h1>
      <Link to="/contact">Contact</Link>
    </Layout>
  );
};

export default About;
