import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
// import Sidebar from '../components/Sidebar';

import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <Layout>
        <SEO />
        <Header />
      </Layout>
    </>
  );
};

export default IndexPage;
