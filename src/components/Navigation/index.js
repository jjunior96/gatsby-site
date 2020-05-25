import React from 'react';

// import { FaRegLightbulb } from 'react-icons/fa';

import SocialLinks from '../SocialLinks';
import ThemeChallenger from '../ThemeChallenger';

import * as S from './styled';

const Navigation = () => {
  return (
    <S.NavigationWrapper>
      <SocialLinks />
      <ThemeChallenger />
    </S.NavigationWrapper>
  );
};

export default Navigation;
