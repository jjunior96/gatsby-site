import React from 'react';
import { Link } from 'gatsby';

import * as S from './styled';

const Navigation = () => {
  return (
    <S.NavigationWrapper>
      <Link to="/Contact">Contact</Link>
      <p>Theme Change</p>
    </S.NavigationWrapper>
  );
};

export default Navigation;
