import styled from 'styled-components';

export const SocialLinksWrapper = styled.nav`
  margin: 1.2rem auto;
  /* Ocupa 100% do tamanho do nav */
  width: 100%;
`;

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  /* justify-content: space-around; */
  list-style: none;
`;

export const SocialLinksItem = styled.li``;

export const SocialLinksLink = styled.a`
  color: #222f3e;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #abc8e2;
  }
`;

export const IconWrapper = styled.div`
  fill: blue;
  width: 30px;
  height: 30px;
`;
