import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  align-items: center;
  background: #3a3e40;
  display: flex;
  flex-direction: column;
  /* 100% da altura do dispositivo */
  height: 100vh;
  /* a Sidebar ficará fixa no canto esquerdo */
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;
`;
