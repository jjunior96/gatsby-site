import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Header from '../components/Header';

import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Helmet>
        <title>Home - Screen</title>
      </Helmet>
      <Header />
    </Layout>
  );
};

export default IndexPage;
