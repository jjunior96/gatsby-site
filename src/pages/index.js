import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';

import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Header />
      <h1>Home</h1>
    </Layout>
  );
};

export default IndexPage;
