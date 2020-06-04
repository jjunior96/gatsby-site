import styled from 'styled-components';

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
