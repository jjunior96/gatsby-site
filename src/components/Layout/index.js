import React from 'react';
import { Link } from 'gatsby';

import Navigation from '../Navigation';
import Sidebar from '../Sidebar';

import GlobalStyled from '../../styles/global';
import * as S from './styled';

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyled />
      <Sidebar />
      <S.LayouyMain>
        <S.SiteHeader>
          <S.SiteTitle>
            <Link to="/">Home</Link>
          </S.SiteTitle>
          <Navigation />
        </S.SiteHeader>
        {/* Elemento passado no index */}
        {children}
        <footer>Footer</footer>
      </S.LayouyMain>
    </S.LayoutWrapper>
  );
};

export default Layout;
