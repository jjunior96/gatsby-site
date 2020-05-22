import styled from 'styled-components';
import Img from 'gatsby-image';

export const AvatarWrapper = styled(Img)`
  border-radius: 50%;
  height: 3.75rem; /* por padrao a Tag Img tem 16px, vezes 3.75 = 60px */
  width: 3.75rem; /* por padrao a Tag Img tem 16px, vezes 3.75 = 60px */
  margin: auto;
`;
