import React from 'react';
import { Helmet } from 'react-helmet';

import { Link } from 'gatsby';
import Layout from '../components/Layout';

const Projects = () => {
  return (
    <Layout>
      <Helmet>
        <title>Projects - Screen</title>
      </Helmet>
      <h1>Projects Page</h1>
      <Link to="/contact">Contact</Link>
    </Layout>
  );
};

export default Projects;
