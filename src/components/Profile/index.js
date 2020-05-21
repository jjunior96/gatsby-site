import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Avatar from '../Avatar';

const Profile = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            position
            description
          }
        }
      }
    `
  );

  return (
    <div>
      <Avatar />
      <h1>{data.site.siteMetadata.title}</h1>
      <h3>{data.site.siteMetadata.position}</h3>
      <p>{data.site.siteMetadata.description}</p>
    </div>
  );
};

export default Profile;
