import styled from 'styled-components';

// padding: espaçamento dentro do conteudo
// margin: espaçamento fora do conteudo

export const LayoutWrapper = styled.div`
  padding: 32px;
  max-width: 1140px;
  /* Centraliza o conteudo */
  margin: 0 auto;
  margin-left: 400px;
  /* background: #ddd; */

  img {
    max-width: 100%;
  }
`;

export const SiteHeader = styled.header`
  display: flex;
  /* background: #51868c; */
  /* Title fica na esquerda e navigation na direita */
  justify-content: space-between;
  padding: 20px 0;
  margin-bottom: 32px;
  align-items: center;
`;

export const SiteTitle = styled.div`
  a {
    text-decoration: none;
    font-weight: 900;
    text-transform: uppercase;
  }
`;
