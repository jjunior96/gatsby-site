import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Header from '../components/Header';
import PostItem from '../components/PostItem';

import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Helmet>
        <title>Home - Screen</title>
      </Helmet>
      <Header />
      <PostItem />
    </Layout>
  );
};

export default IndexPage;
