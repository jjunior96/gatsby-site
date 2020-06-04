import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostItemWrapper = styled.section`
  /* display: grid; */

  /* Cria uma coluna dentro do grid */
  /* 1fr é uma fração do espaço disponivel no container */
  /* grid-template-columns: 1fr 1fr 1fr; */

  /* grid-gap: 32px;
  margin-top: 32px; */

  display: grid;
  /* flex-wrap: wrap; */
  max-width: 960px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;

  /* @media only screen and (min-width: 1024px) {
    .grids {
      grid-template-columns: 1fr 1fr 1fr;
    }
  } */
`;

export const PostItemCard = styled.article`
  display: grid;
  background-color: #fff;
  border-radius: 9px;
  /* border: 1px solid #c8d6e5; */
  box-shadow: 0 0 30px #d5d5d5;
  overflow: hidden;
  line-height: 1.5;

  max-width: 360px;

  margin: 16px;

  /* grid-gap: 20px; */

  flex: 1 1 280px;
`;

export const PostItemLink = styled(Link)`
  color: #576574;
  display: grid;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #54a0ff;
  }
`;

export const PostIemTag = styled.div`
  align-items: center;
  background: ${props => (props.background ? props.background : 'purple')};
  color: #fff;
  display: flex;
  /* max-width: 400px; */
  height: 12rem;
`;

export const PostItemInfo = styled.div`
  padding: 24px;
`;

export const PostiItemTitle = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
`;

export const PostItemDate = styled.time`
  font-size: 0.8rem;
  color: #8395a7;
`;
