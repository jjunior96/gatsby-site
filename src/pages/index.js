import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Header from '../components/Header';
import PostItem from '../components/PostItem';
// import PostWrapper from '../components/PostWrapper';

import SEO from '../components/seo';

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              category
              description
              background
            }
            timeToRead
          }
        }
      }
    }
  `);

  const postList = allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <Helmet>
        <title>Home - Screen</title>
      </Helmet>
      <Header />
      {/* <PostWrapper /> */}

      {postList.map(
        ({
          node: {
            frontmatter: { background, category, date, description, title },
            timeToRead,
          },
        }) => (
          <PostItem
            key={Math.random()}
            slug="/about/"
            category={category}
            date={date}
            timeToRead={timeToRead}
            title={title}
            description={description}
            background={background}
          />
        )
      )}
    </Layout>
  );
};

export default IndexPage;
