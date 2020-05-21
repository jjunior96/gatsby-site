import styled from 'styled-components';
import { Link } from 'gatsby';

export const HeaderWrapper = styled.div`
  padding: 0 0 64px;
  max-width: 980px;
`;

export const HeadLine = styled.div`
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 0.5rem;
  color: #132f40;
`;

export const Description = styled.div`
  font-size: 18px;
  margin-bottom: 32px;
  line-height: 1.5;
  font-weight: 300;
  color: #132f40;
`;

export const LinkButtom = styled(Link)`
  align-items: center;
  border-radius: 10px;
  text-decoration: none;
  font-size: 18px;
  background: #f27d52;
  color: #fff;
  /* Expande o botao */
  padding: 18px;
`;
