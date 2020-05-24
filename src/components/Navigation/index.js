import React from 'react';

import { FaRegLightbulb } from 'react-icons/fa';

import SocialLinks from '../SocialLinks';

import * as S from './styled';

const Navigation = () => {
  return (
    <S.NavigationWrapper>
      <SocialLinks />
      <S.IconWrapper>
        <FaRegLightbulb />
      </S.IconWrapper>
    </S.NavigationWrapper>
  );
};

export default Navigation;
