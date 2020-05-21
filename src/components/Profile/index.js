import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Avatar from '../Avatar';

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(
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
      <h1>{title}</h1>
      <h3>{position}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Profile;
