import React from 'react';
// import { Link } from 'gatsby';

import * as S from './styled';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeadLine>Him, Im Junior</S.HeadLine>
      <S.Description>Description</S.Description>
      <S.LinkButtom to="/categories">Get in Touch</S.LinkButtom>
    </S.HeaderWrapper>
  );
};

export default Header;
