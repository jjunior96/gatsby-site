import styled from 'styled-components';
import { Link } from 'gatsby';

export const ProfileWrapper = styled.section`
  display: flex;
  flex-direction: column;
  color: #f0f1f2;
`;

export const ProfileLink = styled(Link)`
  text-decoration: none;
  transition: color 0.5s;
  color: #f0f1f2;

  &:hover {
    color: #abc8e2;
  }
`;

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  font-weight: 400;
  margin: 0.5rem auto 1.5rem;
`;

export const ProfilePosition = styled.h3`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
`;

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;
`;
